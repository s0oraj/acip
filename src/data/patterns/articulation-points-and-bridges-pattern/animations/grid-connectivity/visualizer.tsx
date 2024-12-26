import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { gridConnectivityAnimation } from './data';

const GridConnectivityVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < gridConnectivityAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderGrid = () => {
    const { visualizationData } = gridConnectivityAnimation.steps[step];
    const cellSize = 40;
    const width = visualizationData.grid[0].length * cellSize;
    const height = visualizationData.grid.length * cellSize;

    return (
      <svg width={width} height={height}>
        {visualizationData.grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <rect
              key={`cell-${rowIndex}-${colIndex}`}
              x={colIndex * cellSize}
              y={rowIndex * cellSize}
              width={cellSize}
              height={cellSize}
              fill={cell === 1 ? 'lightblue' : 'white'}
              stroke="black"
            />
          ))
        )}
        {visualizationData.disconnectCells?.map((cell, index) => (
          <rect
            key={`disconnect-${index}`}
            x={cell[1] * cellSize}
            y={cell[0] * cellSize}
            width={cellSize}
            height={cellSize}
            fill="red"
            fillOpacity={0.5}
          />
        ))}
        {visualizationData.bridge?.map((cell, index) => (
          <rect
            key={`bridge-${index}`}
            x={cell[1] * cellSize}
            y={cell[0] * cellSize}
            width={cellSize}
            height={cellSize}
            fill="green"
            fillOpacity={0.5}
          />
        ))}
        {visualizationData.largestIsland?.map((cell, index) => (
          <rect
            key={`largest-${index}`}
            x={cell[1] * cellSize}
            y={cell[0] * cellSize}
            width={cellSize}
            height={cellSize}
            fill="orange"
            fillOpacity={0.5}
          />
        ))}
      </svg>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{gridConnectivityAnimation.title}</h2>
        <p className="text-gray-600">{gridConnectivityAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {gridConnectivityAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{gridConnectivityAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{gridConnectivityAnimation.steps[step].description}</p>
        {renderGrid()}
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
          onClick={() => setStep(s => Math.min(gridConnectivityAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GridConnectivityVisualizer;


