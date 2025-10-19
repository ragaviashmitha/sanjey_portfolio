import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Shield, Trophy, GraduationCap, Star } from "lucide-react";

const awards = [
  {
    title: "Outstanding Cybersecurity Intern",
    organization: "Codec Technologies",
    year: "2025",
    icon: Trophy,
    description: "Recognized for exceptional performance and contributions to security operations"
  },
  {
    title: "Certified Cybersecurity Professional",
    organization: "Google",
    year: "2025",
    icon: Shield,
    description: "Comprehensive certification covering security fundamentals and best practices"
  },
  {
    title: "ISC2 Candidate Certification",
    organization: "ISC2",
    year: "2024",
    icon: Star,
    description: "Foundation-level certification in cybersecurity principles"
  },
  {
    title: "Project Management Fundamentals",
    organization: "IBM",
    year: "2025",
    icon: GraduationCap,
    description: "Professional certification in project management methodologies"
  },
  {
    title: "Digital Marketing Campaign Excellence",
    organization: "SkillCraft",
    year: "2025",
    icon: Award,
    description: "Excellence award for outstanding digital marketing campaign execution"
  }
];

const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="awards" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Awards & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-5xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass glass-hover p-6 rounded-xl gradient-border group"
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${
                  index % 2 === 0 ? 'bg-primary/20' : 'bg-secondary/20'
                }`}>
                  <Icon className={`w-7 h-7 animate-glow-pulse ${
                    index % 2 === 0 ? 'text-primary' : 'text-secondary'
                  }`} />
                </div>

                <h3 className="text-lg font-bold mb-2 text-foreground">{award.title}</h3>
                <p className={`text-sm font-semibold mb-2 ${
                  index % 2 === 0 ? 'text-primary' : 'text-secondary'
                }`}>
                  {award.organization}
                </p>
                <p className="text-xs text-muted-foreground mb-3">{award.year}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Awards;
