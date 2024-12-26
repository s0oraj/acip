import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { twoDOperationsAnimation } from './data';

const TwoDOperationsVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < twoDOperationsAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderMatrix = (matrix: number[][], query: { x1: number; y1: number; x2: number; y2: number }) => {
    return (
      <div className="flex flex-col items-center mt-4">
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((value, colIndex) => (
              <div
                key={colIndex}
                className={`w-12 h-12 flex items-center justify-center border border-gray-300 ${
                  rowIndex >= query.y1 && rowIndex <= query.y2 && colIndex >= query.x1 && colIndex <= query.x2
                    ? 'bg-green-200'
                    : 'bg-blue-200'
                }`}
              >
                {value}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  };

  const { visualizationData } = twoDOperationsAnimation.steps[step];

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{twoDOperationsAnimation.title}</h2>
        <p className="text-gray-600">{twoDOperationsAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {twoDOperationsAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{twoDOperationsAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{twoDOperationsAnimation.steps[step].description}</p>
        {renderMatrix(visualizationData.matrix, visualizationData.query || visualizationData.update)}
        <p className="mt-4 text-sm text-gray-600">
          {visualizationData.query ? (
            `Query: [(${visualizationData.query.x1}, ${visualizationData.query.y1}), (${visualizationData.query.x2}, ${visualizationData.query.y2})]`
          ) : (
            `Update: [(${visualizationData.update.x1}, ${visualizationData.update.y1}), (${visualizationData.update.x2}, ${visualizationData.update.y2})] with value ${visualizationData.update.value}`
          )}
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
          onClick={() => setStep(s => Math.min(twoDOperationsAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TwoDOperationsVisualizer;

