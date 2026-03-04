import { motion } from "framer-motion";
import { ArrowDown, Mail, MapPin } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center section-padding pt-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full gradient-bg opacity-10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
            Ingénieure en Développement
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Hajar{" "}
            <span className="gradient-text">Benbella</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            Ingénieure en développement web et logiciel, passionnée par les nouvelles technologies. 
            Je crée des solutions performantes et innovantes.
          </p>

          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              Casablanca, Maroc
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary" />
              hajarbenbella13@gmail.com
            </div>
          </div>

          <div className="flex gap-4">
            <a
              href="#contact"
              className="gradient-bg px-6 py-3 rounded-lg font-medium text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Me Contacter
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-lg font-medium border border-border text-foreground hover:bg-secondary transition-colors"
            >
              Voir mon parcours
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden gradient-border glow">
              <img
                src={profileImg}
                alt="Hajar Benbella"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-full gradient-bg opacity-30 animate-float" />
            <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full gradient-bg opacity-20 animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
