import { Activity, BarChart3, Globe2, Zap, Award, Users } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Live Monitoring",
    description: "Track environmental metrics in real-time across all your operations",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Deep insights with AI-powered data analysis and predictive modeling",
    color: "accent"
  },
  {
    icon: Globe2,
    title: "Global Standards",
    description: "Compliant with international environmental regulations and frameworks",
    color: "primary"
  },
  {
    icon: Zap,
    title: "Instant Reports",
    description: "Generate comprehensive reports in seconds for stakeholders",
    color: "accent"
  },
  {
    icon: Award,
    title: "Certifications",
    description: "Automated pathway to environmental certifications and badges",
    color: "primary"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Engage your entire organization in sustainability goals",
    color: "accent"
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Everything You Need for
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Sustainable Growth
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive tools to measure, manage, and improve your environmental impact
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 shadow-soft hover:shadow-medium"
              >
                <div className={`inline-flex p-4 rounded-xl mb-6 ${
                  feature.color === 'primary' 
                    ? 'bg-gradient-primary' 
                    : 'bg-gradient-accent'
                }`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;