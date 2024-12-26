import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { componentAnalysisAnimation } from './data';

const ComponentAnalysisVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < componentAnalysisAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderGraph = () => {
    const { visualizationData } = componentAnalysisAnimation.steps[step];
    const width = 400;
    const height = 300;
    const nodeRadius = 20;

    const nodePositions = visualizationData.nodes.reduce((acc, node, index) => {
      const angle = (2 * Math.PI * index) / visualizationData.nodes.length;
      acc[node.id] = {
        x: width / 2 + Math.cos(angle) * (width / 3 - nodeRadius),
        y: height / 2 + Math.sin(angle) * (height / 3 - nodeRadius),
      };
      return acc;
    }, {} as Record<number, { x: number; y: number }>);

    const getNodeColor = (nodeId: number) => {
      if (visualizationData.components) {
        const componentIndex = visualizationData.components.findIndex(comp => comp.includes(nodeId));
        const colors = ['lightblue', 'lightgreen', 'lightyellow', 'lightpink', 'lightgray'];
        return colors[componentIndex % colors.length];
      }
      if (visualizationData.maxScoreSequence?.includes(nodeId)) {
        return 'lightgreen';
      }
      return 'lightblue';
    };

    const getEdgeColor = (edge: any) => {
      if (edge.type === 'both') return 'purple';
      if (edge.type === 'alice') return 'blue';
      if (edge.type === 'bob') return 'red';
      return 'black';
    };

    return (
      <svg width={width} height={height}>
        {visualizationData.edges.map((edge, index) => {
          const start = nodePositions[edge.source];
          const end = nodePositions[edge.target];
          const isRemovable = visualizationData.removableEdges?.some(
            (re) => re.source === edge.source && re.target === edge.target
          );

          return (
            <line
              key={`edge-${index}`}
              x1={start.x}
              y1={start.y}
              x2={end.x}
              y2={end.y}
              stroke={isRemovable ? 'red' : getEdgeColor(edge)}
              strokeWidth={2}
              strokeDasharray={isRemovable ? '5,5' : 'none'}
            />
          );
        })}
        {visualizationData.nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={nodePositions[node.id].x}
              cy={nodePositions[node.id].y}
              r={nodeRadius}
              fill={getNodeColor(node.id)}
              stroke="black"
            />
            <text
              x={nodePositions[node.id].x}
              y={nodePositions[node.id].y}
              textAnchor="middle"
              dominantBaseline="central"
            >
              {node.id}
              {node.score !== undefined && ` (${node.score})`}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{componentAnalysisAnimation.title}</h2>
        <p className="text-gray-600">{componentAnalysisAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {componentAnalysisAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{componentAnalysisAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{componentAnalysisAnimation.steps[step].description}</p>
        {renderGraph()}
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
          onClick={() => setStep(s => Math.min(componentAnalysisAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ComponentAnalysisVisualizer;


