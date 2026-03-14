import Image from "next/image";
import Link from "next/link";
import heroKeyboard from "../Images/full_keybord_front.png";

const servicePoints = [
  "From the first phone call, we plan repertoire, venue access, timing, and the right instrument for the occasion.",
  "We coordinate transport, delivery, setup, and on-site readiness with quiet attention to every practical detail.",
  "From arrival to the first measure of the concert, the instrument is prepared to feel natural, elegant, and assured."
];

const metrics = [
  { label: "Primary Base", value: "Greece" },
  { label: "Instruments", value: "Harpsichord & Fortepiano" },
  { label: "Formats", value: "Concerts, Festivals, Recordings" }
];

const processCards = [
  {
    title: "Planning",
    copy: "We shape the instrument choice, programme fit, access needs, and event flow before anything moves."
  },
  {
    title: "Delivery",
    copy: "Transport, placement, timing, and setup are coordinated so the instrument arrives ready and calm."
  },
  {
    title: "Performance",
    copy: "From the room atmosphere to the opening measure, everything is prepared to feel seamless."
  }
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
        <div className="hero-grid">
          <div className="hero-content">
            <p className="eyebrow">Early Keyboard Instrument Rental in Greece & Southern Europe</p>
            <h1>Modern logistics for historically informed performance.</h1>
            <p className="lead">
              Based primarily in Greece, Cimbalonian Clavier provides harpsichord and fortepiano
              rental with selected service across Italy, Bulgaria, Hungary, Austria, Germany, and
              France.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Check Availability
              </Link>
            </div>
            <div className="hero-metrics">
              {metrics.map((metric) => (
                <article key={metric.label} className="metric-card">
                  <span>{metric.label}</span>
                  <strong>{metric.value}</strong>
                </article>
              ))}
            </div>
          </div>
          <div className="hero-preview-column">
            <article className="hero-preview-card">
              <div className="hero-preview-image">
                <Image
                  src={heroKeyboard}
                  alt="Keyboard detail placeholder"
                  fill
                  className="hero-card-image"
                  sizes="(max-width: 900px) 100vw, 360px"
                />
              </div>
              <div className="hero-preview-copy">
                <p>Harpsichord</p>
                <span>Concert programmes, continuo, and recording sessions.</span>
              </div>
            </article>
            <article className="hero-preview-card hero-preview-card-offset">
              <div className="hero-preview-image">
                <Image
                  src={heroKeyboard}
                  alt="Fortepiano placeholder detail"
                  fill
                  className="hero-card-image hero-card-image-alt"
                  sizes="(max-width: 900px) 100vw, 360px"
                />
              </div>
              <div className="hero-preview-copy">
                <p>Fortepiano</p>
                <span>Salon performances, recitals, and intimate cultural events.</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="ornament-card">
        <div className="services-grid">
          <div className="section-heading">
            <p className="eyebrow">What We Primarily Do</p>
            <h2>We take care of the logistics from the first call to the first measure.</h2>
            <ul className="feature-list">
              {servicePoints.map((item) => (
                <li key={item} className="feature-item">
                  <span className="feature-index">•</span>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="process-stack">
            {processCards.map((item) => (
              <article key={item.title} className="process-card">
                <p className="process-step">{item.title}</p>
                <p>{item.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="split-section">
        <div className="split-copy">
          <p className="eyebrow">Regional Service</p>
          <h2>Historic sound, handled with a contemporary standard of care.</h2>
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
