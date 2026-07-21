import { useMotionValue, useSpring, useTransform, useMotionTemplate, useReducedMotion } from "framer-motion";
import type { MouseEvent } from "react";

/**
 * Pointer-driven 3D tilt + spotlight effect for cards. Spread `bind` onto a
 * `motion.*` element (works alongside its own `initial`/`animate` props since
 * framer-motion composes all transform values into a single transform string).
 * No-ops under `prefers-reduced-motion`.
 */
export function useTilt(strength = 6) {
  const prefersReducedMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);

  const rotateX = useSpring(useTransform(py, [0, 1], [strength, -strength]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(px, [0, 1], [-strength, strength]), {
    stiffness: 300,
    damping: 30,
  });

  const pxPercent = useTransform(px, (v) => `${v * 100}%`);
  const pyPercent = useTransform(py, (v) => `${v * 100}%`);
  const spotlightBackground = useMotionTemplate`radial-gradient(480px circle at ${pxPercent} ${pyPercent}, rgba(255,255,255,0.07), transparent 60%)`;

  function onMouseMove(e: MouseEvent<HTMLElement>) {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  }

  function onMouseLeave() {
    px.set(0.5);
    py.set(0.5);
  }

  return {
    spotlightBackground,
    bind: prefersReducedMotion
      ? {}
      : {
          onMouseMove,
          onMouseLeave,
          style: { rotateX, rotateY, transformPerspective: 1000 },
        },
  };
}
