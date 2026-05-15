"use client";

import { useEffect, useState } from "react";

type SparkParticle = {
  id: number;
  tx: string;
  ty: string;
  angle: string;
  length: string;
  duration: string;
  delay: string;
  color: string;
};

type SparkBurst = {
  id: number;
  x: number;
  y: number;
  particles: SparkParticle[];
};

const INTERACTIVE_SELECTOR = [
  "a",
  "button",
  "input",
  "textarea",
  "select",
  "summary",
  "label",
  "[role='button']",
  "[role='link']",
  "[tabindex]:not([tabindex='-1'])",
  "[contenteditable='true']",
  "[data-no-click-sparks]",
].join(",");

function shouldSkipSpark(event: PointerEvent) {
  if (event.button !== 0 || event.pointerType !== "mouse") return true;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return true;

  const path = event.composedPath();

  for (const item of path) {
    if (!(item instanceof HTMLElement)) continue;
    if (item.matches(INTERACTIVE_SELECTOR)) return true;

    const cursor = window.getComputedStyle(item).cursor;
    if (cursor === "pointer") return true;

    if (item === document.body) break;
  }

  return false;
}

function createParticles(seed: number): SparkParticle[] {
  return Array.from({ length: 22 }, (_, index) => {
    const angle = (index / 22) * 360 + Math.random() * 16 - 8;
    const distance = 8 + Math.random() * 22;
    const radians = (angle * Math.PI) / 180;
    const tx = Math.cos(radians) * distance;
    const ty = Math.sin(radians) * distance;
    const isLongStreak = index % 4 !== 0;

    return {
      id: seed + index,
      tx: `${tx}px`,
      ty: `${ty}px`,
      angle: `${angle}deg`,
      length: isLongStreak ? `${5 + Math.random() * 12}px` : `${2 + Math.random() * 4}px`,
      duration: `${110 + Math.random() * 70}ms`,
      delay: `${Math.random() * 8}ms`,
      color: index % 4 === 0 ? "#fff1a8" : index % 2 === 0 ? "#ff812f" : "#ff6a1a",
    };
  });
}

export function ClickSparks() {
  const [bursts, setBursts] = useState<SparkBurst[]>([]);

  useEffect(() => {
    function onPointerDown(event: PointerEvent) {
      if (shouldSkipSpark(event)) return;

      const id = Date.now();
      const burst: SparkBurst = {
        id,
        x: event.clientX,
        y: event.clientY,
        particles: createParticles(id),
      };

      setBursts((current) => [...current.slice(-4), burst]);
      window.setTimeout(() => {
        setBursts((current) => current.filter((item) => item.id !== id));
      }, 380);
    }

    window.addEventListener("pointerdown", onPointerDown);
    return () => window.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div className="click-sparks-layer" aria-hidden="true">
      {bursts.map((burst) => (
        <div
          key={burst.id}
          className="click-spark-burst"
          style={
            {
              "--click-x": `${burst.x}px`,
              "--click-y": `${burst.y}px`,
            } as React.CSSProperties
          }
        >
          <span className="click-spark-core" />
          {burst.particles.map((particle) => (
            <span
              key={particle.id}
              className="click-spark-fragment"
              style={
                {
                  "--tx": particle.tx,
                  "--ty": particle.ty,
                  "--spark-angle": particle.angle,
                  "--spark-length": particle.length,
                  "--spark-duration": particle.duration,
                  "--spark-delay": particle.delay,
                  "--spark-color": particle.color,
                } as React.CSSProperties
              }
            />
          ))}
        </div>
      ))}
    </div>
  );
}
