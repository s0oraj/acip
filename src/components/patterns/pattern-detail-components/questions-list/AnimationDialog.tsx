import React from 'react';
import { Play } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const AnimationStep = ({ step }) => (
  <div className="space-y-4">
    <p className="text-gray-700 dark:text-gray-300">{step.description}</p>
    <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
      <code className="text-sm text-gray-800 dark:text-gray-200">{step.code}</code>
    </pre>
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
      {step.visualization.elements.map((el, idx) => (
        <span 
          key={idx}
          className={`inline-block px-3 py-1 m-1 rounded ${
            step.visualization.highlightIndices.includes(idx) 
              ? 'bg-purple-200 dark:bg-purple-800' 
              : 'bg-white dark:bg-gray-700'
          }`}
        >
          {el}
        </span>
      ))}
      {step.visualization.counter && (
        <div className="mt-4 p-2 bg-white dark:bg-gray-700 rounded">
          {Object.entries(step.visualization.counter).map(([key, value]) => (
            <span key={key} className="mr-3">
              {key}: {value}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

export const AnimationDialog = ({ animation }) => {
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
        <div className="space-y-8 mt-4">
          {animation.steps.map((step, index) => (
            <AnimationStep key={index} step={step} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};
