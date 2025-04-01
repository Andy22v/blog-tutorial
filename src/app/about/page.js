import "./about.css";
export default function About() {
  return (
    <>
      <div className="about view" id="about">
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
          </div>
        </div>
      </div>
    </>
  );
}
