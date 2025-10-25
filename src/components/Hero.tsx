import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, Shield, Zap, DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import heroBg from "@/assets/hero-bg.jpg";
import { supabase } from "@/integrations/supabase/client";

const Hero = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('waitlist')
        .insert({
          email: email.trim(),
          name: 'Quick Signup',
          company: 'Not provided',
          accounting_software: 'Not specified'
        });

      if (error) throw error;

      toast({
        title: "You're on the early-access list!",
        description: "We'll reach out soon with your beta invite.",
      });
      setEmail("");
    } catch (error) {
      console.error('Error submitting to waitlist:', error);
      toast({
        title: "Oops! Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Professional business" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/98 via-background/95 to-primary/5" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Mail className="w-4 h-4" />
            <span className="text-sm font-medium">Get paid faster without changing your accounting system</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            A Smart Mailbox That Helps
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Small Businesses Get Paid
            </span>
          </h1>

          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Collections Copilot connects directly to QuickBooks, Xero, or NetSuite to read unpaid invoices, 
            send polite reminders, suggest payment plans, and hand off tough cases to you — automatically.
          </p>

          <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 h-12 text-base"
            />
            <Button 
              type="submit"
              size="lg" 
              disabled={isSubmitting}
              className="bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </Button>
          </form>

          <p className="text-sm text-muted-foreground">
            Works seamlessly with QuickBooks · Xero · NetSuite
          </p>

          {/* Quick Benefits */}
          <div className="grid sm:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">5-Minute Setup</div>
                <div className="text-sm text-muted-foreground">Easy integration</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <DollarSign className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">15-30% Faster</div>
                <div className="text-sm text-muted-foreground">Collections time</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-3 p-6 rounded-xl bg-card border border-border">
              <div className="p-3 rounded-lg bg-primary/10">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="text-center">
                <div className="font-semibold">SOC 2 Ready</div>
                <div className="text-sm text-muted-foreground">Secure & compliant</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;