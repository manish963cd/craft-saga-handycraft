import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export const useAuth = () => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    const getSession = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      setUser(session?.user ?? null)
      setLoading(false)
    }
    
    getSession()

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null)
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const signUp = async (email, password, metadata = {}) => {
    // Demo mode - simulate successful signup
    if (!import.meta.env.VITE_SUPABASE_URL) {
      return { 
        data: { user: { email, user_metadata: metadata } }, 
        error: null 
      }
    }
    
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: metadata
      }
    })
    return { data, error }
  }

  const signIn = async (email, password) => {
    // Demo mode - simulate successful signin
    if (!import.meta.env.VITE_SUPABASE_URL) {
      const mockUser = { 
        email, 
        user_metadata: { 
          first_name: 'Demo', 
          last_name: 'User',
          full_name: 'Demo User'
        } 
      }
      setUser(mockUser)
      return { data: { user: mockUser }, error: null }
    }
    
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })
    return { data, error }
  }

  const signOut = async () => {
    // Demo mode - clear user state
    if (!import.meta.env.VITE_SUPABASE_URL) {
      setUser(null)
      return { error: null }
    }
    
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  const resetPassword = async (email) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email)
    return { data, error }
  }

  const updateProfile = async (updates) => {
    const { data, error } = await supabase.auth.updateUser({
      data: updates
    })
    return { data, error }
  }

  return {
    user,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile
  }
}