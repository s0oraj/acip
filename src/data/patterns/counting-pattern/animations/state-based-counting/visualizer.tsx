import React, { useState, useEffect } from 'react';
import { steps, StatePattern } from './data';

const StateBasedCountingVisualizer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed] = useState(1500);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      timer = setInterval(() => {
        setCurrentStep((prev) => (prev + 1) % steps.length);
      }, animationSpeed);
    }
    return () => clearInterval(timer);
  }, [isAnimating, animationSpeed]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  const currentStepData = steps[currentStep];

  return (
    <div className="flex flex-col items-center space-y-6 p-4">
      <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
        {currentStepData.statePatterns.map((pattern: StatePattern) => (
          <div
            key={pattern.id}
            className={`p-4 rounded-lg border-2 ${
              pattern.state === currentStepData.currentState
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-200'
            }`}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold">{pattern.state}</h3>
              <span className="px-2 py-1 bg-gray-100 rounded">
                Count: {pattern.count}
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Transitions: {pattern.transitions.join(', ')}
            </div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-2xl">
        <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto">
          <code>{currentStepData.code}</code>
        </pre>
      </div>

      <div className="flex gap-4">
        <button
          onClick={toggleAnimation}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {isAnimating ? 'Pause' : 'Start'} Animation
        </button>
      </div>

      <p className="text-gray-700">{currentStepData.description}</p>
    </div>
  );
};

export default StateBasedCountingVisualizer;
