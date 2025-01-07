// src/components/galaxy/MatrixIntroHeader.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  text: string;
  duration?: number;
}

interface Props {
  messages: Message[];
  onComplete: () => void;
}

export default function MatrixIntroHeader({ messages, onComplete }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isVisible, setIsVisible] = useState(true);
  const finalMessageIndex = messages.length - 1;

  useEffect(() => {
    let timeoutId: number;
    
    if (isVisible) {
      const currentMessage = messages[textIndex].text;
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
          }, messages[textIndex].duration || 2000) as unknown as number;
        } else {
          setTimeout(() => {
            onComplete();
          }, 2000);
        }
      };

      typeText();
    }

    return () => clearTimeout(timeoutId);
  }, [textIndex, isVisible, messages, finalMessageIndex, onComplete]);

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-50">
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
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
              className="relative px-8 py-6 border border-white/10 rounded-lg font-mono"
              style={{
                background: 'linear-gradient(180deg, rgba(13, 13, 13, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%)'
              }}
            >
              <div
                className="text-3xl font-light tracking-wider min-h-[48px] text-center"
                style={{
                  color: '#7FFF7F',
                  textShadow: '0 0 10px rgba(127, 255, 127, 0.5)'
                }}
              >
                {displayedText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block ml-1 w-[3px] h-[32px] bg-[#7FFF7F]"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}