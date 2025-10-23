import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is setup hard?",
    answer: "No — connect in minutes. No switching tools needed. We use secure OAuth to read your invoices, and you'll be up and running in under 5 minutes."
  },
  {
    question: "Can I approve messages before they go out?",
    answer: "Absolutely. You choose auto-send or approve mode. You have complete control over every message before it reaches your customers."
  },
  {
    question: "Is my accounting data safe?",
    answer: "Yes. We use secure, read-only OAuth connections and SOC 2-ready practices. Your data is encrypted in transit and at rest, and we never have write access to your accounting system."
  }
];

const FAQ = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-card"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
