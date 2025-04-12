
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-b from-secondary/50 to-white pt-16">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Hello, I'm a <span className="text-primary">Web Developer</span>
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-md">
              I create beautiful, responsive websites that help businesses grow and succeed online.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-md transition-colors duration-300"
              >
                View My Work
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border border-primary text-primary hover:bg-primary/10 rounded-md transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
              <div className="w-52 h-52 md:w-72 md:h-72 bg-white rounded-full shadow-lg flex items-center justify-center">
                <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  WD
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#projects" aria-label="Scroll down">
            <ArrowDown className="text-primary" size={32} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
