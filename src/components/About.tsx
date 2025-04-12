
import { Cpu, Code, Layout, Server } from "lucide-react";

const About = () => {
  const skills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "TypeScript", level: 70 },
    { name: "UI/UX Design", level: 65 },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-6">
              I'm a passionate web developer with a keen eye for design and a commitment to creating high-performance, user-friendly websites. With several years of experience in the field, I've developed a strong skill set that enables me to turn ideas into reality.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach to web development focuses on combining aesthetics with functionality, ensuring that each project not only looks great but also delivers an exceptional user experience. I keep up with the latest industry trends and technologies to provide cutting-edge solutions.
            </p>
            <p className="text-muted-foreground">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community forums.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-secondary rounded-full h-2.5">
                    <div
                      className="bg-primary h-2.5 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Layout className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Frontend Development</h3>
            <p className="text-center text-muted-foreground">
              Creating responsive, interactive user interfaces with HTML, CSS, and JavaScript frameworks.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Server className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Backend Development</h3>
            <p className="text-center text-muted-foreground">
              Building robust, scalable server-side applications with Node.js and Express.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "1s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Cpu className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Performance Optimization</h3>
            <p className="text-center text-muted-foreground">
              Enhancing website speed and efficiency through optimization techniques.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 animate-fade-in" style={{ animationDelay: "1.2s" }}>
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Code className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h3 className="text-lg font-semibold text-center mb-2">Modern Frameworks</h3>
            <p className="text-center text-muted-foreground">
              Leveraging React, Vue, and other modern frameworks to build powerful web applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
