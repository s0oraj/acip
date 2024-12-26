import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Play, RotateCcw, ArrowRight, ChevronUp, ChevronRight, ChevronDown, ChevronLeft } from 'lucide-react';

const GRID_SIZE = 5;
const CELL_SIZE = 50;

interface Robot {
  id: number;
  pos: number[];
  dir: number;
  path: number[][];
  color: string;
}

interface RobotState {
  robots: Robot[];
}

const DirectionArrow = ({ dir, color }: { dir: number, color: string }) => {
  const arrows = [
    <ChevronRight key="right" className="w-4 h-4" style={{ color }} />,
    <ChevronUp key="up" className="w-4 h-4" style={{ color }} />,
    <ChevronLeft key="left" className="w-4 h-4" style={{ color }} />,
    <ChevronDown key="down" className="w-4 h-4" style={{ color }} />
  ];
  return arrows[dir] || null;
};

const GridMovementVisualizer = ({
  data,
  activeStep,
  phase,
  onPrev,
  onNext,
  onPlay,
  onReplay
}: {
  data: any[];
  activeStep: number;
  phase: { counter: RobotState; code?: string } | null;
  onPrev: () => void;
  onNext: () => void;
  onPlay: () => void;
  onReplay: () => void;
}) => {
  const state: RobotState = phase?.counter || { robots: [] };

  const renderGrid = () => {
    const cells = [];
    for (let i = 0; i < GRID_SIZE; i++) {
      for (let j = 0; j < GRID_SIZE; j++) {
        const robotsHere = state.robots.filter(robot => 
          robot.pos[0] === i && robot.pos[1] === j
        );
        
        const pathRobots = state.robots.filter(robot =>
          robot.path.some(([x, y]) => x === i && y === j)
        );

        cells.push(
          <div
            key={`${i}-${j}`}
            className="absolute border border-gray-200 flex items-center justify-center"
            style={{
              width: CELL_SIZE,
              height: CELL_SIZE,
              left: j * CELL_SIZE,
              top: i * CELL_SIZE,
              transition: 'all 0.3s ease-in-out',
              backgroundColor: robotsHere.length 
                ? robotsHere[0].color 
                : pathRobots.length 
                  ? `${pathRobots[0].color}33`
                  : 'white'
            }}
          >
            {robotsHere.map(robot => (
              <div key={robot.id} className="absolute">
                <DirectionArrow dir={robot.dir} color="white" />
              </div>
            ))}
          </div>
        );
      }
    }
    return cells;
  };

  return (
    <div className="w-full space-y-4">
      <Card className="p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Multi-Robot Grid Movement</h3>
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
              disabled={!data || activeStep === data.length - 1}
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <div 
            className="relative bg-gray-50 p-4 rounded-lg"
            style={{ 
              width: GRID_SIZE * CELL_SIZE + 32, 
              height: GRID_SIZE * CELL_SIZE + 32 
            }}
          >
            {renderGrid()}
          </div>

          <div className="flex space-x-4">
            {state.robots.map(robot => (
              <div
                key={robot.id}
                className="bg-gray-50 p-2 rounded-lg flex items-center space-x-2"
              >
                <div 
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: robot.color }}
                />
                <span>Robot {robot.id + 1}</span>
              </div>
            ))}
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

export default GridMovementVisualizer;

