import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, ArrowUpRight } from "lucide-react";

const ContactSection = () => {
  // On crée une référence pour détecter quand la section est visible
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Simulation de l'objet personal (à adapter selon ton fichier de données)
  const personal = {
    linkedin: "https://linkedin.com/in/ton-profil", 
  };

  return (
    <section id="contact" ref={ref} className="section-padding">
      <div className="max-w-4xl mx-auto">
        {/* En-tête de la section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Me <span className="gradient-text">Contacter</span>
          </h2>
          <p className="text-muted-foreground">
            N'hésitez pas à me contacter pour toute opportunité ou collaboration.
          </p>
        </motion.div>

        {/* Grille de contact (Email, Tel, Loc) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-3 gap-6"
        >
          {[
            { icon: Mail, label: "Email", value: "hajarbenbella13@gmail.com", href: "mailto:hajarbenbella13@gmail.com" },
            { icon: Phone, label: "Téléphone", value: "+212 6 22 12 09 34", href: "tel:+212622120934" },
            { icon: MapPin, label: "Localisation", value: "Casablanca, Maroc", href: "#" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="flex flex-col items-center p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-colors text-center group"
            >
              <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <item.icon size={22} className="text-primary-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
              <p className="text-sm font-medium">{item.value}</p>
            </a>
          ))}
        </motion.div>

        {/* LA NOUVELLE PARTIE : LinkedIn Button */}
       <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="mt-8 flex justify-center"
>
  <a
    href="https://www.linkedin.com/in/hajar-benbella-837678145" 
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary hover:bg-primary hover:text-white"
  >
    <Linkedin className="h-4 w-4" />
    Me rejoindre sur LinkedIn
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </a>
</motion.div>
      </div>
    </section>
  );
};

export default ContactSection;