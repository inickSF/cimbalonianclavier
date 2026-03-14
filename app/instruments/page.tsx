const instruments = [
  {
    name: "French Double-Manual Harpsichord",
    detail:
      "Resonant and ceremonial, suitable for recital programmes, continuo-led ensembles, and recording sessions."
  },
  {
    name: "Italian Single-Manual Harpsichord",
    detail:
      "Brilliant and immediate in character, ideal for chamber repertoire and intimate historic interiors."
  },
  {
    name: "Spinet for Salon Performance",
    detail:
      "A graceful footprint for private residences, receptions, and educational presentations."
  },
  {
    name: "Clavichord for Study and Display",
    detail:
      "Quietly expressive, well suited to residency work, demonstration, and historically informed study."
  }
];

export default function InstrumentsPage() {
  return (
    <div className="page">
      <section className="section-intro">
        <p className="eyebrow">Instrument Collection</p>
        <h1>Selected early keyboards for recital, continuo, and residence.</h1>
        <p className="lead">
          Availability can be tailored to programme type, venue scale, and the practical demands of
          transport throughout Greece and Southern Europe.
        </p>
      </section>

      <section className="instrument-list">
        {instruments.map((instrument) => (
          <article key={instrument.name} className="instrument-card">
            <h2>{instrument.name}</h2>
            <p>{instrument.detail}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
