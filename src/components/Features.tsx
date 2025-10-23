import { Sparkles, TrendingUp, Gauge, BarChart } from "lucide-react";

const features = [
  {
    icon: Sparkles,
    title: "Instant ROI",
    description: "Get cash in sooner for better cash flow. No massive platform needed."
  },
  {
    icon: TrendingUp,
    title: "Easy Setup",
    description: "5 minutes to connect. No training required, no new tools to learn."
  },
  {
    icon: Gauge,
    title: "Drop-In Solution",
    description: "Works with your existing accounting system. No switching needed."
  },
  {
    icon: BarChart,
    title: "Simple Analytics",
    description: "Dashboard everyone understands. Two key questions answered instantly."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Why It's Smart
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Small teams spend hours chasing invoices and updating spreadsheets. 
              You don't need a massive new platform — you just need a helper that fixes one painful job right now.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="flex flex-col items-center text-center p-6 rounded-2xl bg-card border border-border hover:shadow-medium transition-shadow"
                >
                  <div className="p-4 rounded-xl bg-primary/10 mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-16 p-8 lg:p-12 rounded-3xl bg-card border border-primary/20 text-center">
            <div className="text-3xl font-bold mb-2">Collections Copilot = Instant ROI</div>
            <p className="text-lg text-muted-foreground">
              Start getting paid faster today
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
