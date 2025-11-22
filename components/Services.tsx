const services = [
  {
    title: "web development",
    description:
      "From landing pages to full e-commerce stores. Fast, modern, and built to convert.",
  },
  {
    title: "custom software",
    description:
      "Business tools, dashboards, and automation tailored to your exact needs.",
  },
  {
    title: "AI integration",
    description:
      "Chatbots, smart automation, and AI-powered features to give you an edge.",
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 md:px-12 lg:px-24 py-24 bg-beige">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-16">
          what we do
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.title}>
              <h3 className="text-xl font-medium mb-4">{service.title}</h3>
              <p className="text-warm-gray leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
