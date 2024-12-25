import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, RotateCcw, ArrowRight, Calendar } from 'lucide-react';

interface Event {
  id: number;
  start: number;
  end: number;
  type: string;
}

interface EventState {
  timeline: number[];
  activeEvents: Event[];
  processedEvents: Event[];
  conflicts: number[][];
  currentTime: number;
}

const EventProcessingVisualizer = ({
  data,
  activeStep,
  phase,
  onPrev,
  onNext,
  onPlay,
  onReplay
}: {
  data: Event[];
  activeStep: number;
  phase: any;
  onPrev: () => void;
  onNext: () => void;
  onPlay: () => void;
  onReplay: () => void;
}) => {
  const state: EventState = phase?.counter || {
    timeline: Array(24).fill(0),
    activeEvents: [],
    processedEvents: [],
    conflicts: [],
    currentTime: 0
  };

  const timeColors = {
    empty: 'bg-gray-100',
    active: 'bg-blue-500',
    conflict: 'bg-red-500'
  };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Event Processing Timeline</h3>
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
              disabled={activeStep === 23}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Timeline visualization */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex">
              {state.timeline.map((value, hour) => (
                <div
                  key={hour}
                  className="flex-1"
                >
                  <div className="text-xs text-center mb-1">{hour}:00</div>
                  <div 
                    className={`
                      h-8 border-r border-gray-200
                      transition-colors duration-300
                      ${hour === state.currentTime ? 'bg-yellow-200' : 
                        value ? 'bg-blue-500' : 'bg-gray-100'}
                    `}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Active Events */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Active Events</h4>
            <div className="flex flex-wrap gap-2">
              {state.activeEvents.map(event => (
                <div
                  key={event.id}
                  className="flex items-center space-x-2 bg-blue-100 p-2 rounded"
                >
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span>{event.type}</span>
                  <span className="text-sm text-gray-500">
                    ({event.start}:00 - {event.end}:00)
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Conflicts */}
          {state.conflicts.length > 0 && (
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium mb-2 text-red-700">Conflicts Detected</h4>
              <div className="space-y-1">
                {state.conflicts.map((conflict, idx) => (
                  <div key={idx} className="text-sm text-red-600">
                    Event {conflict[0]} conflicts with Event {conflict[1]}
                  </div>
                ))}
              </div>
            </div>
          )}

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

export default EventProcessingVisualizer;
