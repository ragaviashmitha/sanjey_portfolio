import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Target, Shield } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left - Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass glass-hover p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Education</h3>
                  <p className="text-foreground font-medium">Bachelor of Engineering - Cybersecurity</p>
                  <p className="text-muted-foreground">Karpagam Academy of Higher Education</p>
                  <p className="text-sm text-muted-foreground">2023 - 2027</p>
                </div>
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">Focus Areas</h3>
                  <ul className="space-y-1 text-muted-foreground">
                    <li>• Network Security & Infrastructure</li>
                    <li>• Vulnerability Assessment & Penetration Testing</li>
                    <li>• Security Automation & Scripting</li>
                    <li>• Incident Response & Threat Analysis</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="glass glass-hover p-6 rounded-xl gradient-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-primary animate-glow-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">Mission</h3>
                  <p className="text-muted-foreground">
                    Dedicated to strengthening cybersecurity postures through proactive
                    vulnerability identification, cutting-edge security automation, and
                    continuous learning in the evolving threat landscape.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right - Description */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="glass p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6 neon-text-green">Passionate About Security</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                As a <span className="text-primary font-semibold">Cybersecurity Engineering student</span> at
                Karpagam Academy of Higher Education, I'm building a strong foundation in protecting
                digital assets and infrastructure from evolving cyber threats.
              </p>
              <p>
                My hands-on experience includes conducting comprehensive{" "}
                <span className="text-secondary font-semibold">vulnerability assessments</span>,
                performing penetration testing engagements, and developing automated security tools
                that have improved detection accuracy by up to 25%.
              </p>
              <p>
                With internships at leading organizations like Codec Technologies and ShadowFox, I've
                contributed to{" "}
                <span className="text-primary font-semibold">SOC efficiency improvements of 45%</span>{" "}
                and identified 30+ critical vulnerabilities across various environments.
              </p>
              <p>
                I'm committed to continuous learning and staying ahead of emerging threats through
                certifications from Google, ISC2, and IBM, while actively applying cutting-edge
                security practices in real-world scenarios.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
