import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { basicNodeCloningAnimation } from './data';

const BasicNodeCloningVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < basicNodeCloningAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderVisualization = () => {
    const { visualizationData } = basicNodeCloningAnimation.steps[step];
    
    switch (step) {
      case 0:
        return (
          <div className="flex justify-around items-center h-64">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-blue-500 text-white p-4 rounded-full">
              {visualizationData.originalNode.value}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="bg-green-500 text-white p-4 rounded-full">
              {visualizationData.clonedNode.value}
            </motion.div>
          </div>
        );
      case 1:
        return (
          <div className="flex flex-col items-center h-64">
            <div className="flex mb-8">
              {visualizationData.originalChain.map((value, index) => (
                <motion.div key={`original-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="bg-blue-500 text-white p-4 rounded-full mr-2">
                  {value}
                </motion.div>
              ))}
            </div>
            <div className="flex">
              {visualizationData.clonedChain.map((value, index) => (
                <motion.div key={`cloned-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-green-500 text-white p-4 rounded-full mr-2">
                  {value}
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 2:
        return (
          <div className="flex flex-col items-center h-64">
            <div className="flex mb-8">
              {visualizationData.originalNodes.map((node, index) => (
                <motion.div key={`original-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: index * 0.1 }} className="bg-blue-500 text-white p-4 rounded-full mr-2">
                  {node.value}
                  <div className="text-xs">R: {node.random}</div>
                </motion.div>
              ))}
            </div>
            <div className="flex">
              {visualizationData.clonedNodes.map((node, index) => (
                <motion.div key={`cloned-${index}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 + index * 0.1 }} className="bg-green-500 text-white p-4 rounded-full mr-2">
                  {node.value}
                  <div className="text-xs">R: {node.random}</div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="flex flex-col items-center h-64">
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="relative w-48 h-48">
              {visualizationData.originalChain.map((value, index) => (
                <motion.div
                  key={`original-${index}`}
                  className="absolute bg-blue-500 text-white p-4 rounded-full"
                  style={{
                    top: `${50 - 40 * Math.cos(2 * Math.PI * index / visualizationData.originalChain.length)}%`,
                    left: `${50 + 40 * Math.sin(2 * Math.PI * index / visualizationData.originalChain.length)}%`,
                  }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
            <motion.div initial={{ rotate: 0 }} animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="relative w-48 h-48 mt-8">
              {visualizationData.clonedChain.map((value, index) => (
                <motion.div
                  key={`cloned-${index}`}
                  className="absolute bg-green-500 text-white p-4 rounded-full"
                  style={{
                    top: `${50 - 40 * Math.cos(2 * Math.PI * index / visualizationData.clonedChain.length)}%`,
                    left: `${50 + 40 * Math.sin(2 * Math.PI * index / visualizationData.clonedChain.length)}%`,
                  }}
                >
                  {value}
                </motion.div>
              ))}
            </motion.div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{basicNodeCloningAnimation.title}</h2>
        <p className="text-gray-600">{basicNodeCloningAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {basicNodeCloningAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{basicNodeCloningAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{basicNodeCloningAnimation.steps[step].description}</p>
        {renderVisualization()}
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
          onClick={() => setStep(s => Math.min(basicNodeCloningAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BasicNodeCloningVisualizer;
