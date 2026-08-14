"use client";

import { useEffect, useRef, type ReactNode } from "react";

// Scroll-reveal for text blocks.
//
// Failsafe by design: content is revealed if it is already on screen at mount,
// and unconditionally after a short timeout, so a missing/blocked
// IntersectionObserver can never leave the page blank. The observer is only
// there to make elements further down animate as you reach them.
const FAILSAFE_MS = 1800;

export default function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "span" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined") {
      show();
      return;
    }

    // Already on screen (or above it) at mount — show straight away.
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 1.05) {
      show();
      return;
    }

    const timer = window.setTimeout(show, FAILSAFE_MS);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            show();
            io.disconnect();
            window.clearTimeout(timer);
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);

    return () => {
      io.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
