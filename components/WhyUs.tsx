const reasons = [
  {
    title: "values-aligned",
    description:
      "Built with tools and vendors you can feel good about. Your data stays yours.",
  },
  {
    title: "muslim-owned",
    description: "Supporting the ummah, one business at a time.",
  },
  {
    title: "private by default",
    description:
      "Your AI agent runs on isolated infrastructure. Not shared. Not scraped.",
  },
  {
    title: "human in the loop",
    description:
      "Every agent is built so you approve, review, and override. AI handles the work, you make the calls.",
  },
  {
    title: "direct access",
    description:
      "Talk to the builder directly. No support tickets, no runaround.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="px-6 md:px-12 lg:px-24 py-24 bg-beige">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          why choose us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reasons.map((reason) => (
            <div key={reason.title} className="border-l-2 border-sage pl-6">
              <h3 className="text-lg font-medium mb-2">{reason.title}</h3>
              <p className="text-warm-gray text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
