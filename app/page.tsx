import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../components/reveal";
import heroKeyboard from "../Images/full_keybord_front.png";

const servicePoints = [
  "From the first phone call, we shape the right instrument, timing, access, and concert requirements.",
  "We manage transport, placement, setup, and practical coordination with calm attention to detail.",
  "From arrival to the first measure, the instrument is prepared to feel natural, elegant, and assured."
];

const instrumentCards = [
  {
    title: "Harpsichord",
    copy: "For concert programmes, continuo work, recordings, and historic interiors."
  },
  {
    title: "Fortepiano",
    copy: "For salon recitals, intimate cultural events, and historically informed performance."
  }
];

export default function HomePage() {
  return (
    <div className="page page-home">
      <section className="hero-screen">
        <div className="hero-screen-media" aria-hidden="true">
          <Image
            src={heroKeyboard}
            alt=""
            fill
            priority
            className="hero-screen-image"
            sizes="100vw"
          />
        </div>
        <div className="hero-screen-inner">
          <div className="hero-topline">
            <span>Based primarily in Greece</span>
            <span>Harpsichord & Fortepiano</span>
            <span>Selected service across Southern Europe</span>
          </div>
          <div className="hero-center">
            <p className="eyebrow">Early Keyboard Instrument Rental</p>
            <h1>Historically informed instruments, handled with modern calm.</h1>
            <p className="lead">
              Cimbalonian Clavier provides harpsichord and fortepiano rental for festivals,
              recordings, concerts, and private salons, with Greece at the centre of its service.
            </p>
            <div className="hero-actions">
              <Link href="/contact" className="button button-primary">
                Check Availability
              </Link>
            </div>
          </div>
          <div className="hero-bottomline">
            <span>No upfront clutter</span>
            <span>Logistics handled discreetly</span>
            <span>Ready from first call to first measure</span>
          </div>
        </div>
      </section>

      <Reveal>
        <section className="story-section">
          <div className="story-heading">
            <p className="eyebrow">What We Primarily Do</p>
            <h2>We take care of the logistics so the music can arrive with ease.</h2>
          </div>
          <div className="story-points">
            {servicePoints.map((item, index) => (
              <Reveal key={item} delay={index * 90}>
                <article className="story-point">
                  <span className="story-number">0{index + 1}</span>
                  <p>{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <section className="media-band">
        {instrumentCards.map((card, index) => (
          <Reveal key={card.title} delay={index * 120}>
            <article className="media-card">
              <div className="media-card-image">
                <Image
                  src={heroKeyboard}
                  alt={card.title}
                  fill
                  className={index === 0 ? "media-image" : "media-image media-image-alt"}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>
              <div className="media-card-copy">
                <p className="media-card-title">{card.title}</p>
                <p>{card.copy}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <Reveal>
        <section className="statement-section">
          <div className="statement-copy">
            <p className="eyebrow">Regional Service</p>
            <h2>Greece first, with selected work across Italy, Bulgaria, Hungary, Austria, Germany, and France.</h2>
          </div>
          <div className="statement-quote">
            <p>Quiet logistics. Refined presentation. Instruments ready for performance.</p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
