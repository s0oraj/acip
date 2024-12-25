import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Terminal, ArrowLeft, Play, RotateCcw, ArrowRight } from 'lucide-react';

interface State {
  history: string[];
  current: number;
}

const StateMachineVisualizer = ({
  data,
  activeStep,
  phase,
  onPrev,
  onNext,
  onPlay,
  onReplay
}: {
  data: any;
  activeStep: number;
  phase: any;
  onPrev: () => void;
  onNext: () => void;
  onPlay: () => void;
  onReplay: () => void;
}) => {
  const state: State = phase?.counter || { history: [], current: -1 };

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col space-y-4">
        <Card className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">State Machine Visualization</h3>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                onClick={onPrev}
                disabled={activeStep === 0}
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={onPlay}
              >
                <Play className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={onReplay}
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={onNext}
                disabled={activeStep === data.length - 1}
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Terminal className="h-5 w-5 text-blue-500" />
              <span className="font-medium">Current Command:</span>
              <code className="bg-gray-100 px-2 py-1 rounded">
                {data[activeStep] || 'Initial State'}
              </code>
            </div>

            <div className="border rounded-lg p-4">
              <h4 className="font-medium mb-2">History Stack:</h4>
              <div className="space-y-2">
                {state.history.map((url, idx) => (
                  <div
                    key={idx}
                    className={`p-2 rounded ${
                      idx === state.current
                        ? 'bg-blue-100 border border-blue-300'
                        : 'bg-gray-50'
                    }`}
                  >
                    {url}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4">
              <pre className="bg-gray-50 p-4 rounded-lg overflow-x-auto">
                <code>{phase?.code || '// Initial state'}</code>
              </pre>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StateMachineVisualizer;
