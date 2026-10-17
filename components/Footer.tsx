import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Pineforge Digital</h3>
            <p>Premium, hand-coded websites for Wisconsin businesses.</p>
            <p style={{ marginTop: "1rem" }}>
              <a
                href="tel:2622341027"
                style={{
                  color: "#38bdf8",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                (262) 234-1027
              </a>
            </p>
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
          <p>&copy; 2026 Pineforge Digital LLC. Designed & Built in Wisconsin, USA.</p>
        </div>
      </div>
    </footer>
  );
}
