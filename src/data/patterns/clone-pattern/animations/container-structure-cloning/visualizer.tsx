import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { containerStructureCloningAnimation } from './data';

const ContainerStructureCloningVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < containerStructureCloningAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderContainer = (isClone: boolean = false) => {
    const { visualizationData } = containerStructureCloningAnimation.steps[step];
    const color = isClone ? 'bg-green-500' : 'bg-blue-500';

    switch (step) {
      case 0: // Stack
        return (
          <div className="flex flex-col-reverse items-center">
            {visualizationData.stack.map((item, index) => (
              <motion.div
                key={`${isClone ? 'clone-' : ''}stack-${index}`}
                className={`${color} text-white p-2 m-1 w-16 text-center`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        );
      case 1: // Queue
        return (
          <div className="flex items-center">
            {visualizationData.queue.map((item, index) => (
              <motion.div
                key={`${isClone ? 'clone-' : ''}queue-${index}`}
                className={`${color} text-white p-2 m-1 w-16 text-center`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.div>
            ))}
          </div>
        );
      case 2: // Priority Queue
        return (
          <div className="flex flex-col items-center">
            {visualizationData.priorityQueue.map((item, index) => (
              <motion.div
                key={`${isClone ? 'clone-' : ''}pq-${index}`}
                className={`${color} text-white p-2 m-1 w-32 text-center`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.value} (P: {item.priority})
              </motion.div>
            ))}
          </div>
        );
      case 3: // HashMap
        return (
          <div className="grid grid-cols-2 gap-2">
            {visualizationData.hashMap.map((item, index) => (
              <motion.div
                key={`${isClone ? 'clone-' : ''}hm-${index}`}
                className={`${color} text-white p-2 m-1 text-center`}
                initial={{ opacity: 0, rotateY: 90 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item.key}: {item.value}
              </motion.div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{containerStructureCloningAnimation.title}</h2>
        <p className="text-gray-600">{containerStructureCloningAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {containerStructureCloningAnimation.steps.map((s, index) => (
            <button
              key={index}
              onClick={() => { setActiveTab(index); setStep(index); setIsPlaying(false); }}
              className={`px-4 py-2 rounded ${activeTab === index ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-xl font-semibold mb-4">{containerStructureCloningAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{containerStructureCloningAnimation.steps[step].description}</p>
        <div className="flex justify-around">
          <div>
            <h4 className="text-center mb-2 font-semibold">Original Container</h4>
            {renderContainer()}
          </div>
          <div>
            <h4 className="text-center mb-2 font-semibold">Cloned Container</h4>
            {renderContainer(true)}
          </div>
        </div>
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setStep(s => Math.max(0, s - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying ? 'bg-gray-200 hover:bg-gray-300 text-gray-700' : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        <button
          onClick={() => { setStep(0); setIsPlaying(false); }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        <button
          onClick={() => setStep(s => Math.min(containerStructureCloningAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ContainerStructureCloningVisualizer;

