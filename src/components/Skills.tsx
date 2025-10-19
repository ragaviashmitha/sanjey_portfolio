import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Code2, 
  Database, 
  Shield, 
  Network, 
  Bug, 
  Lock,
  Terminal,
  Cloud,
  GitBranch,
  FileSearch,
  Activity,
  Container
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming & Scripting",
    skills: [
      { name: "Python", icon: Code2 },
      { name: "SQL", icon: Database },
      { name: "Bash", icon: Terminal }
    ],
    color: "primary"
  },
  {
    title: "Security Tools",
    skills: [
      { name: "Burp Suite", icon: Bug },
      { name: "Wireshark", icon: Network },
      { name: "Metasploit", icon: Shield },
      { name: "Nmap", icon: FileSearch },
      { name: "OWASP ZAP", icon: Lock },
      { name: "Snort", icon: Activity }
    ],
    color: "secondary"
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", icon: Cloud },
      { name: "Docker", icon: Container },
      { name: "Git", icon: GitBranch }
    ],
    color: "primary"
  },
  {
    title: "Core Competencies",
    skills: [
      { name: "Network Security", icon: Network },
      { name: "Incident Response", icon: Shield },
      { name: "Vulnerability Assessment", icon: Bug },
      { name: "Penetration Testing", icon: Lock }
    ],
    color: "secondary"
  }
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass p-6 sm:p-8 rounded-2xl gradient-border"
            >
              <h3 className={`text-2xl font-bold mb-6 ${
                category.color === "primary" ? "text-primary" : "text-secondary"
              }`}>
                {category.title}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skillIndex}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                      className="group"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/20 transition-colors duration-300">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          category.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                        }`}>
                          <Icon className={`w-5 h-5 ${
                            category.color === "primary" ? "text-primary" : "text-secondary"
                          }`} />
                        </div>
                        <span className="font-semibold text-foreground">{skill.name}</span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
