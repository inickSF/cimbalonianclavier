import Image from "next/image";
import Link from "next/link";
import { AnimatedHeadline } from "../components/animated-headline";
import { Reveal } from "../components/reveal";
import fortepianoImage from "../Images/Fortepiano_full.png";
import harpsichordImage from "../Images/Harpsichord_full.jpeg";
import parthenonImage from "../Images/Parthenon_full.jpg";
import heroKeyboard from "../Images/full_keybord_front.png";

const servicePoints = [
  "From the first phone call, we shape the right instrument, timing, access, and concert requirements.",
  "We manage transport, placement, setup, and practical coordination with calm attention to detail.",
  "From arrival to the first measure, the instrument is prepared to feel natural, elegant, and assured."
];

const instrumentCards = [
  {
    title: "Harpsichord",
    copy:
      "For concert programmes, continuo work, recordings, and historic interiors where presence, character, and practical preparation matter equally.",
    image: harpsichordImage,
    imageClassName: "media-image media-image-harpsichord"
  },
  {
    title: "Fortepiano",
    copy:
      "For salon recitals, intimate cultural events, and historically informed performance shaped around clarity, refinement, and room atmosphere.",
    image: fortepianoImage,
    imageClassName: "media-image media-image-fortepiano"
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
            <AnimatedHeadline text="Historically informed instruments, handled with modern calm." />
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

      <Reveal className="reveal-panel">
        <section className="story-section">
          <div className="story-heading">
            <p className="eyebrow">What We Primarily Do</p>
            <h2>We take care of the logistics so the music can arrive with ease.</h2>
            <p className="story-intro">
              Each engagement begins with a practical conversation and develops into a clear, calm
              plan for delivery, placement, timing, and performance readiness.
            </p>
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
          <Reveal key={card.title} delay={index * 120} className="reveal-panel reveal-lift">
            <article className="media-card">
              <div className="media-card-image">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className={card.imageClassName}
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

      <Reveal className="reveal-panel reveal-soft">
        <section className="statement-section">
          <div className="statement-copy">
            <div className="statement-copy-media" aria-hidden="true">
              <Image
                src={parthenonImage}
                alt=""
                fill
                className="statement-copy-image"
                sizes="(max-width: 980px) 100vw, 50vw"
              />
            </div>
            <p className="eyebrow">Regional Service</p>
            <h2>Greece first, with selected work across Italy, Bulgaria, Hungary, Austria, Germany, and France.</h2>
            <p className="statement-support">
              The service is rooted in Greece and can extend where the event, repertoire, and
              logistics make the collaboration worthwhile.
            </p>
          </div>
          <div className="statement-quote">
            <p>Quiet logistics. Refined presentation. Instruments ready for performance.</p>
          </div>
        </section>
      </Reveal>
    </div>
  );
}
