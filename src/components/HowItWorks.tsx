import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Connect Your Data",
    description: "Integrate your existing systems and data sources in minutes with our simple onboarding process."
  },
  {
    number: "02",
    title: "AI Analysis",
    description: "Our advanced AI engine analyzes your environmental data and identifies key improvement areas."
  },
  {
    number: "03",
    title: "Get Your Score",
    description: "Receive a comprehensive green score with actionable insights and personalized recommendations."
  },
  {
    number: "04",
    title: "Track & Improve",
    description: "Monitor progress in real-time and watch your sustainability metrics improve month over month."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Steps */}
          <div className="space-y-12">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium">
                Simple Process
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Start Your Green
                <span className="block text-primary">Journey Today</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Four simple steps to transform your environmental impact
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-medium group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-2 pt-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Why Choose AER?</h3>
                <p className="text-muted-foreground">
                  Join hundreds of companies already making a difference
                </p>
              </div>

              <div className="space-y-4">
                {[
                  "Industry-leading accuracy with 99.8% precision",
                  "Real-time data processing and instant insights",
                  "Compliant with ISO 14001 and GRI standards",
                  "Dedicated support from sustainability experts",
                  "Integrates with 100+ popular business tools",
                  "Secure, encrypted data with SOC 2 compliance"
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i}
                        className="w-10 h-10 rounded-full border-2 border-background bg-gradient-primary"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold">500+ companies</div>
                    <div className="text-muted-foreground">trust AER Green Score</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;