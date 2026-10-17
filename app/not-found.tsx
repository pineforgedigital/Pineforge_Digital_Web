import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Pineforge Digital",
  description:
    "The page you are looking for does not exist. Return to Pineforge Digital's homepage to find premium web design services in Wisconsin.",
};

export default function NotFound() {
  return (
    <main>
      <section
        className="page-header-dark"
        style={{
          padding: "12rem 0 8rem",
          textAlign: "center",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="container animate-fade-up">
          <span className="badge badge-dark" style={{ marginBottom: "1.5rem" }}>
            Error 404
          </span>
          <h1
            style={{
              fontSize: "clamp(6rem, 15vw, 12rem)",
              marginBottom: 0,
              lineHeight: 1,
              letterSpacing: "-0.05em",
              color: "white",
            }}
          >
            404
          </h1>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              color: "white",
            }}
          >
            Page Not Found
          </h2>
          <p
            style={{
              marginBottom: "2.5rem",
              color: "rgba(255,255,255,0.7)",
              fontSize: "1.15rem",
            }}
          >
            The page you are looking for has been moved, deleted, or never
            existed.
          </p>
          <Link
            href="/"
            className="btn btn-primary"
            style={{ padding: "1rem 2.5rem", fontSize: "1.1rem" }}
          >
            Return Home
          </Link>
        </div>
      </section>
    </main>
  );
}
