import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface EmailFormProps {
  onEmailSubmit: (email: string, remainingUses: number) => void;
  maxUses: number;
}

const EmailForm = ({ onEmailSubmit, maxUses }: EmailFormProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const verifyEmail = async (email: string) => {
    try {
      const { data, error } = await supabase.functions.invoke('verify-email', {
        body: { email }
      });
      
      if (error) throw error;
      return data?.isValid || false;
    } catch (error) {
      console.error('Error verifying email:', error);
      return false;
    }
  };

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    const isValid = await verifyEmail(email);
    if (!isValid) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address that can receive messages.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { data, error } = await supabase
        .from('background_remover_emails')
        .upsert([{ email, usage_count: 0 }], {
          onConflict: 'email',
          ignoreDuplicates: false
        })
        .select('usage_count')
        .single();

      if (error) throw error;

      const remainingUses = maxUses - (data?.usage_count || 0);
      onEmailSubmit(email, remainingUses);
      
      toast({
        title: "Success",
        description: "You can now use the background remover tool!",
      });
    } catch (error) {
      console.error('Error storing email:', error);
      toast({
        title: "Error",
        description: "Failed to submit email. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="p-6">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Enter your email to get started</h2>
        <p className="text-sm text-gray-600">
          We'll send you updates about our AI background removal tool and other exciting features.
          You can use the tool up to {maxUses} times with one email address.
        </p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleEmailSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default EmailForm;