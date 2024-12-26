import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { bitAdvancedApplicationsAnimation } from './data';

const BITAdvancedApplicationsVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < bitAdvancedApplicationsAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderVisualization = () => {
    const { visualizationData } = bitAdvancedApplicationsAnimation.steps[step];
    
    switch (step) {
      case 0: // Range Updates with Point Queries
        return (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Array</h4>
              <div className="flex">
                {visualizationData.array.map((value, index) => (
                  <div key={index} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">BIT</h4>
              <div className="flex">
                {visualizationData.bit.map((value, index) => (
                  <div key={index} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p>Update: [{visualizationData.update.start}, {visualizationData.update.end}] by {visualizationData.update.value}</p>
              <p>Query at index: {visualizationData.query}</p>
            </div>
          </div>
        );
      case 1: // 2D Range Sum Queries
        return (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">2D Array</h4>
              <div className="grid grid-cols-4 gap-1">
                {visualizationData.array.map((row, rowIndex) => (
                  row.map((value, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                      {value}
                    </div>
                  ))
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">2D BIT</h4>
              <div className="grid grid-cols-5 gap-1">
                {visualizationData.bit.map((row, rowIndex) => (
                  row.map((value, colIndex) => (
                    <div key={`${rowIndex}-${colIndex}`} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                      {value}
                    </div>
                  ))
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p>Query: [{visualizationData.query.x1}, {visualizationData.query.y1}] to [{visualizationData.query.x2}, {visualizationData.query.y2}]</p>
            </div>
          </div>
        );
      case 2: // Range Updates with Range Queries
        return (
          <div className="flex flex-col items-center">
            <div className="mb-4">
              <h4 className="text-lg font-semibold">Array</h4>
              <div className="flex">
                {visualizationData.array.map((value, index) => (
                  <div key={index} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h4 className="text-lg font-semibold">BIT 1</h4>
              <div className="flex">
                {visualizationData.bit1.map((value, index) => (
                  <div key={index} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold">BIT 2</h4>
              <div className="flex">
                {visualizationData.bit2.map((value, index) => (
                  <div key={index} className="w-10 h-10 border border-gray-300 flex items-center justify-center">
                    {value}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p>Update: [{visualizationData.update.start}, {visualizationData.update.end}] by {visualizationData.update.value}</p>
              <p>Query: [{visualizationData.query.start}, {visualizationData.query.end}]</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{bitAdvancedApplicationsAnimation.title}</h2>
        <p className="text-gray-600">{bitAdvancedApplicationsAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {bitAdvancedApplicationsAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{bitAdvancedApplicationsAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{bitAdvancedApplicationsAnimation.steps[step].description}</p>
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
          onClick={() => setStep(s => Math.min(bitAdvancedApplicationsAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BITAdvancedApplicationsVisualizer;

