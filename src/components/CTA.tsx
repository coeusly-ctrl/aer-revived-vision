import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const CTA = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    software: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "You're on the early-access list!",
      description: "We'll reach out soon with your beta invite. Invite three friends to move up the list.",
      duration: 5000,
    });
    setFormData({ name: "", email: "", company: "", software: "" });
  };

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-background to-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-3xl p-8 lg:p-12 border border-border shadow-medium relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-primary opacity-10 blur-3xl rounded-full" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-accent opacity-10 blur-3xl rounded-full" />
            
            <div className="relative z-10 space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>Early Access</span>
                </div>

                <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Reserve Your Spot
                </h2>

                <p className="text-xl text-muted-foreground">
                  Starting at $99 – $299 per month. Join the waitlist now for early-access discounts.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-11"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input 
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="software">Current Accounting Software</Label>
                  <Select value={formData.software} onValueChange={(value) => setFormData({...formData, software: value})}>
                    <SelectTrigger id="software" className="h-11">
                      <SelectValue placeholder="Select your software" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quickbooks">QuickBooks</SelectItem>
                      <SelectItem value="xero">Xero</SelectItem>
                      <SelectItem value="netsuite">NetSuite</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full text-lg bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
                >
                  Join the Waitlist
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
