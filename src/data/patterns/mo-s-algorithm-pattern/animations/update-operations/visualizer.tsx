import React, { useState, useEffect } from 'react';
import { RefreshCw, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { patterns, updateOperationsAnimation } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState('rangeSumQuery2DMutable');
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < updateOperationsAnimation.steps[0].phases.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 2000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderVisualization = () => {
    const currentStep = updateOperationsAnimation.steps[0];
    const currentPhase = currentStep.phases[step];
    const currentMatrix = currentPhase.updatedMatrix || currentStep.matrix;

    return (
      <div className="space-y-4">
        <div className="grid grid-cols-5 gap-2">
          {currentMatrix.map((row, rowIdx) => (
            row.map((val, colIdx) => (
              <div
                key={`${rowIdx}-${colIdx}`}
                className={`w-12 h-12 flex items-center justify-center rounded-lg font-mono text-lg
                  ${rowIdx < step && colIdx < step ? 'bg-blue-100 text-blue-800' : 'bg-gray-100'}`}
              >
                {val}
              </div>
            ))
          ))}
        </div>
        {currentPhase.blocks && (
          <div className="bg-yellow-100 p-2 rounded">
            Blocks: {JSON.stringify(currentPhase.blocks)}
          </div>
        )}
        {currentPhase.sum !== undefined && (
          <div className="bg-green-100 p-2 rounded">
            Sum: {currentPhase.sum}
          </div>
        )}
      </div>
    );
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
                <RefreshCw className="w-5 h-5" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {updateOperationsAnimation.steps[0].title}
        </h3>
        {renderVisualization()}
      </div>

      <div className="flex justify-center gap-4">
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
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Step {step + 1}</span>
          <span>of {updateOperationsAnimation.steps[0].phases.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / updateOperationsAnimation.steps[0].phases.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;

