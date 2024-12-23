// src/data/patterns/counting/animations/basic-counter.ts
export const basicCounterAnimation = {
  id: "basic-counter",
  title: "Basic Counter Operations",
  description: "Understanding how to count and track element frequencies",
  steps: [
    {
      title: "Initialize Counter",
      description: "Create an empty hash map to store frequencies",
      code: "counter = {}",
      visualization: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: {},
        current: -1,
        highlight: []
      }
    },
    {
      title: "Process First Element",
      description: "Add the first element (3) to our counter",
      code: "counter[3] = 1",
      visualization: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: {"3": 1},
        current: 0,
        highlight: [0]
      }
    },
    {
      title: "Process Second Element",
      description: "Add 1 to our counter",
      code: "counter[1] = 1",
      visualization: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: {"3": 1, "1": 1},
        current: 1,
        highlight: [1]
      }
    },
    {
      title: "Process Duplicate",
      description: "We find another 1, increment its count",
      code: "counter[1] += 1",
      visualization: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: {"3": 1, "1": 2},
        current: 3,
        highlight: [1, 3]
      }
    },
    {
      title: "Final Counter",
      description: "Complete frequency count of all elements",
      code: "print(counter)  # Final frequencies",
      visualization: {
        array: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: {"1": 2, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "9": 1},
        current: 7,
        highlight: []
      }
    }
  ]
};

// src/components/animations/AnimationDialog.tsx
import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const AnimationStep = ({ step, isActive }) => {
  if (!step?.visualization) return null;
  
  return (
    <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{step.description}</p>
      
      <div className="flex space-x-4 mb-6">
        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">Array</h4>
          <div className="flex flex-wrap gap-2">
            {step.visualization.array?.map((num, idx) => (
              <div
                key={idx}
                className={`
                  w-10 h-10 flex items-center justify-center rounded-lg
                  transition-all duration-300
                  ${idx === step.visualization.current ? 'bg-purple-500 text-white transform scale-110' : 
                    step.visualization.highlight?.includes(idx) ? 'bg-purple-200 dark:bg-purple-800' :
                    'bg-white dark:bg-gray-700'}
                `}
              >
                {num}
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
          <h4 className="text-sm font-medium mb-2">Counter</h4>
          <div className="grid grid-cols-2 gap-2">
            {Object.entries(step.visualization.counter || {}).map(([key, value]) => (
              <div
                key={key}
                className="flex items-center justify-between bg-white dark:bg-gray-700 p-2 rounded"
              >
                <span>{key}:</span>
                <span className="font-mono">{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <code className="text-sm">{step.code}</code>
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

  React.useEffect(() => {
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
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalSteps]);

  if (!animation?.steps) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Play className="w-4 h-4" />
          View Animation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
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
            <Button 
              onClick={nextStep}
              variant="outline"
              size="sm"
              disabled={currentStep === totalSteps - 1}
            >
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
