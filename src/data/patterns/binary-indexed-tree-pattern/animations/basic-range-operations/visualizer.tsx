import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { basicRangeOperationsAnimation } from './data';

const BasicRangeOperationsVisualizer = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [phase, setPhase] = useState('initial');
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer;
    if (isPlaying) {
      timer = setInterval(() => {
        setPhase(prev => {
          const phases = ['initial', 'processing', 'complete'];
          const currentIndex = phases.indexOf(prev);
          if (currentIndex === phases.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return phases[currentIndex + 1];
        });
      }, 1500);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const renderBIT = (bit: number[], highlightIndices: number[] = []) => (
    <div className="h-64">
      <svg viewBox="0 0 400 300">
        {bit.slice(1).map((value, idx) => {
          const x = ((idx + 1) / bit.length) * 350 + 25;
          const y = 150;
          return (
            <g key={idx}>
              <circle
                cx={x}
                cy={y}
                r={20}
                className={`${
                  highlightIndices.includes(idx + 1)
                    ? 'fill-blue-500 text-white'
                    : 'fill-gray-100 stroke-gray-300'
                }`}
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-medium"
              >
                {value}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );

  const renderArray = (array: number[], query?: { start: number; end: number }) => (
    <div className="flex justify-center gap-2 my-4">
      {array.map((value, idx) => (
        <div
          key={idx}
          className={`w-12 h-12 flex items-center justify-center rounded-lg font-medium
            ${query && idx >= query.start && idx <= query.end
              ? 'bg-green-100 text-green-800'
              : 'bg-gray-100'
          }`}
        >
          {value}
        </div>
      ))}
    </div>
  );

  const { steps } = basicRangeOperationsAnimation;
  const currentStep = steps[activeTab];

  return (
    <div className="p-6">
      <div className="grid grid-cols-4 gap-4 mb-6">
        {steps.map((step, idx) => (
          <button
            key={idx}
            onClick={() => {
              setActiveTab(idx);
              setPhase('initial');
              setIsPlaying(false);
            }}
            className={`p-4 rounded-xl transition-all ${
              activeTab === idx
                ? 'bg-white shadow-lg scale-105'
                : 'bg-gray-50 hover:bg-white hover:shadow'
            }`}
          >
            <span className="font-semibold">{step.title}</span>
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-xl font-bold mb-2">{currentStep.title}</h3>
        <p className="text-gray-600 mb-4">{currentStep.description}</p>
        
        {currentStep.visualizationData.bit && 
          renderBIT(
            currentStep.visualizationData.bit,
            currentStep.visualizationData.highlightIndices
          )}
        
        {currentStep.visualizationData.array &&
          renderArray(
            currentStep.visualizationData.array,
            currentStep.visualizationData.query
          )}
      </div>

      <div className="flex justify-center gap-4">
        <button
          onClick={() => setActiveTab(idx => Math.max(0, idx - 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className={`w-12 h-12 rounded-full flex items-center justify-center
            ${isPlaying
              ? 'bg-gray-200 hover:bg-gray-300 text-gray-700'
              : 'bg-blue-500 hover:bg-blue-600 text-white'
            }`}
        >
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
        </button>
        
        <button
          onClick={() => {
            setPhase('initial');
            setIsPlaying(false);
          }}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <RotateCcw className="w-5 h-5" />
        </button>
        
        <button
          onClick={() => setActiveTab(idx => Math.min(steps.length - 1, idx + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BasicRangeOperationsVisualizer;
