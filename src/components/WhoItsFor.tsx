import { Briefcase, Hammer, Package, Calculator, CheckCircle2 } from "lucide-react";

const audiences = [
  {
    icon: Briefcase,
    title: "Service businesses",
    description: "Agencies, consultants"
  },
  {
    icon: Hammer,
    title: "Construction & trade firms",
    description: "Contractors, builders"
  },
  {
    icon: Package,
    title: "Wholesalers / distributors",
    description: "B2B suppliers"
  },
  {
    icon: Calculator,
    title: "Bookkeepers and fractional CFOs",
    description: "Financial professionals"
  }
];

const WhoItsFor = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Who It's For
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              If you send invoices and wait to get paid, this was built for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {audiences.map((audience, index) => {
              const Icon = audience.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:shadow-soft transition-shadow"
                >
                  <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{audience.title}</h3>
                    <p className="text-muted-foreground">{audience.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-card rounded-2xl p-8 border-2 border-primary/30 text-center">
            <CheckCircle2 className="w-12 h-12 text-primary mx-auto mb-4" />
            <p className="text-xl font-semibold">
              If you send invoices and wait to get paid, this was built for you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
