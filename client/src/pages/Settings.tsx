import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function Settings() {
  const [apiKeyCopied, setApiKeyCopied] = useState(false);
  const [autoResponseEnabled, setAutoResponseEnabled] = useState(true);
  const [learningModeEnabled, setLearningModeEnabled] = useState(true);

  const handleCopyApiKey = () => {
    console.log("API key copied");
    setApiKeyCopied(true);
    setTimeout(() => setApiKeyCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-semibold mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and automation preferences</p>
      </div>

      <Tabs defaultValue="account" className="w-full">
        <TabsList className="grid w-full grid-cols-4 max-w-2xl">
          <TabsTrigger value="account" data-testid="tab-account">Account</TabsTrigger>
          <TabsTrigger value="integration" data-testid="tab-integration">Integration</TabsTrigger>
          <TabsTrigger value="preferences" data-testid="tab-preferences">Preferences</TabsTrigger>
          <TabsTrigger value="billing" data-testid="tab-billing">Billing</TabsTrigger>
        </TabsList>

        <TabsContent value="account" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details and profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" defaultValue="Professional User" data-testid="input-name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="user@example.com" defaultValue="user@inquiryai.com" data-testid="input-email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Company Name" defaultValue="InquiryAI Solutions" data-testid="input-company" />
              </div>
              <Button data-testid="button-save-account">Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integration" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>API Configuration</CardTitle>
              <CardDescription>Manage your API keys and integration settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <div className="flex gap-2">
                  <Input 
                    id="api-key" 
                    type="password" 
                    defaultValue="sk_live_1234567890abcdef" 
                    readOnly 
                    className="font-mono"
                    data-testid="input-api-key"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={handleCopyApiKey}
                    data-testid="button-copy-api-key"
                  >
                    {apiKeyCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">Keep your API key secure and never share it publicly</p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <Input id="webhook-url" placeholder="https://your-domain.com/webhook" data-testid="input-webhook" />
              </div>
              <Button data-testid="button-save-integration">Save Integration Settings</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connected Services</CardTitle>
              <CardDescription>Manage third-party integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">Email Service</h4>
                  <p className="text-sm text-muted-foreground">Connected to support@company.com</p>
                </div>
                <Button variant="outline" data-testid="button-disconnect-email">Disconnect</Button>
              </div>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">CRM Integration</h4>
                  <p className="text-sm text-muted-foreground">Not connected</p>
                </div>
                <Button data-testid="button-connect-crm">Connect</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="preferences" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Automation Preferences</CardTitle>
              <CardDescription>Configure how your automation behaves</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-response">Auto-Response</Label>
                  <p className="text-sm text-muted-foreground">Automatically respond to inquiries</p>
                </div>
                <Switch 
                  id="auto-response" 
                  checked={autoResponseEnabled}
                  onCheckedChange={setAutoResponseEnabled}
                  data-testid="switch-auto-response"
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="learning-mode">Learning Mode</Label>
                  <p className="text-sm text-muted-foreground">Improve responses based on feedback</p>
                </div>
                <Switch 
                  id="learning-mode" 
                  checked={learningModeEnabled}
                  onCheckedChange={setLearningModeEnabled}
                  data-testid="switch-learning-mode"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confidence-threshold">Confidence Threshold</Label>
                <Input 
                  id="confidence-threshold" 
                  type="number" 
                  min="0" 
                  max="100" 
                  defaultValue="85" 
                  data-testid="input-confidence-threshold"
                />
                <p className="text-sm text-muted-foreground">Minimum confidence level to auto-respond (0-100%)</p>
              </div>
              <Button data-testid="button-save-preferences">Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-6 mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Current Plan</CardTitle>
              <CardDescription>Manage your subscription and billing</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-6 border rounded-lg space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold">Professional Plan</h3>
                    <p className="text-muted-foreground">Billed monthly</p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">$99</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
                <div className="space-y-2 pt-4 border-t">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Inquiries per month</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Response templates</span>
                    <span className="font-medium">Unlimited</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">API access</span>
                    <span className="font-medium">Full access</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" data-testid="button-change-plan">Change Plan</Button>
                <Button variant="outline" data-testid="button-cancel-subscription">Cancel Subscription</Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Payment Method</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-medium">•••• •••• •••• 4242</h4>
                  <p className="text-sm text-muted-foreground">Expires 12/2025</p>
                </div>
                <Button variant="outline" data-testid="button-update-payment">Update</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
