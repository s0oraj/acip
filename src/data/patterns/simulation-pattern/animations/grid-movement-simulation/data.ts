import { Animation } from '@/types';
import { MoveRight, RotateCcw, Users, Route, Maximize } from 'lucide-react';

const DIRECTIONS = [
  [0, 1],   // right
  [-1, 0],  // up
  [0, -1],  // left
  [1, 0]    // down
];

const COLORS = ['#4F46E5', '#7C3AED', '#2563EB', '#DC2626'];

interface Robot {
  id: number;
  pos: number[];
  dir: number;
  path: number[][];
  color: string;
}

export const patterns = {
  basicRobot: {
    commands: ['MOVE', 'RIGHT', 'MOVE', 'MOVE', 'LEFT', 'MOVE'],
    icon: 'moveRight',
    title: "Basic Robot",
    desc: "Directional Movement",
    color: "#4F46E5"
  },
  circleRobot: {
    commands: ['MOVE', 'RIGHT', 'MOVE', 'RIGHT', 'MOVE', 'RIGHT', 'MOVE'],
    icon: 'rotateCcw',
    title: "Circle Robot",
    desc: "Pattern Detection",
    color: "#7C3AED"
  },
  multiRobot: {
    robots: [
      { commands: ['MOVE', 'RIGHT', 'MOVE'], startPos: [0, 0] },
      { commands: ['MOVE', 'LEFT', 'MOVE'], startPos: [4, 4] },
      { commands: ['RIGHT', 'MOVE', 'MOVE'], startPos: [0, 4] }
    ],
    icon: 'users',
    title: "Multi-Robot",
    desc: "Coordination",
    color: "#2563EB"
  }
};

const moveRobot = (robot: Robot, command: string): Robot => {
  const newRobot = { ...robot };
  if (command === 'MOVE') {
    newRobot.pos = [
      newRobot.pos[0] + DIRECTIONS[newRobot.dir][0],
      newRobot.pos[1] + DIRECTIONS[newRobot.dir][1]
    ];
  } else if (command === 'RIGHT') {
    newRobot.dir = (newRobot.dir + 1) % 4;
  } else if (command === 'LEFT') {
    newRobot.dir = (newRobot.dir + 3) % 4;
  }
  newRobot.path.push([...newRobot.pos]);
  return newRobot;
};

export const gridMovementAnimation: Animation = {
  id: "grid-movement",
  title: "Grid Movement Simulation",
  description: "Visualizing different types of robot movements on a grid",
  steps: [
    {
      title: "Multi-Robot Coordination",
      description: "Multiple robots moving on a grid with collision avoidance",
      array: patterns.multiRobot.robots,
      phases: Array(Math.max(...patterns.multiRobot.robots.map(r => r.commands.length)))
        .fill(null)
        .map((_, index) => ({
          description: index === 0 
            ? "Initialize robot positions" 
            : `Execute step ${index + 1}`,
          activeIndex: index,
          highlightIndices: [index],
          counter: patterns.multiRobot.robots.reduce((acc: { robots?: Robot[] }, robot, robotIndex) => {
            if (!acc.robots) {
              acc.robots = patterns.multiRobot.robots.map((r, i) => ({
                id: i,
                pos: [...r.startPos],
                dir: 0,
                path: [r.startPos],
                color: COLORS[i]
              }));
            } else if (index <= robot.commands.length) {
              acc.robots[robotIndex] = moveRobot(
                acc.robots[robotIndex],
                robot.commands[index - 1]
              );
            }
            return acc;
          }, {}),
          code: index === 0 
            ? "const robots = initializeRobots();" 
            : `moveAllRobots(${index});`
        }))
    }
  ],
  counters: []
};

// Ensure gridMovementAnimation.steps is always an array
if (!Array.isArray(gridMovementAnimation.steps)) {
  gridMovementAnimation.steps = [];
}

// Validate each step
gridMovementAnimation.steps = gridMovementAnimation.steps.filter(step => 
  step && typeof step === 'object' && Array.isArray(step.phases)
);

// If all steps were invalid, provide a default step
if (gridMovementAnimation.steps.length === 0) {
  gridMovementAnimation.steps = [{
    title: "Default Step",
    description: "No valid steps found",
    array: [],
    phases: []
  }];
}

export default gridMovementAnimation;
