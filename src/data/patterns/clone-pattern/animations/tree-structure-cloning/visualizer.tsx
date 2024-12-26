import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { treeStructureCloningAnimation } from './data';

const fadeIn = {
  opacity: 0,
  animation: 'fadeIn 0.5s ease-out forwards',
};

const styles = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const TreeStructureCloningVisualizer: React.FC = () => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setTimeout(() => {
        if (step < treeStructureCloningAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderTree = (node: any, isClone: boolean = false, depth: number = 0) => {
    const color = isClone ? 'bg-green-500' : 'bg-blue-500';
    return (
      <div
        className="flex flex-col items-center" style={{...fadeIn, animationDelay: `${depth * 200}ms`}}
      >
        <div className={`${color} text-white p-2 rounded-full mb-2`}>
          {node.value}
          {node.random !== undefined && <div className="text-xs">R: {node.random}</div>}
          {node.locked !== undefined && <div className="text-xs">{node.locked ? '🔒' : '🔓'}</div>}
        </div>
        {node.children ? (
          <div className="flex space-x-4">
            {node.children.map((child: any, index: number) => (
              <div key={index}>{renderTree(child, isClone, depth + 1)}</div>
            ))}
          </div>
        ) : (
          node.left || node.right ? (
            <div className="flex space-x-4">
              {node.left && <div>{renderTree(node.left, isClone, depth + 1)}</div>}
              {node.right && <div>{renderTree(node.right, isClone, depth + 1)}</div>}
            </div>
          ) : null
        )}
      </div>
    );
  };

  const renderVisualization = () => {
    const { visualizationData } = treeStructureCloningAnimation.steps[step];
    return (
      <div className="flex justify-around items-start h-96 overflow-auto">
        <div>
          <h4 className="text-center mb-2 font-semibold">Original Tree</h4>
          {renderTree(visualizationData.originalTree)}
        </div>
        <div>
          <h4 className="text-center mb-2 font-semibold">Cloned Tree</h4>
          {renderTree(visualizationData.originalTree, true)}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{treeStructureCloningAnimation.title}</h2>
        <p className="text-gray-600">{treeStructureCloningAnimation.description}</p>
      </div>
      
      <div className="mb-4">
        <div className="flex space-x-2">
          {treeStructureCloningAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{treeStructureCloningAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{treeStructureCloningAnimation.steps[step].description}</p>
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
          onClick={() => setStep(s => Math.min(treeStructureCloningAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default TreeStructureCloningVisualizer;

