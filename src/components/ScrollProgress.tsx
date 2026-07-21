import { motion, useScroll, useSpring } from "framer-motion";

/** Thin neon progress bar pinned to the top of the viewport, tracking scroll position. */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 40,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[60] pointer-events-none"
      style={{
        scaleX,
        background: "linear-gradient(90deg, #00d9ff, #b300ff, #0080ff)",
      }}
    />
  );
}
