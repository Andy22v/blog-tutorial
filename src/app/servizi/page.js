import "./service.css";

export default function Service() {
  return (
    <div className="service_contain">
      <div className="service">
        <img src="./keto.png" />
        <p>
          La tua salute merita il meglio: affidati ad una nutrizionista
          certificata!
        </p>
        <p>
          Sono Elisabetta Ciannella, Biologa Nutrizionista certificata Keto
          Approved® dall'Associazione Eupraxia.
        </p>
      </div>
      <div className="service1">
        <img src="./check.png" />
        <p>Tra i miei servizi puoi trovare:</p>
        <p>• Analisi Composizione corporea.</p>
        <p>• Analisi stato nutrizionale.</p>
        <p>• Bioimpedenziometria</p>
      </div>
      <div className="service2">
        <img src="./check.png" />
        <p>• Dieta</p>
        <p>• Plicometria</p>
        <p>• Visita per Consulenza nutrizionale</p>
        <p>• Educazione e alimentazione familiare</p>
      </div>
    </div>
  );
}
