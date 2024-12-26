import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { basicRangeOperationsAnimation } from './data';

const BasicRangeOperationsVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < basicRangeOperationsAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderBIT = (bit: number[]) => {
    const width = 600;
    const height = 300;
    const nodeRadius = 20;

    return (
      <svg width={width} height={height}>
        {bit.map((value, index) => {
          if (index === 0) return null; // Skip the 0th element
          const x = (index / bit.length) * width;
          const y = height / 2;

          return (
            <g key={index}>
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill="lightblue"
                stroke="black"
              />
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12"
              >
                {value}
              </text>
              <text
                x={x}
                y={y + nodeRadius + 15}
                textAnchor="middle"
                fontSize="10"
              >
                {index}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  const renderArray = (array: number[], query?: { start: number; end: number }) => {
    return (
      <div className="flex justify-center mt-4">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-12 h-12 flex items-center justify-center border border-gray-300 ${
              query && index >= query.start && index <= query.end ? 'bg-green-200' : 'bg-blue-200'
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    );
  };

  const { visualizationData } = basicRangeOperationsAnimation.steps[step];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{basicRangeOperationsAnimation.title}</h2>
        <p className="text-gray-600">{basicRangeOperationsAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {basicRangeOperationsAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{basicRangeOperationsAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{basicRangeOperationsAnimation.steps[step].description}</p>
        {renderBIT(visualizationData.bit)}
        {visualizationData.array && renderArray(visualizationData.array, visualizationData.query)}
        {visualizationData.instructions && (
          <div className="mt-4">
            <h4 className="font-semibold">Instructions:</h4>
            <p>{visualizationData.instructions.join(', ')}</p>
          </div>
        )}
        {visualizationData.sortedArray && (
          <div className="mt-4">
            <h4 className="font-semibold">Sorted Array:</h4>
            <p>{visualizationData.sortedArray.join(', ')}</p>
          </div>
        )}
        {visualizationData.result && (
          <div className="mt-4">
            <h4 className="font-semibold">Result:</h4>
            <p>{visualizationData.result.join(', ')}</p>
          </div>
        )}
        {visualizationData.query && (
          <p className="mt-4 text-sm text-gray-600">
            Query: [{visualizationData.query.start}, {visualizationData.query.end}]
            {visualizationData.query.element && `, Element: ${visualizationData.query.element}`}
          </p>
        )}
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
          onClick={() => setStep(s => Math.min(basicRangeOperationsAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BasicRangeOperationsVisualizer;


