
import { useState } from "react";
import { Mail, MessageSquare, User, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="bg-gradient-to-b from-white to-secondary/30 py-16 md:py-24">
      <div className="section-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you! Fill out the form below or reach out via my social channels.
        </p>
        
        <div className="grid md:grid-cols-2 gap-12">
          <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="block w-full pl-10 py-3 border border-border rounded-md shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
                  placeholder="Your name"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-muted-foreground" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="block w-full pl-10 py-3 border border-border rounded-md shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                Message
              </label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none">
                  <MessageSquare className="h-5 w-5 text-muted-foreground" />
                </div>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="block w-full pl-10 py-3 border border-border rounded-md shadow-sm focus:ring-2 focus:ring-primary/20 focus:border-primary focus:outline-none"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary disabled:opacity-70 transition-colors duration-300"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <div className="animate-spin mr-2 h-5 w-5 border-b-2 border-white rounded-full"></div>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <Send className="mr-2 h-5 w-5" />
                  <span>Send Message</span>
                </div>
              )}
            </button>
          </form>
          
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-white rounded-lg shadow-md p-8 h-full">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">Email</p>
                    <a href="mailto:contact@example.com" className="text-primary hover:underline">
                      contact@example.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Github className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">GitHub</p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      github.com/username
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Linkedin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-foreground">LinkedIn</p>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      linkedin.com/in/username
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="text-lg font-medium mb-4">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-secondary rounded-full hover:bg-primary hover:text-white transition-colors duration-300">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
