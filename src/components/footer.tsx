import { Github, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gradient-to-br from-black via-indigo-950 to-black text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-8"> {/* 32px padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* ~80px content */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-white">Interview Patterns</h3>
            <p className="text-sm text-gray-400">
              ACIP - Algorithm Patterns with Interactive Visualizations.
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
            <div className="flex items-center space-x-4">
              <a href="https://github.com/s0oraj/acip" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-sm text-gray-400"> {/* ~38px footer */}
          <p>&copy; {currentYear} Interview Patterns · All rights reserved · (ACIP) · 
            <a href="https://opensource.org/licenses/MIT" className="ml-1 hover:text-blue-400" target="_blank" rel="noopener noreferrer">
              MIT License
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
