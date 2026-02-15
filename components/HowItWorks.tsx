const steps = [
  {
    number: "01",
    title: "tell us the pain",
    description:
      "What's eating your time? Bookings? Customer messages? Daily ops? We start with the friction that costs you the most.",
  },
  {
    number: "02",
    title: "we build your agent",
    description:
      "A custom AI assistant trained on your business, connected to your tools, running on private infrastructure.",
  },
  {
    number: "03",
    title: "you stay in control",
    description:
      "Review, approve, override. Your agent works for you, not the other way around. Scale up as trust grows.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 md:px-12 lg:px-24 py-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          how it works
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <div key={step.number}>
              <span className="text-sage text-sm font-medium tracking-wider">
                {step.number}
              </span>
              <h3 className="text-xl font-medium mt-2 mb-4">{step.title}</h3>
              <p className="text-warm-gray leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
