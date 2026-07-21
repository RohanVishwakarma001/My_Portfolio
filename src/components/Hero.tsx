import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { socialLinks } from "../constants";
import Magnetic from "./Magnetic";
import TechIcon from "./TechIcon";

const titles = [
  "Full Stack Developer",
  "React.js Engineer",
  "UI/UX Enthusiast",
  "CS Student @ JBIT",
];

function AnimatedTitle() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = titles[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(
        () => setDisplayed(target.slice(0, displayed.length + 1)),
        80,
      );
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % titles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index]);

  return (
    <span className="text-neon-cyan font-mono">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
      color: string;
    }[] = [];
    const colors = ["#00d9ff", "#b300ff", "#0080ff", "#00ff41"];
    const particleCount = window.innerWidth < 768 ? 32 : 80;

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.6 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let animId: number;
    let running = true;

    function draw() {
      if (!ctx || !canvas || !running) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = "#00d9ff";
            ctx.globalAlpha = (1 - dist / 120) * 0.15;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      ctx.globalAlpha = 1;
      animId = requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    const handleVisibility = () => {
      running = !document.hidden;
      if (running) {
        animId = requestAnimationFrame(draw);
      } else {
        cancelAnimationFrame(animId);
      }
    };
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg grid-bg">
      <ParticleField />

      {/* Parallax glow orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(0,217,255,0.08) 0%, transparent 70%)",
          top: "10%",
          left: "10%",
        }}
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(179,0,255,0.06) 0%, transparent 70%)",
          bottom: "10%",
          right: "10%",
        }}
        animate={{
          x: -mousePos.x * 30,
          y: -mousePos.y * 30,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 30 }}
      />

      {/* Main content */}
      <div className="relative z-10 w-full min-w-0 max-w-7xl mx-auto px-6 pt-24 pb-16 flex flex-col lg:flex-row items-center gap-16">
        {/* Text content */}
        <div className="w-full min-w-0 lg:w-auto lg:flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="section-label mb-6"
          >
            &gt; Hello, World! — I'm
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans font-extrabold text-[clamp(1.35rem,6.6vw,2.75rem)] lg:text-[clamp(2.75rem,calc(7.8125vw_-_36px),4rem)] leading-tight mb-4 break-words"
          >
            Rohan{" "}
            <span className="gradient-text whitespace-nowrap">Vishwakarma</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-2xl text-text-secondary font-mono mb-6 h-8"
          >
            <AnimatedTitle />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-text-secondary text-base lg:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed mb-10"
          >
            Building premium web experiences with{" "}
            <span className="text-neon-cyan">React</span>,{" "}
            <span className="text-neon-purple">Node.js</span>, and{" "}
            <span className="text-neon-blue">cutting-edge tooling</span>.
            Turning complex problems into elegant, performant solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12"
          >
            <Magnetic>
              <Link to="/projects">
                <button
                  className="group relative flex items-center gap-2 px-7 py-3.5 rounded-lg font-mono text-sm font-semibold overflow-hidden"
                  style={{
                    background: "linear-gradient(135deg, #00d9ff, #0080ff)",
                  }}
                >
                  <span className="relative z-10 text-bg-primary">
                    Explore My Work
                  </span>
                  <ChevronRight
                    size={16}
                    className="relative z-10 text-bg-primary group-hover:translate-x-1 transition-transform"
                  />
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
                </button>
              </Link>
            </Magnetic>

            <Magnetic>
              <a
                href="/My_Resume.pdf"
                download="Rohan_Vishwakarma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-neon rounded-lg text-sm"
              >
                Download Resume
              </a>
            </Magnetic>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-5 justify-center lg:justify-start"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group relative w-10 h-10 flex items-center justify-center rounded-full border border-white/10 text-text-secondary hover:text-neon-cyan hover:border-neon-cyan transition-all duration-300"
              >
                <Icon size={18} />
                <div className="absolute inset-0 rounded-full bg-neon-cyan/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </a>
            ))}
            <div className="w-px h-5 bg-white/10" />
            <span className="text-text-muted font-mono text-xs">
              Dehradun / Uttarakhand, IN
            </span>
          </motion.div>
        </div>

        {/* Hero visual — animated code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden lg:block flex-shrink-0"
        >
          <div className="relative w-[380px]">
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 blur-3xl rounded-3xl" />

            {/* Code card */}
            <div className="relative glass rounded-2xl border border-white/10 overflow-hidden">
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-bg-secondary/50">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-3 text-text-muted font-mono text-xs">
                  portfolio.tsx
                </span>
              </div>

              {/* Code content */}
              <div className="p-5 font-mono text-sm leading-7">
                <div>
                  <span className="text-neon-purple">const</span>{" "}
                  <span className="text-neon-cyan">developer</span> = {"{"}
                </div>
                <div className="ml-4">
                  <span className="text-text-secondary">name:</span>{" "}
                  <span className="text-green-400">'Rohan Vishwakarma'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-text-secondary">role:</span>{" "}
                  <span className="text-green-400">'Full Stack Dev'</span>,
                </div>
                <div className="ml-4">
                  <span className="text-text-secondary">stack:</span> [
                </div>
                {["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"].map(
                  (tech) => (
                    <div key={tech} className="ml-8 flex items-center gap-1.5">
                      <TechIcon name={tech} size={12} className="text-yellow-400/80" />
                      <span className="text-yellow-400">'{tech}'</span>,
                    </div>
                  ),
                )}
                <div className="ml-4">],</div>
                <div className="ml-4">
                  <span className="text-text-secondary">available:</span>{" "}
                  <span className="text-neon-cyan">true</span>,
                </div>
                <div className="ml-4">
                  <span className="text-text-secondary">passion:</span>{" "}
                  <span className="text-green-400">'Premium UX'</span>
                </div>
                <div>{"}"}</div>
                <div className="mt-3 text-text-muted">
                  <span className="text-neon-blue">export default</span>{" "}
                  developer
                </div>
              </div>

              {/* Status indicator */}
              <div className="px-5 py-3 border-t border-white/5 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                <span className="text-text-muted font-mono text-xs">
                  Available for hire
                </span>
              </div>
            </div>

            {/* Floating badges */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 glass px-3 py-1.5 rounded-full border border-neon-cyan/30 text-neon-cyan font-mono text-xs"
            >
              ✦ Open to Work
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-4 -left-4 glass px-3 py-1.5 rounded-full border border-neon-purple/30 text-neon-purple font-mono text-xs"
            >
              ✦ Graduating 2027
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted"
      >
        <span className="font-mono text-xs tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} className="text-neon-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
