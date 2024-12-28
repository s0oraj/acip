// src/components/layout/Footer.tsx
import { Github } from 'lucide-react'; // Changed from GitHub to Github
import { Link } from 'react-router-dom';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Project Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">ACIP</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Algorithm Patterns with Interactive Visualizations
            </p>
            <a 
              href="https://github.com/s0oraj/acip"
              className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" /> {/* Changed from GitHub to Github */}
              <span className="text-sm">View on GitHub</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">Quick Links</h3>
            <Link 
              to="/patterns"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Patterns
            </Link>
            <Link 
              to="/visualizer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Visualizer
            </Link>
          </div>

          {/* License */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-gray-900 dark:text-white">License</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} ACIP. All rights reserved.
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Licensed under the{' '}
              <a
                href="https://opensource.org/licenses/MIT"
                className="text-blue-600 dark:text-blue-400 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                MIT License
              </a>
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
              Permission is hereby granted, free of charge, to any person obtaining a copy
              of this software and associated documentation files, to deal in the Software
              without restriction, including without limitation the rights to use, copy,
              modify, merge, publish, distribute, sublicense, and/or sell copies of the
              Software, subject to the conditions of the MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
