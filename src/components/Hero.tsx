import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, TrendingUp, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Sustainable forest" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/90 to-primary/5" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
              <Leaf className="w-4 h-4" />
              <span className="text-sm font-medium">Environmental Impact Tracking</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Measure Your
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Green Impact
              </span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
              Transform your business with comprehensive environmental scoring. 
              Track metrics, reduce carbon footprint, and lead the sustainable revolution.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="text-lg group bg-gradient-primary hover:opacity-90 transition-opacity shadow-medium"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg border-2 hover:bg-primary/5"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">40%</div>
                <div className="text-sm text-muted-foreground">Avg. Reduction</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">24/7</div>
                <div className="text-sm text-muted-foreground">Monitoring</div>
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="grid gap-4">
            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Real-time Analytics</h3>
                  <p className="text-muted-foreground">
                    Track your environmental metrics in real-time with comprehensive dashboards
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-accent/10">
                  <Leaf className="w-6 h-6 text-accent" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Carbon Tracking</h3>
                  <p className="text-muted-foreground">
                    Measure and reduce your carbon footprint with AI-powered recommendations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border shadow-soft hover:shadow-medium transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">Compliance Ready</h3>
                  <p className="text-muted-foreground">
                    Meet regulatory requirements with automated reporting and certifications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;