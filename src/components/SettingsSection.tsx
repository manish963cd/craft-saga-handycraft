import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Sun, 
  Trash2, 
  Download,
  Eye,
  Mail,
  Smartphone,
  CreditCard,
  Lock
} from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export const SettingsSection = () => {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    smsNotifications: false,
    orderUpdates: true,
    promotionalEmails: false,
    darkMode: false,
    twoFactorAuth: false,
    dataSharing: false,
    cookieConsent: true
  })

  const { toast } = useToast()

  const updateSetting = (key: string, value: boolean) => {
    setSettings(prev => ({ ...prev, [key]: value }))
    toast({
      title: "Setting updated",
      description: "Your preferences have been saved.",
    })
  }

  const exportData = () => {
    toast({
      title: "Data export initiated",
      description: "You will receive an email with your data export within 24 hours.",
    })
  }

  const deleteAccount = () => {
    toast({
      title: "Account deletion requested",
      description: "Please check your email for confirmation instructions.",
      variant: "destructive"
    })
  }

  return (
    <div className="space-y-6">
      {/* Notifications */}
      <Card className="shadow-warm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Bell className="h-5 w-5 mr-2" />
            Notification Preferences
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="email-notifications" className="text-base font-medium">
                Email Notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive order updates and important announcements via email
              </p>
            </div>
            <Switch
              id="email-notifications"
              checked={settings.emailNotifications}
              onCheckedChange={(value) => updateSetting('emailNotifications', value)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="sms-notifications" className="text-base font-medium">
                SMS Notifications
              </Label>
              <p className="text-sm text-muted-foreground">
                Get order updates via SMS
              </p>
            </div>
            <Switch
              id="sms-notifications"
              checked={settings.smsNotifications}
              onCheckedChange={(value) => updateSetting('smsNotifications', value)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="order-updates" className="text-base font-medium">
                Order Updates
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive notifications about order status changes
              </p>
            </div>
            <Switch
              id="order-updates"
              checked={settings.orderUpdates}
              onCheckedChange={(value) => updateSetting('orderUpdates', value)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="promotional-emails" className="text-base font-medium">
                Promotional Emails
              </Label>
              <p className="text-sm text-muted-foreground">
                Receive newsletters and promotional offers
              </p>
            </div>
            <Switch
              id="promotional-emails"
              checked={settings.promotionalEmails}
              onCheckedChange={(value) => updateSetting('promotionalEmails', value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Privacy & Security */}
      <Card className="shadow-warm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2" />
            Privacy & Security
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="two-factor" className="text-base font-medium flex items-center">
                Two-Factor Authentication
                <Badge variant="secondary" className="ml-2">Recommended</Badge>
              </Label>
              <p className="text-sm text-muted-foreground">
                Add an extra layer of security to your account
              </p>
            </div>
            <Switch
              id="two-factor"
              checked={settings.twoFactorAuth}
              onCheckedChange={(value) => updateSetting('twoFactorAuth', value)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label htmlFor="data-sharing" className="text-base font-medium">
                Data Sharing
              </Label>
              <p className="text-sm text-muted-foreground">
                Allow sharing anonymized data for research and improvement
              </p>
            </div>
            <Switch
              id="data-sharing"
              checked={settings.dataSharing}
              onCheckedChange={(value) => updateSetting('dataSharing', value)}
            />
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">Change Password</Label>
              <p className="text-sm text-muted-foreground">
                Update your account password
              </p>
            </div>
            <Button variant="outline">
              <Lock className="h-4 w-4 mr-2" />
              Change
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Account Management */}
      <Card className="shadow-warm">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            Account Management
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">Download Your Data</Label>
              <p className="text-sm text-muted-foreground">
                Export your account data and order history
              </p>
            </div>
            <Button variant="outline" onClick={exportData}>
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-medium">Account Visibility</Label>
              <p className="text-sm text-muted-foreground">
                Control how your profile appears to other users
              </p>
            </div>
            <Button variant="outline">
              <Eye className="h-4 w-4 mr-2" />
              Manage
            </Button>
          </div>
          
          <Separator />
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label className="text-base font-medium text-red-600">Delete Account</Label>
              <p className="text-sm text-muted-foreground">
                Permanently delete your account and all associated data
              </p>
            </div>
            <Button variant="destructive" onClick={deleteAccount}>
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Connected Services */}
      <Card className="shadow-warm">
        <CardHeader>
          <CardTitle>Connected Services</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Email Verification</h4>
                <p className="text-sm text-muted-foreground">Your email is verified</p>
              </div>
            </div>
            <Badge variant="secondary">Verified</Badge>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <Smartphone className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Phone Number</h4>
                <p className="text-sm text-muted-foreground">Add your phone number</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Add</Button>
          </div>
          
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center space-x-3">
              <CreditCard className="h-5 w-5 text-muted-foreground" />
              <div>
                <h4 className="font-medium">Payment Methods</h4>
                <p className="text-sm text-muted-foreground">Manage your payment options</p>
              </div>
            </div>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}