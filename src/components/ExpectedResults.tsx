const metrics = [
  {
    metric: "Days Sales Outstanding (DSO)",
    improvement: "15 – 30% faster collections"
  },
  {
    metric: "Dispute resolution time",
    improvement: "25 – 40% shorter"
  },
  {
    metric: "Write-offs",
    improvement: "10 – 20% lower"
  },
  {
    metric: "Customer Satisfaction",
    improvement: "≥ 4.5 / 5"
  }
];

const ExpectedResults = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Expected Results
            </h2>
            <p className="text-xl text-muted-foreground">
              From early pilots
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-6 font-semibold text-lg">Metric</th>
                  <th className="text-left py-4 px-6 font-semibold text-lg">Typical Improvement</th>
                </tr>
              </thead>
              <tbody>
                {metrics.map((item, index) => (
                  <tr 
                    key={index}
                    className="border-b border-border hover:bg-muted/50 transition-colors"
                  >
                    <td className="py-4 px-6 font-medium">{item.metric}</td>
                    <td className="py-4 px-6 text-primary font-semibold">{item.improvement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpectedResults;
