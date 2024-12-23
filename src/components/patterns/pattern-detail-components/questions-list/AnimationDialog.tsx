import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AnimationStep = ({ step, isActive, currentIndex }) => {
  if (!step?.visualization) return null;
  const [animationState, setAnimationState] = useState(0);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        setAnimationState(prev => (prev + 1) % 4);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive]);

  const getElementColor = (idx, value) => {
    if (step.visualization.highlightValue === value) return "#9333ea";
    if (step.visualization.highlightIndices?.includes(idx)) return "#a855f7";
    return "#6b7280";
  };

  return (
    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <h3 className="text-lg font-semibold mb-2">{step.description}</h3>
      
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 relative h-64">
          <svg viewBox="0 0 400 200" className="w-full h-full">
            {/* Array Elements */}
            {step.visualization.elements?.map((num, idx) => {
              const x = 50 + (idx * 40);
              const y = 50;
              const color = getElementColor(idx, num);
              
              return (
                <g key={idx} className="transition-all duration-300">
                  <rect
                    x={x}
                    y={y}
                    width="30"
                    height="30"
                    rx="4"
                    fill={color}
                    className={`transform ${
                      animationState === idx % 4 ? 'scale-110' : 'scale-100'
                    } transition-transform duration-300`}
                  />
                  <text
                    x={x + 15}
                    y={y + 20}
                    textAnchor="middle"
                    fill="white"
                    fontSize="14"
                  >
                    {num}
                  </text>
                </g>
              );
            })}

            {/* Counter Visualization */}
            {step.visualization.counter && (
              <g transform="translate(50, 120)">
                {Object.entries(step.visualization.counter).map(([key, value], idx) => {
                  const x = idx * 50;
                  return (
                    <g key={key} className="transition-all duration-300">
                      <rect
                        x={x}
                        y="0"
                        width="40"
                        height={20 + value * 15}
                        fill="#818cf8"
                        opacity="0.8"
                        rx="4"
                      />
                      <text
                        x={x + 20}
                        y="15"
                        textAnchor="middle"
                        fill="white"
                        fontSize="12"
                      >
                        {key}:{value}
                      </text>
                    </g>
                  );
                })}
              </g>
            )}
          </svg>
        </div>
      </div>

      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto">
        <code className="text-sm whitespace-pre">{step.code}</code>
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
              currentIndex={currentStep}
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
