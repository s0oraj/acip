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
      if (visualizationData.restrictedNodes?.includes(nodeId)) return 'red';
      if (visualizationData.reachableNodes?.includes(nodeId)) return 'lightgreen';
      if (visualizationData.optimizedPath?.includes(nodeId)) return 'lightgreen';
      return 'lightblue';
    };

    const getEdgeColor = (edge: any) => {
      if (edge.type === 'critical') return 'red';
      if (edge.type === 'pseudo-critical') return 'orange';
      if (edge.type === 'non-critical') return 'gray';
      if (visualizationData.optimizedPath?.includes(edge.source) && visualizationData.optimizedPath?.includes(edge.target)) return 'green';
      return 'black';
    };

    return (
      <svg width={width} height={height}>
        {visualizationData.edges.map((edge, index) => {
          const start = nodePositions[edge.source];
          const end = nodePositions[edge.target];

          return (
            <g key={`edge-${index}`}>
              <line
                x1={start.x}
                y1={start.y}
                x2={end.x}
                y2={end.y}
                stroke={getEdgeColor(edge)}
                strokeWidth={2}
              />
              {edge.weight !== undefined && (
                <text
                  x={(start.x + end.x) / 2}
                  y={(start.y + end.y) / 2}
                  textAnchor="middle"
                  dominantBaseline="central"
                  fill={getEdgeColor(edge)}
                  fontSize="12"
                >
                  {edge.weight}
                </text>
              )}
            </g>
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
              {node.layer !== undefined && ` (L${node.layer})`}
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
          className="w-12 h-12 rounded-full flex items-


