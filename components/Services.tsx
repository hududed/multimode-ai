const services = [
  {
    title: "customer agent",
    subtitle: "your 24/7 front desk",
    description:
      "Answers customer questions, takes bookings, sends reminders — on WhatsApp and web. You review and approve. It never sleeps.",
    features: [
      "Handles inquiries + FAQs automatically",
      "Books appointments + reduces no-shows",
      "You stay in control — approve or override anytime",
    ],
  },
  {
    title: "morning brief",
    subtitle: "your day, ready before you are",
    description:
      "A daily digest of bookings, messages, and tasks — delivered to your WhatsApp or email before you start work. Includes draft replies for anything that needs you.",
    features: [
      "Today's schedule + flagged messages",
      "Draft replies ready for your approval",
      "Priority tagging by topic (sales, ops, support)",
    ],
  },
  {
    title: "workflow autopilot",
    subtitle: "connect your tools. automate the rest.",
    description:
      "We link your calendar, email, and business apps into automated workflows — so routine tasks run themselves. Full audit log so you see everything.",
    features: [
      "Calendar, email, CRM integrations",
      "Scheduled actions + triggered automations",
      "Complete audit trail of every action taken",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24 bg-beige">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          what we build
        </h2>
        <p className="text-warm-gray mb-16 max-w-2xl">
          AI agents trained on your business, connected to your tools, and built
          so you stay in control.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="text-xl font-medium mb-1">{service.title}</h3>
              <p className="text-sage-dark text-sm font-medium mb-4">
                {service.subtitle}
              </p>
              <p className="text-warm-gray leading-relaxed mb-5">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="text-sm text-warm-gray flex items-start gap-2"
                  >
                    <span className="text-sage mt-0.5 shrink-0">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
