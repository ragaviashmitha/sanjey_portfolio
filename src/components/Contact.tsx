import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "sanjeyjayaseelan@gmail.com",
      href: "mailto:sanjeyjayaseelan@gmail.com",
      color: "primary"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/Sanjeyj",
      href: "https://github.com/Sanjeyj",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/jj-sanjey",
      href: "https://linkedin.com/in/jj-sanjey",
      color: "primary"
    }
  ];

  return (
    <section id="contact" ref={ref} className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 neon-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or discussing cybersecurity opportunities? Let's connect!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass p-8 sm:p-12 rounded-2xl gradient-border mb-8"
          >
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contactLinks.map((link, index) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                    className="glass glass-hover p-6 rounded-xl text-center group"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                      link.color === "primary" ? "bg-primary/20" : "bg-secondary/20"
                    }`}>
                      <Icon className={`w-8 h-8 animate-glow-pulse ${
                        link.color === "primary" ? "text-primary" : "text-secondary"
                      }`} />
                    </div>
                    <h3 className="font-semibold text-foreground mb-2">{link.label}</h3>
                    <p className={`text-sm break-all ${
                      link.color === "primary" ? "text-primary" : "text-secondary"
                    }`}>{link.value}</p>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"
        />
      </div>
    </section>
  );
};

export default Contact;
