import "./hero.css";

export default function Hero() {
  return (
    <div className="hero" id="hero">
      <div className="title_container">
        <h1 className="title_hero">
          <strong className="strong">Trasforma</strong> <br /> il tuo corpo.
        </h1>
        <h3 className="text_hero">
          Fai il primo passo verso un te più sano e più felice oggi!
        </h3>
        <button className="btn_hero">Inizia ora</button>
      </div>
      <div className="image_container">
        <img src="/backG.png" alt="Hero" className="image_hero" />
      </div>
    </div>
  );
}
