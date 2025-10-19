import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, TrendingUp, Bug, Shield, Activity } from "lucide-react";

const experiences = [
  {
 company: "Infoziant",
role: "Cybersecurity Intern",
period: "Sep 2025 - Present",
icon: Shield,
highlights: [
"Conducted vulnerability assessments on client web apps using OWASP standards",
"Detected and fixed major security issues like SQLi and XSS",
"Built Python scripts to automate reconnaissance and reporting",
"Assisted senior engineers in incident response and threat analysis"

],
color: "primary"
},

  {
    company: "ShadowFox",
    role: "Cybersecurity Intern",
    period: "Jun 2025 - Jul 2025",
    icon: Activity,
    highlights: [
      "Built IDS optimization tools with Python and Snort",
      "Enhanced threat detection accuracy via rule tuning",
      "Analyzed network traffic to spot anomalies",
      "Documented best practices for security monitoring"

    ],
    color: "secondary"
  },
  
  {
    company: "Deloitte",
    role: "Cybersecurity Job Simulation",
    period: "Mar 2025 - Apr 2025",
    icon: TrendingUp,
    highlights: [
      "Conducted vulnerability assessments and incident response in a simulated enterprise environment.",
      "Analyzed security logs to identify attack patterns.",
      "Presented findings and recommendations to stakeholders."
    ],
    color: "secondary"
  },
  
  {
    company: "Codec Technologies",
    role: "Cybersecurity Intern",
    period: "Jan 2025 - Mar 2025",
    icon: Shield,
    highlights: [
      "Performed vulnerability assessments across enterprise systems",
      "Enhanced SOC efficiency by 45%",
      "Ranked top 5% among interns for security analysis",
      "Supported incident response activities"

    ],
    color: "primary"
  },
  {
    company: "AICL Training",
    role: "Junior Analyst",
    period: "Jul 2024 - Aug 2024",
    icon: Bug,
    highlights: [
     "Discovered 30+ vulnerabilities through penetration testing",
      "Developed custom Python payloads for testing",
      "Conducted web app security assessments",
      "Reported findings with remediation steps"

    ],
    color: "primary"
  }
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" ref={ref} className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="max-w-6xl mx-auto space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass glass-hover p-6 sm:p-8 rounded-xl gradient-border"
              >
                <div className="flex flex-col sm:flex-row gap-6">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    exp.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      exp.color === "primary" ? "text-primary" : "text-secondary"
                    }`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground">{exp.company}</h3>
                        <p className={`text-lg font-semibold ${
                          exp.color === "primary" ? "text-primary" : "text-secondary"
                        }`}>{exp.role}</p>
                      </div>
                      <span className="text-muted-foreground font-medium whitespace-nowrap">{exp.period}</span>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <Briefcase className="w-4 h-4 text-secondary mt-1 flex-shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
