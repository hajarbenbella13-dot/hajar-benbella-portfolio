import { motion } from "framer-motion";
import { Code2, Layers, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Développement Web",
    desc: "Applications web modernes avec les dernières technologies",
  },
  {
    icon: Layers,
    title: "Fullstack",
    desc: "Du frontend au backend avec une expertise complète",
  },
  {
    icon: Rocket,
    title: "Innovation",
    desc: "Solutions performantes et approches méthodologiques",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            À propos de <span className="gradient-text">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ingénieure en développement informatique, passionnée par les nouvelles technologies, 
            je souhaite contribuer au développement de solutions performantes tout en consolidant 
            mes compétences techniques et méthodologiques.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <h.icon size={24} className="text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{h.title}</h3>
              <p className="text-sm text-muted-foreground">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
