import Image from "next/image";
import Link from "next/link";
import heroKeyboard from "../Images/full_keybord_front.png";

const highlights = [
  "Concert-ready rental instruments with discreet on-site presence",
  "Historic atmosphere for villas, festivals, and cultural programmes",
  "Tailored recommendations for chamber music, continuo, and recital settings"
];

export default function HomePage() {
  return (
    <div className="page">
      <section className="hero-panel">
        <div className="hero-scene" aria-hidden="true">
          <Image
            src={heroKeyboard}
            alt=""
            fill
            priority
            className="hero-image"
            sizes="(max-width: 900px) 100vw, 1180px"
          />
        </div>
        <div className="hero-content">
          <p className="eyebrow">Early Keyboard Instrument Rental in Greece & Southern Europe</p>
          <h1>An elegant classical presence for refined performances.</h1>
          <p className="lead">
            Cimbalonian Clavier brings harpsichords, spinets, and clavichords to venues across
            Greece, Italy, Bulgaria, Hungary, Austria, Germany, and France with a calm, luxurious
            service shaped for festivals, recordings, and intimate salons.
          </p>
          <div className="hero-instrument-strip">
            <article className="hero-instrument-card">
              <div className="hero-instrument-image">
                <Image
                  src="/harpsichord-placeholder.svg"
                  alt="Harpsichord placeholder"
                  fill
                  className="hero-thumbnail"
                  sizes="(max-width: 900px) 100vw, 300px"
                />
              </div>
              <div className="hero-instrument-meta">
                <p>Harpsichord</p>
                <span>Placeholder image until final photography</span>
              </div>
            </article>
            <article className="hero-instrument-card">
              <div className="hero-instrument-image">
                <Image
                  src="/fortepiano-placeholder.svg"
                  alt="Fortepiano placeholder"
                  fill
                  className="hero-thumbnail"
                  sizes="(max-width: 900px) 100vw, 300px"
                />
              </div>
              <div className="hero-instrument-meta">
                <p>Fortepiano</p>
                <span>Placeholder image until final photography</span>
              </div>
            </article>
          </div>
          <div className="hero-actions">
            <Link href="/contact" className="button button-primary">
              Check Availability
            </Link>
          </div>
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
          <p className="eyebrow">Regional Service</p>
          <h2>Historic sound, handled with modern care.</h2>
          <p>
            Each engagement is arranged with attention to repertoire, access, humidity, staging,
            cross-border logistics, and audience setting, so the instrument arrives with poise and
            leaves a lasting impression.
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
