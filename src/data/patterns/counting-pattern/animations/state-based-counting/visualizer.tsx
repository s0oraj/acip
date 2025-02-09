import React, { useState } from 'react';

interface Step {
  description: string;
  code: string;
  highlightedLines: number[];
  currentState: string;
  statePatterns: { id: number; state: string; count: number; transitions: string[] }[];
}

interface VisualizerProps {
  steps: Step[];
}

const Visualizer: React.FC<VisualizerProps> = ({ steps }) => {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const currentStep = steps[currentStepIndex];

  const handleNext = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{currentStep.description}</h2>
      <pre className="bg-black text-white p-2 rounded-md overflow-auto">
        {currentStep.code.split('\n').map((line, index) => (
          <div
            key={index}
            className={currentStep.highlightedLines.includes(index + 1) ? 'bg-yellow-400 text-black' : ''}
          >
            {line}
          </div>
        ))}
      </pre>
      <div className="my-4">
        <p className="font-semibold">Current State: {currentStep.currentState}</p>
        <ul className="list-disc pl-4">
          {currentStep.statePatterns.map((pattern) => (
            <li key={pattern.id}>
              {pattern.state} - Count: {pattern.count}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-2">
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
          disabled={currentStepIndex === 0}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
          disabled={currentStepIndex === steps.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Visualizer;
