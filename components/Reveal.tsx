"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "up",
  as: Tag = "div",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "up" | "img" | "none";
  as?: "div" | "span" | "li" | "figure";
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Never leave content stranded at opacity 0 if the API is unavailable.
    if (typeof IntersectionObserver === "undefined") {
      el.classList.add("is-visible");
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add("is-visible");
            io.disconnect();
          }
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const base =
    variant === "img" ? "reveal-img" : variant === "none" ? "" : "reveal";

  return (
    <Tag
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      className={`${base} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
