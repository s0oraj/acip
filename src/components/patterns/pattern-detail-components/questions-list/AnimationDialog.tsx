import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play } from 'lucide-react';



const AnimationStep = ({ step, isActive }) => {
  const [elements, setElements] = useState(step.visualization.elements);
  const [counter, setCounter] = useState({});
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    if (!isActive) {
      setCurrentIndex(-1);
      setCounter({});
      return;
    }

    const timer = setInterval(() => {
      setCurrentIndex(prev => {
        if (prev < elements.length - 1) {
          const newIndex = prev + 1;
          if (step.visualization.counter) {
            const num = elements[newIndex];
            setCounter(prevCounter => ({
              ...prevCounter,
              [num]: (prevCounter[num] || 0) + 1
            }));
          }
          return newIndex;
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive, elements]);

  return (
    <div className="space-y-4">
      <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
      <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
        <code className="text-sm text-gray-800 dark:text-gray-200">{step.code}</code>
      </pre>
      <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="flex flex-wrap gap-2">
          {elements.map((el, idx) => (
            <span 
              key={idx}
              className={`px-3 py-1 rounded transition-colors duration-300 ${
                idx <= currentIndex 
                  ? 'bg-purple-200 dark:bg-purple-800' 
                  : 'bg-white dark:bg-gray-700'
              }`}
            >
              {el}
            </span>
          ))}
        </div>
        {Object.keys(counter).length > 0 && (
          <div className="mt-4 p-2 bg-white dark:bg-gray-700 rounded">
            <div className="flex flex-wrap gap-3">
              {Object.entries(counter).map(([key, value]) => (
                <span key={key} className="text-sm animate-fade-in">
                  {key}: {value}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const AnimationDialog = ({ animation }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Play className="w-4 h-4" />
          View Animation
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{animation.title}</DialogTitle>
        </DialogHeader>
        <div className="space-y-8 mt-4">
          {animation.steps.map((step, index) => (
            <AnimationStep 
              key={index} 
              step={step} 
              isActive={index === currentStepIndex} 
            />
          ))}
          <div className="flex justify-between mt-4">
            <Button 
              onClick={() => setCurrentStepIndex(prev => Math.max(0, prev - 1))}
              disabled={currentStepIndex === 0}
            >
              Previous
            </Button>
            <Button 
              onClick={() => setCurrentStepIndex(prev => Math.min(animation.steps.length - 1, prev + 1))}
              disabled={currentStepIndex === animation.steps.length - 1}
            >
              Next
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AnimationDialog;
