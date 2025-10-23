import { Link2, Bot, Users, BarChart3 } from "lucide-react";

const steps = [
  {
    icon: Link2,
    number: "01",
    title: "Connect",
    description: "Link your accounting system (read-only, safe OAuth). Takes just 5 minutes."
  },
  {
    icon: Bot,
    number: "02",
    title: "Automate",
    description: "Copilot finds unpaid invoices and sends friendly, on-brand reminders automatically."
  },
  {
    icon: Users,
    number: "03",
    title: "Collaborate",
    description: "You jump in only for tricky cases or disputes. We handle the routine work."
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Measure",
    description: "Dashboard shows: Are we getting paid faster? Which payments are stuck?"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Simple Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Four simple steps to start getting paid faster
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index} 
                  className="flex gap-6 p-6 rounded-2xl border border-border bg-card hover:shadow-medium transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center text-white font-bold text-lg shadow-soft">
                      {step.number}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-semibold">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
