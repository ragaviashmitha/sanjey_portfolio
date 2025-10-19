import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Target, Activity, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Internal Vulnerability Assessment Tool",
    description: "Automated vulnerability scanning solution combining Python scripting with Burp Suite integration for comprehensive security assessments.",
    tech: ["Python", "Burp Suite", "API Integration", "Automation"],
    icon: Target,
    color: "primary",
    highlights: [
      "Automated discovery of security vulnerabilities",
      "Custom reporting with severity classifications",
      "Integration with existing security workflows"
    ]
  },
  {
    title: "Penetration Testing Lab Exercises",
    description: "Comprehensive penetration testing projects utilizing industry-standard tools for web application and network security assessments.",
    tech: ["Nmap", "Metasploit", "OWASP ZAP", "Kali Linux"],
    icon: Code2,
    color: "secondary",
    highlights: [
      "Web application vulnerability exploitation",
      "Network infrastructure security testing",
      "Detailed documentation of attack vectors"
    ]
  },
  {
    title: "Intrusion Detection Rule Enhancement",
    description: "Optimized Snort IDS rules to improve threat detection accuracy and reduce false positives by 25% through careful analysis and tuning.",
    tech: ["Snort", "Network Analysis", "Python", "Log Analysis"],
    icon: Activity,
    color: "primary",
    highlights: [
      "25% reduction in false positive alerts",
      "Improved detection of sophisticated threats",
      "Created comprehensive rule documentation"
    ]
  }
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover rounded-2xl overflow-hidden gradient-border group"
              >
                <div className="p-6 sm:p-8">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ${
                    project.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                  }`}>
                    <Icon className={`w-8 h-8 animate-glow-pulse ${
                      project.color === "primary" ? "text-primary" : "text-secondary"
                    }`} />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          project.color === "primary" 
                            ? "bg-primary/10 text-primary border border-primary/20" 
                            : "bg-secondary/10 text-secondary border border-secondary/20"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${
                          project.color === "primary" ? "bg-primary" : "bg-secondary"
                        }`} />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                    <a href="https://github.com/sanjeyj" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" className="w-full glass glass-hover group/btn">
                        View Details
                        <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
