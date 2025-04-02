import "./about.css";
export default function About() {
  return (
    <>
      <div className="about view" id="about">
        <h2 className="about_title">Chi Sono</h2>
        <div className="aboutInfo ">
          <div className="aboutImg_container ">
            <img className="about_img" src="/lisa1.JPG" />
          </div>
          <div className="info_container ">
            <div className="p_container ">
              <h3>Dott.ssa Elisabetta Ciannella</h3>
              <p>Specialista in Dietistica e Nutrizione</p>
              <p>
                Laureata in Scienze Biologiche presso l’Università degli Studi
                di Ferrara e laurea magistrale in Scienze Biomolecolari
                Cellulari presso la medesima Università. Ho conseguito Master in
                Dietetica e Nutrizione Umana e organizzato dal BHC (Brain Health
                Centre). Ho partecipato a diversi corsi e congressi a tema
                alimentazione e nutrizione.
              </p>
            </div>
            <div className="experience_contain">
              <div className="experience">
                <img src="/professionalism.png" />
                <p>Qualificata</p>
              </div>
              <div className="experience">
                <img src="/user.png" />

                <p>Esperta</p>
              </div>
              <div className="experience">
                <img src="/book.png" />

                <p>Aggiornata</p>
              </div>
            </div>
          </div>
        </div>
        <div className="service">
          <img src="./keto.png" alt="Keto" />
          <p>
            La tua salute merita il meglio: affidati ad una nutrizionista
            certificata!
          </p>
          <p>
            Sono Elisabetta Ciannella, Biologa Nutrizionista certificata Keto
            Approved® dall'Associazione Eupraxia.
          </p>
        </div>
      </div>
    </>
  );
}
