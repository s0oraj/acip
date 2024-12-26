import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { advancedPatternsAnimation } from './data';

const AdvancedPatternsVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < advancedPatternsAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderGraph = () => {
    const { visualizationData } = advancedPatternsAnimation.steps[step];
    const width = 600;
    const height = 400;
    const nodeRadius = 20;

    const nodePositions: { [key: number]: { x: number; y: number } } = {};
    visualizationData.nodes.forEach((node, index) => {
      const angle = (2 * Math.PI * index) / visualizationData.nodes.length;
      nodePositions[node.id] = {
        x: width / 2 + Math.cos(angle) * 150,
        y: height / 2 + Math.sin(angle) * 150,
      };
    });

    return (
      <svg width={width} height={height}>
        {visualizationData.edges.map((edge, index) => (
          <line
            key={`edge-${index}`}
            x1={nodePositions[edge.source].x}
            y1={nodePositions[edge.source].y}
            x2={nodePositions[edge.target].x}
            y2={nodePositions[edge.target].y}
            stroke={visualizationData.bridges?.some(
              b => (b.source === edge.source && b.target === edge.target) ||
                   (b.source === edge.target && b.target === edge.source)
            ) ? 'red' : 'black'}
            strokeWidth={2}
          />
        ))}
        {visualizationData.nodes.map((node) => (
          <g key={`node-${node.id}`}>
            <circle
              cx={nodePositions[node.id].x}
              cy={nodePositions[node.id].y}
              r={nodeRadius}
              fill={visualizationData.articulationPoints?.includes(node.id) ? 'yellow' : 'lightblue'}
              stroke="black"
            />
            <text
              x={nodePositions[node.id].x}
              y={nodePositions[node.id].y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="12"
            >
              {node.label}
            </text>
          </g>
        ))}
        {step === 0 && visualizationData.biconnectedComponents?.map((component, index) => (
          <path
            key={`biconnected-${index}`}
            d={`M ${component.map(id => `${nodePositions[id].x},${nodePositions[id].y}`).join(' L ')} Z`}
            fill="none"
            stroke="green"
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
        {step === 2 && visualizationData.twoEdgeConnectedComponents?.map((component, index) => (
          <path
            key={`two-edge-connected-${index}`}
            d={`M ${component.map(id => `${nodePositions[id].x},${nodePositions[id].y}`).join(' L ')} Z`}
            fill="none"
            stroke="purple"
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
        {step === 3 && visualizationData.cycles?.map((cycle, index) => (
          <path
            key={`cycle-${index}`}
            d={`M ${cycle.map(id => `${nodePositions[id].x},${nodePositions[id].y}`).join(' L ')} Z`}
            fill="none"
            stroke="orange"
            strokeWidth={2}
            opacity={0.5}
          />
        ))}
      </svg>
    );
  };

  const renderBridgeTree = () => {
    const { visualizationData } = advancedPatternsAnimation.steps[step];
    if (!visualizationData.bridgeTreeNodes || !visualizationData.bridgeTreeEdges) return null;

    const width = 600;
    const height = 200;
    const nodeRadius = 30;

    const nodePositions: { [key: string]: { x: number; y: number } } = {};
    visualizationData.bridgeTreeNodes.forEach((node, index) => {
      nodePositions[node.id] = {
        x: (index + 1) * (width / (visualizationData.bridgeTreeNodes.length + 1)),
        y: height / 2,
      };
    });

    return (
      <svg width={width} height={height}>
        {visualizationData.bridgeTreeEdges.map((edge, index) => (
          <line
            key={`bridge-tree-edge-${index}`}
            x1={nodePositions[edge.source].x}
            y1={nodePositions[edge.source].y}
            x2={nodePositions[edge.target].x}
            y2={nodePositions[edge.target].y}
            stroke="black"
            strokeWidth={2}
          />
        ))}
        {visualizationData.bridgeTreeNodes.map((node) => (
          <g key={`bridge-tree-node-${node.id}`}>
            <circle
              cx={nodePositions[node.id].x}
              cy={nodePositions[node.id].y}
              r={nodeRadius}
              fill="lightgreen"
              stroke="black"
            />
            <text
              x={nodePositions[node.id].x}
              y={nodePositions[node.id].y}
              textAnchor="middle"
              dominantBaseline="central"
              fontSize="12"
            >
              {node.id}
            </text>
            <text
              x={nodePositions[node.id].x}
              y={nodePositions[node.id].y + nodeRadius + 15}
              textAnchor="middle"
              fontSize="10"
            >
              {node.nodes.join(', ')}
            </text>
          </g>
        ))}
      </svg>
    );
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{advancedPatternsAnimation.title}</h2>
        <p className="text-gray-600">{advancedPatternsAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {advancedPatternsAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{advancedPatternsAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{advancedPatternsAnimation.steps[step].description}</p>
        {renderGraph()}
        {step === 1 && (
          <>
            <h4 className="text-lg font-semibold mt-6 mb-2">Bridge Tree</h4>
            {renderBridgeTree()}
          </>
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
          onClick={() => setStep(s => Math.min(advancedPatternsAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default AdvancedPatternsVisualizer;

