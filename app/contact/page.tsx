export default function ContactPage() {
  return (
    <div className="page">
      <section className="section-intro narrow">
        <p className="eyebrow">Contact</p>
        <h1>Arrange an instrument with clarity and confidence.</h1>
        <p className="lead">
          Share your date, venue, programme, and preferred instrument. We can then advise on
          suitability, availability, and logistics for delivery across Greece and Southern Europe.
        </p>
      </section>

      <section className="contact-grid">
        <article className="contact-card">
          <h2>Email</h2>
          <p>info@cimbalonianclavier.com</p>
        </article>
        <article className="contact-card">
          <h2>Location</h2>
          <p>Based in Greece, serving Southern Europe.</p>
        </article>
        <article className="contact-card">
          <h2>Typical Uses</h2>
          <p>Festivals, recordings, private concerts, villas, galleries, and educational events.</p>
        </article>
      </section>
    </div>
  );
}
