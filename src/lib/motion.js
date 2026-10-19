import { useEffect, useRef } from "react";
import { animate } from "animejs";

export function prefersReducedMotion() {
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

/**
 * Reveals every [data-reveal] element once it enters the viewport.
 * The tiny data attributes let each page keep its own rhythm without
 * introducing a router or an animation library beyond anime.js.
 */
export function useReveal() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const items = Array.from(root.querySelectorAll("[data-reveal]"));
    if (!items.length) return undefined;

    if (prefersReducedMotion()) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return undefined;
    }

    const reveal = (item) => {
      animate(item, {
        opacity: [0, 1],
        translateY: [
          item.dataset.revealY || "28px",
          item.dataset.revealTo || "0px",
        ],
        delay: Number(item.dataset.revealDelay || 0),
        duration: Number(item.dataset.revealDuration || 780),
        ease: "outExpo",
      });
    };

    if (!("IntersectionObserver" in window)) {
      items.forEach(reveal);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          reveal(entry.target);
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -7% 0px" },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return rootRef;
}
