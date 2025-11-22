const reasons = [
  {
    title: "ethical alternative",
    description:
      "No Wix, Squarespace, or other Israeli-based vendors. Build with a clear conscience.",
  },
  {
    title: "muslim-owned",
    description: "Supporting the ummah, one project at a time.",
  },
  {
    title: "done-for-you",
    description:
      "No DIY headaches. We handle everything from design to deployment.",
  },
  {
    title: "modern stack",
    description: "Fast, secure, SEO-optimized. Built with the latest tech.",
  },
  {
    title: "direct access",
    description:
      "Talk to the developer directly. No support tickets, no runaround.",
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="px-6 md:px-12 lg:px-24 py-24">
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
