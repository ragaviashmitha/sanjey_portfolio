import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import profile from "@/assets/pro.png";



const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid">
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Shield className="w-4 h-4 text-primary animate-glow-pulse" />
              <span className="text-sm font-medium">Cybersecurity Professional</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 neon-text"
            >
              JJ Sanjey
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-muted-foreground"
            >
              <span className="text-primary">Cybersecurity Engineer</span>
              
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Security Automation Enthusiast specializing in vulnerability assessments,
              network security, and penetration testing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a href="https://drive.google.com/drive/folders/1iuWrj62aMmUu6cB-8oSLCg5P36RlJTfn" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="glass-hover group">
                  <Download className="w-4 h-4 mr-2 group-hover:animate-bounce" />
                  View Resume
                </Button>
              </a>
          
              <a href="mailto:sanjeyjayaseelan@gmail.com">
              <Button size="lg" variant="outline" className="glass glass-hover">
              <Mail className="w-4 h-4 mr-2" />
              Contact Me
              </Button>
              </a>
            <a href="https://github.com/Sanjeyj" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="glass glass-hover">
                <Github className="w-5 h-5" />
              </Button>
              </a>
              <a href="https://www.linkedin.com/in/jj-sanjey/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="ghost" className="glass glass-hover">
                <Linkedin className="w-5 h-5" />
              </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Rotating Border */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-rotate-slow opacity-75 blur-sm" />

              {/* Profile Image Container */}
              <div className="absolute inset-2 rounded-full overflow-hidden border-2 border-primary/30 group hover:border-primary/60 transition-all duration-500 hover:scale-105">
                  <img
                    src={profile}
                  alt="JJ Sanjey"
                  className="w-full h-full object-cover"
                />
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
