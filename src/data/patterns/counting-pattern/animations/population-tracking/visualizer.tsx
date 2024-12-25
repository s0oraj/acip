import React, { useState, useEffect, useRef } from 'react';
import { steps, GRID_ROWS, GRID_COLS, PopulationTrackingStep } from './data';

type AnimationStep = PopulationTrackingStep;

const useAnimationFrame = (callback: () => void) => {
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();

  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      const deltaTime = time - previousTimeRef.current;
      callback();
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(requestRef.current!);
  }, []);
};

const PopulationTrackingVisualizer: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [gridData, setGridData] = useState(steps[0].gridState);
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationSpeed, setAnimationSpeed] = useState(1000);

  useAnimationFrame(() => {
    if (isAnimating) {
      setCurrentStep((prevStep) => {
        const nextStep = (prevStep + 1) % steps.length;
        setGridData(steps[nextStep].gridState);
        return nextStep;
      });
    }
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isAnimating) {
      timer = setTimeout(() => {
        setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
      }, animationSpeed);
    }
    return () => clearTimeout(timer);
  }, [currentStep, isAnimating, animationSpeed]);

  const toggleAnimation = () => {
    setIsAnimating(!isAnimating);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-5 gap-1 mb-4">
        {gridData.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="w-10 h-10 flex items-center justify-center border border-gray-300"
              style={{
                backgroundColor: `rgba(0, 128, 0, ${cell / 10})`,
              }}
            >
              {cell}
            </div>
          ))
        )}
      </div>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded"
          onClick={toggleAnimation}
        >
          {isAnimating ? 'Pause' : 'Start'} Animation
        </button>
      </div>
      <div className="w-full max-w-md">
        <pre className="bg-gray-100 p-4 rounded">
          <code>{steps[currentStep].code}</code>
        </pre>
      </div>
      <p className="mt-4">{steps[currentStep].description}</p>
    </div>
  );
};

export default PopulationTrackingVisualizer;

