import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ARRAY_CELL_SIZE = 40;
const ARRAY_CELL_GAP = 10;
const COUNTER_BAR_WIDTH = 30;
const COUNTER_BAR_GAP = 15;

const AnimatedCell = ({ value, x, y, isActive, isHighlighted, onComplete }) => {
  const [position, setPosition] = useState({ x, y });
  const [scale, setScale] = useState(1);

  useEffect(() => {
    if (isActive) {
      setScale(1.1);
      setTimeout(() => {
        setScale(1);
        onComplete?.();
      }, 500);
    }
  }, [isActive]);

  return (
    <g
      transform={`translate(${position.x}, ${position.y}) scale(${scale})`}
      className="transition-all duration-300"
    >
      <rect
        width={ARRAY_CELL_SIZE}
        height={ARRAY_CELL_SIZE}
        rx="4"
        fill={isHighlighted ? "#8b5cf6" : "#6b7280"}
        className="transition-colors duration-300"
      />
      <text
        x={ARRAY_CELL_SIZE / 2}
        y={ARRAY_CELL_SIZE / 2 + 6}
        textAnchor="middle"
        fill="white"
        fontSize="16"
      >
        {value}
      </text>
    </g>
  );
};

const CounterBar = ({ value, label, x, height, isActive }) => {
  const [currentHeight, setCurrentHeight] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentHeight(height);
    }, 100);
  }, [height]);

  return (
    <g transform={`translate(${x}, 0)`}>
      <rect
        y={150 - currentHeight}
        width={COUNTER_BAR_WIDTH}
        height={currentHeight}
        fill={isActive ? "#8b5cf6" : "#6b7280"}
        rx="4"
        className="transition-all duration-500"
      />
      <text
        x={COUNTER_BAR_WIDTH / 2}
        y="170"
        textAnchor="middle"
        fill="currentColor"
        fontSize="14"
      >
        {label}:{value}
      </text>
    </g>
  );
};

const AnimationStep = ({ step, isActive }) => {
  const [currentElement, setCurrentElement] = useState(0);
  const [animationPhase, setAnimationPhase] = useState(0);

  useEffect(() => {
    if (isActive && animationPhase < step.phases.length) {
      const timer = setTimeout(() => {
        setAnimationPhase(prev => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isActive, animationPhase]);

  const phase = step.phases[Math.min(animationPhase, step.phases.length - 1)];

  return (
    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{phase?.description || step.description}</p>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6">
        <svg viewBox="0 0 600 200" className="w-full">
          {/* Input Array */}
          {step.array.map((num, idx) => (
            <AnimatedCell
              key={idx}
              value={num}
              x={50 + idx * (ARRAY_CELL_SIZE + ARRAY_CELL_GAP)}
              y={20}
              isActive={idx === phase?.activeIndex}
              isHighlighted={phase?.highlightIndices?.includes(idx)}
            />
          ))}

          {/* Counter Visualization */}
          {Object.entries(phase?.counter || {}).map(([key, value], idx) => (
            <CounterBar
              key={key}
              value={value}
              label={key}
              x={50 + idx * (COUNTER_BAR_WIDTH + COUNTER_BAR_GAP)}
              height={value * 30}
              isActive={key === String(step.array[phase?.activeIndex])}
            />
          ))}

          {/* Arrow indicating current element */}
          {phase?.activeIndex !== undefined && (
            <path
              d={`M${50 + phase.activeIndex * (ARRAY_CELL_SIZE + ARRAY_CELL_GAP) + ARRAY_CELL_SIZE/2},70 V90`}
              stroke="#8b5cf6"
              strokeWidth="2"
              markerEnd="url(#arrowhead)"
            />
          )}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#8b5cf6" />
            </marker>
          </defs>
        </svg>
      </div>

      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <code className="text-sm">{phase?.code || step.code}</code>
      </pre>
    </div>
  );
};

export const AnimationDialog = ({ animation }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const totalSteps = animation?.steps?.length || 0;

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, totalSteps - 1));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 0));
  const reset = () => setCurrentStep(0);

  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev === totalSteps - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  if (!animation?.steps) return null;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Play className="w-4 h-4" />
          View Animation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle>{animation.title}</DialogTitle>
        </DialogHeader>
        
        <div className="mt-4">
          {animation.steps.map((step, idx) => (
            <AnimationStep 
              key={idx}
              step={step}
              isActive={idx === currentStep}
            />
          ))}
          
          <div className="flex items-center justify-center gap-4 mt-6">
            <Button onClick={reset} variant="outline" size="sm">
              <SkipBack className="w-4 h-4" />
            </Button>
            <Button onClick={prevStep} variant="outline" size="sm" disabled={currentStep === 0}>
              Previous
            </Button>
            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              variant="outline" 
              size="sm"
              className="w-24"
            >
              {isPlaying ? (
                <><Pause className="w-4 h-4 mr-2" /> Pause</>
              ) : (
                <><Play className="w-4 h-4 mr-2" /> Play</>
              )}
            </Button>
            <Button onClick={nextStep} variant="outline" size="sm" disabled={currentStep === totalSteps - 1}>
              Next
            </Button>
            <Button onClick={() => setCurrentStep(totalSteps - 1)} variant="outline" size="sm">
              <SkipForward className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
