export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
          AI agents that work
          <br />
          for your business.
        </h1>
        <p className="text-lg md:text-xl text-warm-gray max-w-2xl mb-10 leading-relaxed">
          we deploy private AI assistants that handle bookings, answer
          customers, and run daily operations — on WhatsApp, web, and email.
          <br />
          muslim-owned. values-aligned.
        </p>
        <a
          href="#contact"
          className="inline-block bg-charcoal text-cream px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage-dark transition-colors duration-300"
        >
          book a free consultation
        </a>
      </div>
    </section>
  );
}
