import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  duration?: number;
}

const defaultMessages: Message[] = [
  { text: "Initializing Galaxy Map...", duration: 2000 },
  { text: "Calibrating Navigation Systems...", duration: 2000 },
  { text: "Galaxy Map Ready", duration: 2000 },
  { text: "Click on a level to begin your journey", duration: Infinity }
];

export default function GalaxyIntroOverlay() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const finalMessageIndex = defaultMessages.length - 1;

  useEffect(() => {
    let timeoutId: number;
    
    if (isVisible) {
      const currentMessage = defaultMessages[textIndex].text;
      let currentIndex = 0;
      
      const typeText = () => {
        if (currentIndex <= currentMessage.length) {
          setDisplayedText(currentMessage.slice(0, currentIndex));
          currentIndex++;
          timeoutId = setTimeout(typeText, 50) as unknown as number;
        } else if (textIndex < finalMessageIndex) {
          timeoutId = setTimeout(() => {
            setIsVisible(false);
            setTimeout(() => {
              setTextIndex(prevIndex => {
                const newIndex = prevIndex + 1;
                setDisplayedText('');
                setIsVisible(true);
                return newIndex;
              });
            }, 500);
          }, defaultMessages[textIndex].duration || 2000) as unknown as number;
        }
      };

      typeText();
    }

    return () => clearTimeout(timeoutId);
  }, [textIndex, isVisible]);

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div 
              className="absolute inset-0 bg-black/40 backdrop-blur-md rounded-lg"
              style={{
                boxShadow: '0 0 20px rgba(0, 0, 0, 0.3), inset 0 0 15px rgba(255, 255, 255, 0.05)'
              }}
            />
            <div 
              className="relative px-6 py-4 border border-white/10 rounded-lg font-mono"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}
            >
              <div
                className="text-lg font-light tracking-wider min-h-[28px] w-[320px]"
                style={{
                  color: '#E5E7EB',
                  textShadow: '0 0 10px rgba(255, 255, 255, 0.3)'
                }}
              >
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-[2px] h-[20px] bg-white/70"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

