export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight mb-6">
          your website, your values.
        </h1>
        <p className="text-lg md:text-xl text-warm-gray max-w-2xl mb-10 leading-relaxed">
          halal web development, custom software & AI solutions.
          <br />
          muslim-owned. no compromises.
        </p>
        <a
          href="#contact"
          className="inline-block bg-charcoal text-cream px-8 py-4 text-sm font-medium tracking-wide hover:bg-sage-dark transition-colors duration-300"
        >
          get in touch
        </a>
      </div>
    </section>
  );
}
