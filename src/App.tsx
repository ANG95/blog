import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Phone, Mail, Github, Link as LinkIcon, GraduationCap, Award } from "lucide-react";
import { profile, contact, skills, experience, education } from "./data/portfolioData";
import OfflineIntercomLegalPage from "./OfflineIntercomLegalPage";

function MetaSEO() {
  useEffect(() => {
    document.title = "German Apaza | React Native Senior Developer";
    document
      .querySelector("meta[name='description']")
      ?.setAttribute(
        "content",
        "Portafolio profesional de German Apaza: Senior ReactJS, React Native, Android developer. Experiencia en bancos, telcos, fintech y más."
      );
    document
      .querySelector("meta[property='og:title']")
      ?.setAttribute("content", "German Apaza | Senior React Developer");
    document
      .querySelector("meta[property='og:description']")
      ?.setAttribute(
        "content",
        "Portafolio profesional de German Apaza. Experto en desarrollo móvil y web."
      );
  }, []);
  return null;
}

const glowStyles = `
  .arc-dot { box-shadow: 0 0 20px 3px rgba(255, 184, 0, 0.5), 0 0 40px 6px rgba(255, 184, 0, 0.2); }
  .arc-line { box-shadow: 0 0 15px 1px rgba(255, 184, 0, 0.25); }
  .panel-glow:hover { box-shadow: 0 0 0 1px rgba(255, 184, 0, 0.3), 0 0 30px 2px rgba(255, 184, 0, 0.15); }
`;

const CursorGlow = () => {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 100, damping: 25 }),
    y: useSpring(mouse.y, { stiffness: 100, damping: 25 }),
  };
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x.set(e.clientX);
      mouse.y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouse.x, mouse.y]);
  return (
    <motion.div
      style={{ left: smoothMouse.x, top: smoothMouse.y }}
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full bg-gold/10 blur-3xl opacity-40 hidden md:block"
    />
  );
};

const LEGAL_HASH = "#offline-intercom-privacy";

