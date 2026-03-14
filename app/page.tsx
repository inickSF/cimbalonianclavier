import Image from "next/image";
import Link from "next/link";
import heroKeyboard from "../Images/full_keybord_front.png";

const highlights = [
  "From the first phone call, we plan repertoire, venue access, timing, and the right instrument for the occasion.",
  "We coordinate transport, delivery, setup, and on-site readiness with quiet attention to every practical detail.",
  "From arrival to the first measure of the concert, the instrument is prepared to feel natural, elegant, and assured."
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
            Based primarily in Greece, Cimbalonian Clavier offers harpsichord and fortepiano rental
            for festivals, recordings, private salons, and concert settings, with selected service
            across Italy, Bulgaria, Hungary, Austria, Germany, and France.
          </p>
          <div className="hero-instrument-strip">
            <article className="hero-instrument-card">
              <div className="hero-instrument-image">
                <div className="hero-placeholder hero-placeholder-harpsichord" aria-hidden="true">
                  <span className="harpsichord-body" />
                  <span className="harpsichord-lid" />
                  <span className="harpsichord-keys" />
                  <span className="harpsichord-leg harpsichord-leg-left" />
                  <span className="harpsichord-leg harpsichord-leg-right" />
                </div>
              </div>
              <div className="hero-instrument-meta">
                <p>Harpsichord</p>
                <span>Elegant concert profile</span>
              </div>
            </article>
            <article className="hero-instrument-card">
              <div className="hero-instrument-image">
                <div className="hero-placeholder hero-placeholder-fortepiano" aria-hidden="true">
                  <span className="fortepiano-body" />
                  <span className="fortepiano-lid" />
                  <span className="fortepiano-keys" />
                  <span className="fortepiano-leg fortepiano-leg-left" />
                  <span className="fortepiano-leg fortepiano-leg-center" />
                  <span className="fortepiano-leg fortepiano-leg-right" />
                </div>
              </div>
              <div className="hero-instrument-meta">
                <p>Fortepiano</p>
                <span>Refined salon character</span>
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
          <p className="eyebrow">What We Primarily Do</p>
          <h2>We take care of the logistics from the first call to the first measure.</h2>
        </div>
        <ul className="feature-list">
          {highlights.map((item) => (
            <li key={item} className="feature-item">
              <span className="feature-index">•</span>
              <p>{item}</p>
            </li>
          ))}
        </ul>
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
