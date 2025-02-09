// visualizer.tsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpCircle, Activity, GitMerge, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns, stateCounterAnimation } from './data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('stateTransition');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'arrow-up-circle': return <ArrowUpCircle className="w-5 h-5" />;
      case 'activity': return <Activity className="w-5 h-5" />;
      case 'git-merge': return <GitMerge className="w-5 h-5" />;
      default: return <Activity className="w-5 h-5" />;
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < patterns[activePattern].data.length) {
      timer = setTimeout(() => setStep(s => s + 1), 1500);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const renderStateVisualization = () => {
    const pattern = patterns[activePattern];
    const currentStep = step;
    
    return (
      <motion.div 
        className="grid gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <div style={{ color: pattern.color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                {getIcon(pattern.icon)}
              </div>
              {pattern.title}
              {pattern.leetcode && (
                <a 
                  href={`https://leetcode.com/problems/${pattern.leetcode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto text-sm text-blue-500 hover:text-blue-600"
                >
                  LeetCode #{pattern.leetcode}
                </a>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3 mb-6">
              {Array.from(pattern.data).map((char, idx) => (
                <motion.div
                  key={idx}
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-lg font-mono
                    ${idx === currentStep ? 'bg-blue-500 text-white' : 
                      idx < currentStep ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
                  initial={{ scale: idx === currentStep ? 0.8 : 1 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  {char}
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold mb-3">Current States</h4>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(pattern.states || {}).map(([state, count], idx) => (
                    <motion.div
                      key={state}
                      className="px-3 py-1 rounded-full bg-white shadow-sm"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {state}: {count}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl">
                <h4 className="font-semibold mb-3">Pattern Progress</h4>
                <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute h-full bg-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentStep / pattern.data.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="mt-2 text-sm text-gray-600">
                  Step {currentStep + 1} of {pattern.data.length}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="p-6">
      <Tabs defaultValue={activePattern} onValueChange={(value) => {
        setActivePattern(value);
        setStep(0);
        setIsPlaying(false);
      }}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          {Object.entries(patterns).map(([key, { title }]) => (
            <TabsTrigger key={key} value={key} className="px-8 py-3">
              {title}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.keys(patterns).map((key) => (
          <TabsContent key={key} value={key}>
            {renderStateVisualization()}
          </TabsContent>
        ))}
      </Tabs>

      <div className="flex justify-center gap-4 mt-6">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <RotateCcw className="w-5 h-5" />
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center ${
            isPlaying ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setStep(s => Math.min(s + 1, patterns[activePattern].data.length - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </motion.button>
      </div>
    </div>
  );
};

export default Visualizer;
