"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function SpotlightEffects() {
  const pathname = usePathname();

  useEffect(() => {
    // 1. Bento Card Spotlight Glow
    const cards = document.querySelectorAll<HTMLElement>(".bento-card");
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      if (!card.querySelector(".glow")) {
        const glow = document.createElement("div");
        glow.className = "glow";
        card.insertBefore(glow, card.firstChild);
      }

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      };

      card.addEventListener("mousemove", handleMouseMove);
      cleanups.push(() => card.removeEventListener("mousemove", handleMouseMove));
    });

    // 2. Scroll Reveal Animations
    const reveals = document.querySelectorAll<HTMLElement>(".reveal");
    if (reveals.length > 0) {
      const revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("active");
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          threshold: 0.15,
          rootMargin: "0px 0px -50px 0px",
        }
      );
      reveals.forEach((el) => revealObserver.observe(el));
      cleanups.push(() => revealObserver.disconnect());
    }

    // 3. Performance Metric Counters (Home Page)
    const perfSection = document.querySelector<HTMLElement>(".performance-metrics");
    if (perfSection) {
      const perfObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("animate-play");
              const counters = entry.target.querySelectorAll<HTMLElement>(".count-up");
              counters.forEach((counter) => {
                const targetStr = counter.getAttribute("data-target");
                const target = targetStr ? parseInt(targetStr, 10) : 0;
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;

                const updateCounter = () => {
                  current += increment;
                  if (current < target) {
                    counter.textContent = Math.ceil(current).toString();
                    requestAnimationFrame(updateCounter);
                  } else {
                    counter.textContent = target.toString();
                  }
                };
                updateCounter();
              });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );
      perfObserver.observe(perfSection);
      cleanups.push(() => perfObserver.disconnect());
    }

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, [pathname]);

  return null;
}
