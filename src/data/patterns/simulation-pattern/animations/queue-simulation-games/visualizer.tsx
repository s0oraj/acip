import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, RotateCcw, ArrowRight, User } from 'lucide-react';

interface QueueState {
  queue: number[];
  processed: number;
  current: number;
}

const QueueSimulationVisualizer = ({
  data,
  activeStep,
  phase,
  onPrev,
  onNext,
  onPlay,
  onReplay
}: {
  data: number[];
  activeStep: number;
  phase: any;
  onPrev: () => void;
  onNext: () => void;
  onPlay: () => void;
  onReplay: () => void;
}) => {
  const state: QueueState = phase?.counter || { queue: data, processed: 0, current: 0 };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Queue Simulation</h3>
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
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Current Queue</h4>
              <div className="flex space-x-2">
                {state.queue.map((tickets, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center w-12 h-12 bg-white rounded-lg border border-gray-200"
                  >
                    <User className="h-4 w-4 text-gray-500" />
                    <span className="text-sm">{tickets}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2">Processing Status</h4>
              <div className="flex justify-between">
                <span>Processed Tickets: {state.processed}</span>
                <span>Current Person Wants: {state.current}</span>
              </div>
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
  );
};

export default QueueSimulationVisualizer;
