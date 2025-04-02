import "./hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="title_container">
        <h1 className="title_hero">
          <br /> Trasforma la tua vita con una
          <strong className="strong"> nutrizione </strong> su misura.
        </h1>
        <p className="text_hero">
          Consulenza nutrizionale personalizzata per migliorare <br /> la tua
          salute e il tuo benessere.
        </p>
        <a href="https://centrodimedicina.com/medici/elisabetta-ciannella/">
          <button className="btn_hero">Prenota una Consulenza</button>
        </a>
      </div>
      <div className="image_container">
        <img src="/backG.png" alt="Hero" className="image_hero" />
      </div>
    </div>
  );
}
