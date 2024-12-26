import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { graphStructureCloningAnimation } from './data';

const styles = `
  @keyframes drawLine {
    to { stroke-dashoffset: 0; }
  }
  @keyframes scaleIn {
    from { transform: scale(0); }
    to { transform: scale(1); }
  }
`;

const GraphStructureCloningVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < graphStructureCloningAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderGraph = (isClone: boolean = false) => {
    const { nodes, edges } = graphStructureCloningAnimation.steps[step].visualizationData;
    const width = 300;
    const height = 200;
    const nodeRadius = 20;

    const nodePositions = nodes.map((node, index) => ({
      x: width / 2 + Math.cos(2 * Math.PI * index / nodes.length) * (width / 3),
      y: height / 2 + Math.sin(2 * Math.PI * index / nodes.length) * (height / 3),
    }));

    return (
      <svg width={width} height={height}>
        {edges.map((edge, index) => {
          const start = nodePositions[edge.from - 1];
          const end = nodePositions[edge.to - 1];
          return (
            <line
              key={`edge-${index}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={isClone ? "green" : "blue"}
              strokeWidth={2}
              style={{strokeDasharray: '100%', strokeDashoffset: '100%', animation: `drawLine 1s ${index * 0.2}s forwards`}}
            />
          );
        })}
        {nodes.map((node, index) => (
          <g key={`node-${index}`} style={{animation: `scaleIn 0.5s ${index * 0.1}s forwards`}}>
            <circle
              cx={nodePositions[index].x}
              cy={nodePositions[index].y}
              r={nodeRadius}
              fill={node.color || (isClone ? "lightgreen" : "lightblue")}
              stroke={isClone ? "green" : "blue"}
              strokeWidth={2}
            />
            <text
              x={nodePositions[index].x}
              y={nodePositions[index].y}
              textAnchor="middle"
              dominantBaseline="central"
              fill="black"
            >
              {node.label}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{graphStructureCloningAnimation.title}</h2>
        <p className="text-gray-600">{graphStructureCloningAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {graphStructureCloningAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{graphStructureCloningAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{graphStructureCloningAnimation.steps[step].description}</p>
        <div className="flex justify-around">
          <div>
            <h4 className="text-center mb-2 font-semibold">Original Graph</h4>
            {renderGraph()}
          </div>
          <div>
            <h4 className="text-center mb-2 font-semibold">Cloned Graph</h4>
            {renderGraph(true)}
          </div>
        </div>
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
          onClick={() => setStep(s => Math.min(graphStructureCloningAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default GraphStructureCloningVisualizer;

