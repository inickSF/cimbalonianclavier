import Link from "next/link";

const highlights = [
  "Concert-ready rental instruments with discreet on-site presence",
  "Historic atmosphere for villas, festivals, and cultural programmes",
  "Tailored recommendations for chamber music, continuo, and recital settings"
];

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero-panel">
        <p className="eyebrow">Early Keyboard Instrument Rental in Corfu</p>
        <h1>An elegant classical presence for refined performances.</h1>
        <p className="lead">
          Cimbalonian Clavier brings harpsichords, spinets, and clavichords to venues across Corfu
          with a calm, luxurious service shaped for festivals, recordings, and intimate salons.
        </p>
        <div className="hero-actions">
          <Link href="/instruments" className="button button-primary">
            View Instruments
          </Link>
          <Link href="/contact" className="button button-secondary">
            Request Availability
          </Link>
        </div>
      </section>

      <section className="ornament-card">
        <div className="section-heading">
          <p className="eyebrow">A cultivated repertoire of occasions</p>
          <h2>For performances that ask for texture, character, and grace.</h2>
        </div>
        <div className="feature-grid">
          {highlights.map((item) => (
            <article key={item} className="feature-card">
              <span className="feature-index">•</span>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy">
          <p className="eyebrow">Corfu Service</p>
          <h2>Historic sound, handled with modern care.</h2>
          <p>
            Each engagement is arranged with attention to repertoire, access, humidity, staging,
            and audience setting, so the instrument arrives with poise and leaves a lasting
            impression.
          </p>
        </div>
        <div className="quote-card">
          <p>
            “An early keyboard should feel less like equipment and more like part of the room’s
            conversation.”
          </p>
        </div>
      </section>
    </div>
  );
}
