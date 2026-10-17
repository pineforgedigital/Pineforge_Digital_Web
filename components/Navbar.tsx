"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Manage body scroll locking when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".nav-container")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="navbar">
      <div className="container nav-container">
        <Link href="/" className="logo animate-fade-up">
          <Image
            src="/images/Brand_Logo_white_opt.png"
            alt="Pineforge Digital"
            width={64}
            height={64}
            priority
          />
        </Link>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav>
          <ul className={`nav-links ${isOpen ? "active" : ""}`}>
            <li className="animate-fade-up delay-1">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="animate-fade-up delay-2">
              <Link href="/process" onClick={() => setIsOpen(false)}>
                Process
              </Link>
            </li>
            <li className="animate-fade-up delay-2">
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li className="animate-fade-up delay-3">
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li className="animate-fade-up delay-3">
              <Link
                href="/contact"
                className="btn btn-primary nav-btn"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
