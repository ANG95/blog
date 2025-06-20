import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Phone, Mail, Github, Link as LinkIcon, GraduationCap, Award } from "lucide-react";
import { profile, contact, skills, experience, education } from "./data/portfolioData";

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

const styles = `
  @keyframes gradient-animation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  .animated-gradient {
    background-size: 200% 200%;
    animation: gradient-animation 15s ease infinite;
  }
`;

const CursorGlow = () => {
  const mouse = { x: useMotionValue(0), y: useMotionValue(0) };
  const smoothMouse = {
    x: useSpring(mouse.x, { stiffness: 200, damping: 40 }),
    y: useSpring(mouse.y, { stiffness: 200, damping: 40 }),
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
      className="pointer-events-none fixed -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400/30 blur-3xl opacity-40"
    />
  );
};

export default function App() {
  return (
    <>
      <MetaSEO />
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-slate-100 font-sans relative animated-gradient">
        <CursorGlow />
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto min-h-screen">
          <aside className="md:w-80 w-full bg-slate-900/90 md:bg-slate-900/60 border-r border-slate-800 px-6 py-10 flex flex-col items-center md:items-start top-0 h-fit md:min-h-screen z-20 shadow-lg">
            <motion.img
              src={profile.image}
              alt={profile.name}
              className="w-32 h-32 rounded-full mb-4 border-4 border-cyan-400/50 shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
            />
            <h1 className="text-3xl font-bold text-cyan-200 mb-1">{profile.name}</h1>
            <p className="text-base text-cyan-100 mb-4">{profile.title}</p>
            <p className="text-sm text-slate-300 mb-6">{profile.summary}</p>
            <div className="flex flex-col gap-2 text-sm text-slate-400 w-full mb-8">
              <div className="flex items-center gap-2">
                <Phone size={15} className="text-cyan-300" />
                <a href={`tel:${contact.whatsapp}`} className="hover:text-cyan-400 transition-colors">{contact.whatsapp}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-cyan-300" />
                <a href={`mailto:${contact.email}`} className="hover:text-cyan-400 transition-colors">{contact.email}</a>
              </div>
              <div className="flex items-center gap-2">
                <Github size={15} className="text-cyan-300" />
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
              </div>
            </div>
            <div className="w-full mb-8">
              <h2 className="text-lg font-semibold text-cyan-300 mb-2 flex items-center gap-2"><Award size={18}/> Habilidades</h2>
              <ul className="flex flex-wrap gap-2">
                {skills.map(s => (
                  <li key={s} className="bg-slate-800/80 border border-slate-700 text-cyan-200 px-3 py-1 rounded-full text-xs">{s}</li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-lg font-semibold text-cyan-300 mb-2 flex items-center gap-2"><GraduationCap size={18}/> Educación</h2>
              <ul className="flex flex-col gap-3">
                {education.map(e => (
                  <li key={e.title} className="pl-1 border-l-4 border-cyan-400/50">
                    <div className="font-semibold text-white">{e.title}</div>
                    <div className="text-xs text-slate-300">{e.institution}</div>
                    <div className="text-xs text-slate-500">{e.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="flex-1 overflow-y-auto max-h-screen px-4 py-10 md:px-12 md:py-14 relative z-10">
            <section>
              <h2 className="text-3xl font-bold mb-10 text-cyan-300 text-center md:text-left">Experiencia Profesional</h2>
              <div className="relative">
                <div className="absolute left-2 md:left-4 top-4 h-full w-1 bg-cyan-700/20 rounded-full" aria-hidden="true"></div>
                <div className="space-y-10 md:space-y-16">
                  {experience.map((exp, idx) => (
                    <motion.div
                      key={idx}
                      className="relative pl-10 md:pl-14"
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, amount: 0.2 }}
                      transition={{ delay: idx * 0.13, duration: 0.6, type: "spring" }}
                    >
                      <div className="absolute left-2 md:left-4 top-3 -translate-x-1/2 w-5 h-5 bg-cyan-400 rounded-full border-4 border-slate-900 shadow-lg"></div>
                      <div className="bg-slate-800/60 p-6 rounded-xl border border-slate-700/70 backdrop-blur hover:border-cyan-400/60 hover:shadow-2xl hover:scale-[1.01] transition">
                        <header className="flex flex-col md:flex-row justify-between md:items-center mb-2 gap-2">
                          <h3 className="text-lg font-semibold text-white">{exp.role} <span className="text-cyan-300">en</span> {exp.company}</h3>
                          <time className="text-xs text-slate-400 font-mono">{exp.period}</time>
                        </header>
                        {Array.isArray(exp.projects) && exp.projects.length > 0 ? (
                          exp.projects.map(project => (
                            <div key={project.name} className="mt-3 pl-2 border-l-2 border-cyan-400/30">
                              <div className="font-semibold text-cyan-200">{project.name}</div>
                              <ul className="list-disc list-inside text-sm text-slate-300 mb-2">
                                {project.bullets.map(b => <li key={b}>{b}</li>)}
                              </ul>
                              <div className="flex flex-wrap gap-2 mb-2">
                                {project.stack.map(tech => (
                                  <span key={tech} className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded">{tech}</span>
                                ))}
                              </div>
                            </div>
                          ))
                        ) : (
                          <>
                            <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm mb-4">
                              {exp.bullets?.map(b => <li key={b}>{b}</li>)}
                            </ul>
                            <div className="flex flex-wrap gap-2">
                              {exp.stack?.map(tech => (
                                <span key={tech} className="text-xs bg-cyan-400/10 text-cyan-300 px-2 py-1 rounded">{tech}</span>
                              ))}
                            </div>
                          </>
                        )}
                        <a
                          href={exp.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs text-cyan-400 mt-4 hover:underline"
                        >
                          Visitar <LinkIcon size={12} />
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>
          </main>
        </div>
        <footer className="relative z-10 text-center text-xs text-slate-500 py-6">
          © {new Date().getFullYear()} German Apaza
        </footer>
      </div>
    </>
  );
}
