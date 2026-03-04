import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Langages",
    skills: [ "PHP","C#", "JavaScript", "HTML", "CSS", "AS400/Adelia"],
  },
  {
    title: "Frameworks",
    skills: [ "Laravel", "React", "Tailwind CSS", "Bootstrap" , ".NET"],
  },
  {
    title: "Bases de données",
    skills: ["Oracle", "MySQL", "SQL", "PL/SQL"],
  },
  {
    title: "Outils & Méthodologies",
    skills: ["Git", "GitHub", "IntelliJ", "VS Code", "UML", "Merise", "REST API", "MVC"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mes <span className="gradient-text">Compétences</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1 }}
              className="p-6 rounded-xl border border-border bg-card"
            >
              <h3 className="text-lg font-semibold mb-4 gradient-text">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
