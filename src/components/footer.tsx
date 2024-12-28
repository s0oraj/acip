import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradient-to-br from-black via-indigo-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Interview Patterns</h3>
            <p className="text-gray-400">Master coding interviews with our comprehensive pattern-based approach.</p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Built with ❤️ by</span>
              <a 
                href="https://github.com/s0oraj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                s0oraj
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/patterns" className="hover:text-blue-400 transition-colors">All Patterns</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/s0oraj/acip" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">&copy; {currentYear} Interview Patterns · All rights reserved · 
            <a 
              href="https://opensource.org/licenses/MIT" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 text-blue-400 hover:text-blue-300 transition-colors"
            >
              MIT License
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
