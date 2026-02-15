export default function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-24 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-warm-gray text-sm">
          © {new Date().getFullYear()} MultiMode AI. All rights reserved.
        </p>
        <a
          href="mailto:hello@multimodeai.com"
          className="text-warm-gray text-sm hover:text-charcoal transition-colors"
        >
          hello@multimodeai.com
        </a>
      </div>
    </footer>
  );
}
