import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Pineforge Digital</h3>
            <p>
              Custom websites, web applications, and business tools built in
              Wisconsin.
            </p>
            <p style={{ marginTop: "1rem", fontSize: "0.95rem" }}>
              Serving Kenosha, Racine, Milwaukee &amp; Northern Illinois
            </p>
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.4rem",
              }}
            >
              <a
                href="tel:2622341027"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: 500,
                  width: "fit-content",
                }}
              >
                (262) 234-1027
              </a>
              <a
                href="mailto:admin@pineforge.digital"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: 500,
                  width: "fit-content",
                }}
              >
                admin@pineforge.digital
              </a>
              <a
                href="https://share.google/Pp6TIz4FkOKFzQPUA"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: 500,
                  width: "fit-content",
                }}
              >
                Google Business Profile
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <ul>
              <li>
                <Link href="/process">Process</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Legal</h4>
            <ul>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Service</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} Pineforge Digital LLC. Designed
            &amp; Built in Wisconsin, USA.
          </p>
        </div>
      </div>
    </footer>
  );
}