export default function App() {
  const [showLegal, setShowLegal] = useState(
    () => typeof window !== "undefined" && window.location.hash === LEGAL_HASH
  );

  useEffect(() => {
    const onHashChange = () => setShowLegal(window.location.hash === LEGAL_HASH);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <MetaSEO />
      <style>{glowStyles}</style>
      <div className="min-h-screen bg-hud-950 text-slate-100 font-sans relative bg-grid-hud bg-grid bg-gradient-radial">
        <CursorGlow />
        {showLegal ? (
          <div className="relative z-10 pt-10 pb-6">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.location.hash = "";
                setShowLegal(false);
              }}
              className="inline-block mb-6 mx-4 text-gold hover:text-gold/90 text-sm font-medium tracking-widest uppercase"
            >
              ← Volver al portafolio
            </a>
            <OfflineIntercomLegalPage />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto min-h-screen md:h-screen">
            <aside className="aside-scroll md:w-72 w-full shrink-0 bg-hud-950/90 md:bg-hud-900/80 border-b md:border-b-0 md:border-r border-gold/20 px-6 py-8 flex flex-col items-center md:items-start md:sticky md:top-0 md:self-start h-fit md:max-h-screen md:overflow-y-auto z-20 shadow-gold-sm">
              <motion.div
                className="relative mb-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-28 h-28 rounded-sm border-2 border-gold/40 object-cover shadow-gold"
                />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gold rounded-full animate-pulse-gold arc-dot" />
              </motion.div>
              <h1 className="font-display text-lg font-semibold tracking-[0.25em] text-gold uppercase mb-1">
                {profile.name}
              </h1>
              <p className="text-sm text-arc font-mono tracking-widest mb-4">
                {profile.title}
              </p>
              <div className="w-12 h-px bg-gradient-to-r from-gold/60 to-transparent mb-5" />
              <p className="text-sm text-slate-300 leading-relaxed mb-6 text-center md:text-left">
                {profile.summary}
              </p>
              <div className="flex flex-col gap-3 text-sm w-full mb-6">
                <a href={`tel:${contact.whatsapp}`} className="flex items-center gap-2 text-slate-200 hover:text-gold transition-colors font-medium">
                  <Phone size={14} className="text-gold" />
                  {contact.whatsapp}
                </a>
                <a href={`mailto:${contact.email}`} className="flex items-center gap-2 text-slate-200 hover:text-gold transition-colors font-medium">
                  <Mail size={14} className="text-gold" />
                  {contact.email}
                </a>
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-200 hover:text-gold transition-colors font-medium">
                  <Github size={14} className="text-gold" />
                  GitHub
                </a>
              </div>
              <div className="w-full mb-6">
                <h2 className="font-display text-xs font-semibold text-gold uppercase tracking-[0.35em] mb-3 flex items-center gap-2">
                  <Award size={12} className="text-gold" />
                  Habilidades
                </h2>
                <ul className="flex flex-wrap gap-2">
                  {skills.map((s) => (
                    <li
                      key={s}
                      className="text-xs text-slate-200 border border-gold/40 px-2.5 py-1 font-mono hover:border-gold hover:text-gold hover:shadow-gold-sm transition-all duration-300"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full">
                <h2 className="font-display text-xs font-semibold text-gold uppercase tracking-[0.35em] mb-3 flex items-center gap-2">
                  <GraduationCap size={12} className="text-gold" />
                  Educación
                </h2>
                <ul className="flex flex-col gap-3">
                  {education.map((e) => (
                    <li key={e.title} className="border-l-2 border-gold/40 pl-3 py-1">
                      <div className="text-sm font-semibold text-slate-100">{e.title}</div>
                      <div className="text-xs text-slate-300">{e.institution}</div>
                      <div className="text-xs text-gold font-mono">{e.date}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <main className="main-scroll flex-1 min-h-0 w-full px-4 py-8 md:px-10 md:py-12 md:overflow-y-auto md:max-h-screen relative z-10">
              <section>
                <h2 className="font-display text-xs font-semibold text-gold uppercase tracking-[0.4em] mb-8 md:mb-10">
                  Experiencia
                </h2>
                <div className="relative">
                  <div
                    className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-gold/80 via-gold/40 to-transparent arc-line"
                    aria-hidden
                  />
                  <div className="space-y-6 md:space-y-8">
                    {experience.map((exp, idx) => (
                      <motion.div
                        key={`${exp.company}-${idx}`}
                        className="relative pl-6 md:pl-8"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4, delay: idx * 0.06 }}
                      >
                        <div className="absolute left-0 top-2 w-3 h-3 bg-gold rounded-full arc-dot animate-pulse-gold -translate-x-1/2 border-2 border-hud-950" />
                        <div className="border border-gold/20 bg-hud-900/60 p-5 panel-glow transition-all duration-300 hover:border-gold/40 shadow-panel">
                          <header className="flex flex-col md:flex-row justify-between md:items-baseline gap-1 mb-3">
                            <h3 className="font-display text-base font-medium text-gold">
                              {exp.role}
                              <span className="text-slate-400 font-sans font-normal"> / </span>
                              <span className="text-slate-100">{exp.company}</span>
                            </h3>
                            <time className="text-xs text-gold font-mono">
                              {exp.period}
                            </time>
                          </header>
                          {Array.isArray(exp.projects) && exp.projects.length > 0 ? (
                            exp.projects.map((project) => (
                              <div
                                key={project.name}
                                className="mt-3 pl-3 border-l-2 border-gold/30"
                              >
                                <div className="text-sm font-semibold text-arc mb-1.5">
                                  {project.name}
                                </div>
                                <ul className="text-sm text-slate-300 space-y-0.5 mb-2 font-normal">
                                  {project.bullets.map((b) => (
                                    <li key={b}>— {b}</li>
                                  ))}
                                </ul>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.stack.map((tech) => (
                                    <span
                                      key={tech}
                                      className="text-xs text-slate-300 font-mono border border-gold/30 px-1.5 py-0.5 hover:border-gold hover:text-gold transition-colors"
                                    >
                                      {tech}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ))
                          ) : (
                            <>
                              <ul className="text-sm text-slate-300 space-y-0.5 mb-3 font-normal">
                                {exp.bullets?.map((b) => (
                                  <li key={b}>— {b}</li>
                                ))}
                              </ul>
                              <div className="flex flex-wrap gap-1.5">
                                {exp.stack?.map((tech) => (
                                  <span
                                    key={tech}
                                    className="text-xs text-slate-300 font-mono border border-gold/30 px-1.5 py-0.5 hover:border-gold hover:text-gold transition-colors"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </>
                          )}
                          <a
                            href={exp.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs text-gold hover:text-gold/90 mt-4 font-semibold tracking-widest uppercase transition-colors"
                          >
                            Visitar
                            <LinkIcon size={12} />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </section>
            </main>
          </div>
        )}
        <footer className="relative z-10 text-center text-xs text-slate-400 py-6 font-medium tracking-widest uppercase space-y-2">
          <div>© {new Date().getFullYear()} German Apaza</div>
          <a
            href={LEGAL_HASH}
            className="text-gold hover:text-gold/90 transition-colors"
          >
            Política de privacidad – Offline Intercom
          </a>
        </footer>
      </div>
    </>
  );
}
