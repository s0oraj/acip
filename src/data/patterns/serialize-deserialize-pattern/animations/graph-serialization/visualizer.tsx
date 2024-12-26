import React, { useState, useEffect } from 'react';
import { Network, Play, Pause, RotateCcw } from 'lucide-react';
import { patterns, graphSerialization } from './data';

const Visualizer: React.FC = () => {
  const [activePattern, setActivePattern] = useState(0);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying && step < graphSerialization.steps[activePattern].phases.length - 1) {
      timer = setTimeout(() => setStep(s => s + 1), 2000);
    } else {
      setIsPlaying(false);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step, activePattern]);

  const renderVisualization = () => {
    const currentStep = graphSerialization.steps[activePattern];
    const currentPhase = currentStep.phases[step];

    return (
      <div className="space-y-4">
        <div className="bg-blue-100 p-2 rounded">
          Input: {JSON.stringify(currentStep.input)}
        </div>
        <div className="bg-yellow-100 p-2 rounded">
          Encoded: {currentPhase.encoded}
        </div>
        {currentPhase.decoded && (
          <div className="bg-purple-100 p-2 rounded">
            Decoded: {JSON.stringify(currentPhase.decoded)}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {Object.entries(patterns).map(([key, { icon, title, desc, color }], index) => (
          <button
            key={key}
            onClick={() => {
              setActivePattern(index);
              setStep(0);
              setIsPlaying(false);
            }}
            className={`p-4 rounded-xl transition-all ${
              activePattern === index 
                ? 'bg-white shadow-lg scale-105' 
                : 'bg-gray-50 hover:bg-white hover:shadow'
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <div style={{ color }} className="p-2 rounded-lg bg-opacity-10 bg-current">
                <Network className="w-5 h-5" />
              </div>
              <span className="font-semibold">{title}</span>
            </div>
            <p className="text-sm text-gray-600">{desc}</p>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-lg font-semibold mb-4">
          {graphSerialization.steps[activePattern].title}
        </h3>
        {renderVisualization()}
      </div>

      <div className="bg-gray-100 p-4 rounded-xl mb-4">
        <pre className="text-sm overflow-x-auto">
          <code>
            {graphSerialization.steps[activePattern].phases[step].description}
          </code>
        </pre>
      </div>

      <div className="flex justify-center items-center gap-4">
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
            isPlaying 
            ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            : 'bg-blue-500 hover:bg-blue-600 text-white'
          }`}
        >
          {isPlaying ? (
            <Pause className="w-6 h-6" />
          ) : (
            <Play className="w-6 h-6" />
          )}
        </button>

        <button
          onClick={() => {
            setStep(0);
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <RotateCcw className="w-6 h-6" />
        </button>
      </div>

      <div className="mt-4">
        <div className="flex justify-between text-sm text-gray-500 mb-1">
          <span>Step {step + 1}</span>
          <span>of {graphSerialization.steps[activePattern].phases.length}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((step + 1) / graphSerialization.steps[activePattern].phases.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Visualizer;

