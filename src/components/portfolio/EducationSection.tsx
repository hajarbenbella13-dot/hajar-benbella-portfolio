import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    title: "Cycle Supérieur en Ingénierie Logicielle & Développement Web",
    level: "BAC+5",
    school: "ISGA – Rabat",
    year: "2021",
  },
  {
    title: "1er Cycle en Ingénierie Informatique",
    level: "BAC+3",
    school: "ISGA – Rabat",
    year: "2017",
  },
  {
    title: "Technicien Spécialisé en Réseaux Informatiques",
    level: "TS",
    school: "ISTA NTIC Hay Riyad – Rabat",
    year: "2016",
  },
  {
    title: "Baccalauréat Sciences Physique/Chimie",
    level: "BAC",
    school: "Lycée Salmen El Farissi – Témara",
    year: "2014",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ma <span className="gradient-text">Formation</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg gradient-bg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <GraduationCap size={20} className="text-primary-foreground" />
                </div>
                <span className="text-xs font-mono px-2 py-1 rounded-full bg-secondary text-primary">
                  {edu.year}
                </span>
              </div>
              <span className="text-xs font-mono text-accent mb-1 block">{edu.level}</span>
              <h3 className="font-semibold text-sm mb-1">{edu.title}</h3>
              <p className="text-sm text-muted-foreground">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
