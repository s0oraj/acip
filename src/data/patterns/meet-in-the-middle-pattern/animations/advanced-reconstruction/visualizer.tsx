import React, { useState, useEffect } from 'react';
import { Cpu, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('minimizeXOR');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < 4) { // Assuming 4 steps for each pattern
      timer = setTimeout(() => setStep(s => s + 1), 1000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderVisualization = () => {
    const currentPattern = patterns[activePattern];
    return (
      <div className="space-y-4">
        {currentPattern.num1 !== undefined && currentPattern.num2 !== undefined && (
          <div className="text-lg font-semibold">
            Num1: {currentPattern.num1}, Num2: {currentPattern.num2}
          </div>
        )}
        {currentPattern.nodes && (
          <div className="space-y-2">
            <div className="font-semibold">Nodes:</div>
            <div className="flex flex-wrap gap-2">
              {currentPattern.nodes.map((node, idx) => (
                <div key={idx} className="bg-blue-100 p-2 rounded">
                  {node}
                </div>
              ))}
            </div>
          </div>
        )}
        {currentPattern.parents && (
          <div className="space-y-2">
            <div className="font-semibold">Parents:</div>
            <div className="flex flex-wrap gap-2">
              {currentPattern.parents.map((parent, idx) => (
                <div key={idx} className="bg-green-100 p-2 rounded">
                  {parent}
                </div>
              ))}
            </div>
          </div>
        )}
        {currentPattern.queries && (
          <div className="space-y-2">
            <div className="font-semibold">Queries:</div>
            {currentPattern.queries.map((query, idx) => (
              <div key={idx} className="bg-gray-100 p-2 rounded">
                [{query.join(', ')}]
              </div>
            ))}
          </div>
        )}
        {currentPattern.arr1 && currentPattern.arr2 && (
          <div className="space-y-2">
            <div className="font-semibold">Arrays:</div>
            <div className="bg-blue-100 p-2 rounded">
              Arr1: [{currentPattern.arr1.join(', ')}]
            </div>
            <div className="bg-green-100 p-2 rounded">
              Arr2: [{currentPattern.arr2.join(', ')}]
            </div>
          </div>
        )}
        {currentPattern.nums && currentPattern.numSlots && (
          <div className="space-y-2">
            <div className="font-semibold">Nums:</div>
            <div className="bg-blue-100 p-2 rounded">
              [{currentPattern.nums.join(', ')}]
            </div>
            <div className="font-semibold">Number of Slots: {currentPattern.numSlots}</div>
          </div>
        )}
        {/* Add more visualization elements based on the current step */}
      </div>
    );
  };

  const handleNext = () => {
    const patternKeys = Object.keys(patterns);
    const nextIndex = (patternKeys.indexOf(activePattern) + 1) % patternKeys.length;
    setActivePattern(patternKeys[nextIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  const handlePrevious = () => {
    const patternKeys = Object.keys(patterns);
    const prevIndex = (patternKeys.indexOf(activePattern) - 1 + patternKeys.length) % patternKeys.length;
    setActivePattern(patternKeys[prevIndex]);
    setStep(0);
    setIsPlaying(false);
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }]) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(key);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`p-4 rounded-xl transition-all ${
              activePattern === key 
                ? 'bg-white shadow-lg scale-105' 
                : 'bg-gray-50 hover:bg-white hover:shadow'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {patterns[activePattern].title}
        </h3>
        {renderVisualization()}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={handlePrevious}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
            ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 ml-0.5" />
          )}
        </button>

        <button
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
