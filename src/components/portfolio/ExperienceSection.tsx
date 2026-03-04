import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
   {
    title: "Bootcamp IA Full Stack",
    company: "Geeks Institute",
    location: "Casablanca",
    period: "Janvier 2026 – Présent",
    desc: "Développement Full Stack spécialisé en Intelligence Artificielle.",
  },
  {
    title: "Stage en Développement – Drupal",
    company: "PYXICOM",
    location: "Rabat",
    period: "Mai 2023 – Oct 2023",
    desc: "Développement d'une application de gestion immobilière avec le CMS Drupal.",
  },
  {
    title: "Stage en Développement – .NET",
    company: "Ministère de l'Économie et des Finances",
    location: "Rabat",
    period: "Nov 2022 – Jan 2023",
    desc: "Développement d'une application de gestion de projet avec C# ASP.NET.",
  },
  {
    title: "Projet de Fin d'Études",
    company: "IBM A&T",
    location: "Casablanca",
    period: "Avr – Sep 2021",
    desc: "Adaptation des traitements éditiques de compilation DSE sous AS400 suite au décommissionnement d'UNIX.",
  },
  {
    title: "Stage en Développement – PHP",
    company: "PYXICOM",
    location: "Rabat",
    period: "Juillet 2019",
    desc: "Développement d'une application de check-list avec PHP Laravel.",
  },
  {
    title: "Stage Technicien Spécialisé",
    company: "ORDWAY",
    location: "Rabat",
    period: "Oct 2017 – Jan 2018",
    desc: "Installation et configuration du matériel informatique.",
  },
  {
    title: "Stage Technicien Spécialisé",
    company: "Ministère de l'Économie et des Finances",
    location: "Rabat",
    period: "Mars – Avr 2016",
    desc: "Supervision d'un réseau en environnement IP avec la technologie SNMP.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Expériences</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-0 bottom-0 w-px gradient-bg opacity-30" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6"
              >
                <div className="relative z-10 flex-shrink-0 w-10 h-10 rounded-full gradient-bg flex items-center justify-center">
                  <Briefcase size={18} className="text-primary-foreground" />
                </div>
                <div className="flex-1 p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <h3 className="font-semibold">{exp.title}</h3>
                    <span className="text-xs font-mono text-primary">{exp.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {exp.company} • {exp.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
