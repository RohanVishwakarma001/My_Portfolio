import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, GraduationCap } from "lucide-react";
import { highlights, stats } from "../constants";

const colorMap: Record<string, string> = {
  cyan: "text-neon-cyan border-neon-cyan/20 bg-neon-cyan/5",
  purple: "text-neon-purple border-neon-purple/20 bg-neon-purple/5",
  blue: "text-neon-blue border-neon-blue/20 bg-neon-blue/5",
  green: "text-neon-green border-green-500/20 bg-green-500/5",
};

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="py-28 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-neon-cyan/3 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-4">01. about_me</p>
          <h2 className="font-sans font-bold text-4xl lg:text-5xl text-white">
            Who I <span className="gradient-text">Am</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative">
              <div className="absolute -left-3 top-0 bottom-0 w-px bg-gradient-to-b from-neon-cyan to-transparent" />
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                I'm a{" "}
                <span className="text-white font-semibold">
                  Full Stack Developer
                </span>{" "}
                passionate about creating visually stunning, highly interactive
                web applications that live at the intersection of{" "}
                <span className="text-neon-cyan">engineering excellence</span>{" "}
                and <span className="text-neon-purple">design artistry</span>.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-6">
                With expertise in <span className="text-white">React.js</span>,{" "}
                <span className="text-white">Node.js</span>, and{" "}
                <span className="text-white">PostgreSQL</span>, I combine
                technical depth with a designer's eye for premium aesthetics —
                building products that feel as good as they perform.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                Currently pursuing a{" "}
                <span className="text-white">
                  Bachelor's in Computer Science
                </span>{" "}
                at J.B. Institute of Technology, Dehradun, graduating in{" "}
                <span className="text-neon-cyan">August 2027</span>.
              </p>
            </div>

            {/* Location + Education */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                <MapPin size={14} className="text-neon-cyan" />
                Dehradun / Uttarakhand, IN
              </div>
              <div className="flex items-center gap-2 text-text-secondary font-mono text-sm">
                <GraduationCap size={14} className="text-neon-purple" />
                JBIT · CS · 2027
              </div>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold font-mono gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-text-muted text-xs mt-1 font-mono">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className={`glass rounded-xl p-5 border hover:border-opacity-50 transition-all duration-300 group cursor-default ${colorMap[item.color]}`}
                >
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${colorMap[item.color]} border`}
                  >
                    <Icon size={20} />
                  </div>
                  <h3 className="font-sans font-semibold text-white text-sm mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-text-muted text-xs font-mono">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
