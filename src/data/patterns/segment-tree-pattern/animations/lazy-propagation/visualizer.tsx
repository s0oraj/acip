import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { lazyPropagationAnimation } from './data';

const LazyPropagationVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < lazyPropagationAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderTree = (tree: number[], lazy: number[], update: { start: number; end: number; value: number }) => {
    const levels = Math.log2(tree.length + 1);
    const width = 600;
    const height = levels * 60;
    const nodeRadius = 20;

    return (
      <svg width={width} height={height}>
        {tree.map((value, index) => {
          const level = Math.floor(Math.log2(index + 1));
          const x = width / 2 + (index - Math.pow(2, level) + 1) * width / Math.pow(2, level + 1);
          const y = level * 60 + 30;

          const isInRange = (index >= update.start && index <= update.end) ||
                            (update.start >= index * 2 + 1 && update.end <= index * 2 + 2);

          return (
            <g key={index}>
              {index > 0 && (
                <line
                  x1={width / 2 + ((index - 1) / 2 - Math.pow(2, level - 1) + 1) * width / Math.pow(2, level)}
                  y1={(level - 1) * 60 + 30}
                  x2={x}
                  y2={y}
                  stroke="black"
                />
              )}
              <circle
                cx={x}
                cy={y}
                r={nodeRadius}
                fill={isInRange ? 'lightgreen' : 'lightblue'}
                stroke="black"
              />
              <text
                x={x}
                y={y - 5}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="12"
              >
                {value}
              </text>
              <text
                x={x}
                y={y + 5}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="10"
                fill="red"
              >
                L:{lazy[index]}
              </text>
            </g>
          );
        })}
      </svg>
    );
  };

  const renderArray = (array: number[], update: { start: number; end: number; value: number }) => {
    return (
      <div className="flex justify-center mt-4">
        {array.map((value, index) => (
          <div
            key={index}
            className={`w-10 h-10 flex items-center justify-center border border-gray-300 ${
              index >= update.start && index <= update.end ? 'bg-green-200' : 'bg-blue-200'
            }`}
          >
            {value}
          </div>
        ))}
      </div>
    );
  };

  const { visualizationData } = lazyPropagationAnimation.steps[step];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{lazyPropagationAnimation.title}</h2>
        <p className="text-gray-600">{lazyPropagationAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {lazyPropagationAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{lazyPropagationAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{lazyPropagationAnimation.steps[step].description}</p>
        {renderTree(visualizationData.tree, visualizationData.lazy, visualizationData.update)}
        {renderArray(visualizationData.array, visualizationData.update)}
        <p className="mt-4 text-sm text-gray-600">
          Update: [{visualizationData.update.start}, {visualizationData.update.end}] by {visualizationData.update.value}
        </p>
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
          onClick={() => setStep(s => Math.min(lazyPropagationAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default LazyPropagationVisualizer;


