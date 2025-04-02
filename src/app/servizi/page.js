import "./service.css";

export default function Service() {
  return (
    <div className="consulenza-container">
      <h2>Come funziona la consulenza?</h2>
      <div className="step-container">
        <div className="step">
          <h3 className="number_contain">1</h3>
          <h3>Prima visita</h3>
          <p>Valutazione completa e definizione degli obiettivi personali</p>
        </div>
        <div className="step">
          <h3 className="number_contain">2</h3>
          <h3>Piano personalizzato</h3>
          <p>Creazione di un piano alimentare su misura per te</p>
        </div>
        <div className="step">
          <h3 className="number_contain">3</h3>
          <h3>Follow-up</h3>
          <p>Monitoraggio regolare e adattamento del piano</p>
        </div>
      </div>
      <button className="cta-button">Prenota una consulenza</button>
    </div>
  );
}
