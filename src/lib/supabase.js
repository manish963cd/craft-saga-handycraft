import { createClient } from '@supabase/supabase-js'

// For development/demo purposes - these will be replaced when Supabase is properly connected
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'

// Create client with fallback for demo mode
export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    // Disable auth persistence for demo mode when using placeholder values
    persistSession: !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)
  }
})