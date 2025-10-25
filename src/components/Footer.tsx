import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/aer-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img src={logo} alt="AER Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                AER
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              A smart mailbox that helps small businesses get paid on time.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Questions or partnership inquiries?
              </p>
              <a 
                href="mailto:saip4093@gmail.com" 
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <Mail className="w-4 h-4" />
                saip4093@gmail.com
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <h3 className="font-semibold">Get Started</h3>
            <p className="text-sm text-muted-foreground">
              Start getting paid faster — without chasing another invoice.
            </p>
            <Button className="bg-gradient-primary hover:opacity-90">
              Join the Waitlist
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 space-y-4">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
          </div>
          <p className="text-center text-sm text-muted-foreground">
            © 2025 AER. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;