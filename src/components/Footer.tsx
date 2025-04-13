
import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="flex items-center justify-center mb-4">
            Made with 
            <Heart className="h-4 w-4 mx-1 text-primary fill-primary" /> 
            and modern web technologies
          </p>
          <p className="text-sm text-gray-300">
            &copy; {currentYear} Nicolas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
