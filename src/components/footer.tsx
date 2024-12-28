import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradient-to-br from-black via-indigo-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">ACIP</h3>
            <p className="text-sm text-gray-400">
              Master coding interviews with our comprehensive pattern-based approach.
            </p>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link to="/" className="text-sm hover:text-blue-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/patterns" className="text-sm hover:text-blue-400 transition-colors">All Patterns</Link>
              </li>
            </ul>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/s0oraj/acip" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {currentYear} ACIP · All rights reserved · <a
                href="https://opensource.org/licenses/MIT"
                className="hover:text-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >MIT License</a></p>
        </div>
      </div>
    </footer>
  );
};
