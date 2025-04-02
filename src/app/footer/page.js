import "./footer.css";
export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="bg_img">
          <a>
            <img src="./gmail.png" />
          </a>
          <a>
            <img src="./facebook.png" />
          </a>
          <a>
            <img src="./instagram.png" />
          </a>
          <a>
            <img src="./whatsapp.png" />
          </a>
        </div>
        <div className="copy">
          <p>© 2025 Copyright</p>
        </div>
      </div>
    </>
  );
}
