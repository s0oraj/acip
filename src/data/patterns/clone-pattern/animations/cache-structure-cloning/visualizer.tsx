import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { cacheStructureCloningAnimation } from './data';

const styles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
  }
`;

const CacheStructureCloningVisualizer: React.FC = () => {
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
        if (step < cacheStructureCloningAnimation.steps.length - 1) {
          setStep(s => s + 1);
        } else {
          setIsPlaying(false);
        }
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [isPlaying, step]);

  const renderCache = (isClone: boolean = false) => {
    const { visualizationData } = cacheStructureCloningAnimation.steps[step];
    const color = isClone ? 'bg-green-500' : 'bg-blue-500';

    switch (step) {
      case 0: // LRU Cache
      case 1: // LFU Cache
        return (
          <div className="flex flex-col items-center">
            <div className="mb-2">Capacity: {visualizationData.capacity}</div>
            {visualizationData.cache.map((item, index) => (
              <div
                key={`${isClone ? 'clone-' : ''}cache-${index}`}
                className={`${color} text-white p-2 m-1 w-64 text-center`}
                style={{animation: `fadeInUp 0.5s ${index * 0.1}s forwards`}}
              >
                {item.key}: {item.value}
                {item.frequency !== undefined && ` (Freq: ${item.frequency})`}
              </div>
            ))}
          </div>
        );
      case 2: // Two-Level Cache
        return (
          <div className="flex flex-col items-center">
            <h5 className="font-semibold mb-2">L1 Cache</h5>
            {visualizationData.l1Cache.map((item, index) => (
              <div
                key={`${isClone ? 'clone-' : ''}l1-${index}`}
                className={`${color} text-white p-2 m-1 w-32 text-center`}
                style={{animation: `fadeInLeft 0.5s ${index * 0.1}s forwards`}}
              >
                {item.key}: {item.value}
              </div>
            ))}
            <h5 className="font-semibold mt-4 mb-2">L2 Cache</h5>
            {visualizationData.l2Cache.map((item, index) => (
              <div
                key={`${isClone ? 'clone-' : ''}l2-${index}`}
                className={`${color} text-white p-2 m-1 w-32 text-center`}
                style={{animation: `fadeInLeft 0.5s ${index * 0.1}s forwards`}}
              >
                {item.key}: {item.value}
              </div>
            ))}
          </div>
        );
      case 3: // Distributed Cache
        return (
          <div className="flex flex-wrap justify-center">
            {visualizationData.shards.map((shard, shardIndex) => (
              <div key={`${isClone ? 'clone-' : ''}shard-${shardIndex}`} className="m-2">
                <h5 className="font-semibold mb-2">{shard.id}</h5>
                {shard.data.map((item, itemIndex) => (
                  <div
                    key={`${isClone ? 'clone-' : ''}shard-${shardIndex}-item-${itemIndex}`}
                    className={`${color} text-white p-2 m-1 w-32 text-center`}
                    style={{animation: `scaleIn 0.5s ${itemIndex * 0.1}s forwards`}}
                  >
                    {item.key}: {item.value}
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">{cacheStructureCloningAnimation.title}</h2>
        <p className="text-gray-600">{cacheStructureCloningAnimation.description}</p>
      </div>

      <div className="mb-4">
        <div className="flex space-x-2">
          {cacheStructureCloningAnimation.steps.map((s, index) => (
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
        <h3 className="text-xl font-semibold mb-4">{cacheStructureCloningAnimation.steps[step].title}</h3>
        <p className="text-gray-600 mb-4">{cacheStructureCloningAnimation.steps[step].description}</p>
        <div className="flex justify-around">
          <div>
            <h4 className="text-center mb-2 font-semibold">Original Cache</h4>
            {renderCache()}
          </div>
          <div>
            <h4 className="text-center mb-2 font-semibold">Cloned Cache</h4>
            {renderCache(true)}
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
          onClick={() => setStep(s => Math.min(cacheStructureCloningAnimation.steps.length - 1, s + 1))}
          className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-200 hover:bg-gray-300 text-gray-700 transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default CacheStructureCloningVisualizer;

