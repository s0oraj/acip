// src/data/patterns/simulation-pattern/animations/grid-movement-simulation/data.ts
import { Animation } from '@/types';

export const patterns = {
  basicRobot: {
    data: ['R', 'F', 'L', 'F', 'R'],
    icon: 'robot',
    title: "Basic Robot Movement",
    desc: "Simple directional movement on grid",
    color: "#4F46E5",
    startPos: [0, 0],
    dirs: [[0,1], [1,0], [0,-1], [-1,0]] // N,E,S,W
  },
  robotCircle: {
    data: ['R', 'F', 'R', 'F', 'R', 'F', 'R', 'F'],
    icon: 'cycle',
    title: "Robot Circle Pattern",
    desc: "Detect cyclic movement patterns",
    color: "#7C3AED",
    startPos: [0, 0]
  }
};

export const gridMovementAnimation: Animation = {
  id: "grid-movement-simulation",
  title: "Grid Movement Simulation",
  description: "Simulate robot movements on 2D grid",
  steps: [
    {
      title: "Basic Robot Movement",
      description: "Move robot using directional commands",
      array: patterns.basicRobot.data,
      phases: patterns.basicRobot.data.map((cmd, idx) => ({
        description: `Command ${cmd} at step ${idx+1}`,
        counter: {
          pos: calculatePosition(patterns.basicRobot.data.slice(0, idx+1)),
          dir: idx % 4
        },
        code: cmd === 'R' ? "dir = (dir + 1) % 4" :
               cmd === 'L' ? "dir = (dir + 3) % 4" :
               `x += ${patterns.basicRobot.dirs[0][0]}; y += ${patterns.basicRobot.dirs[0][1]}`
      }))
    },
    {
      title: "Robot Circle Pattern",
      description: "Detect cyclic movement patterns",
      array: patterns.robotCircle.data,
      phases: patterns.robotCircle.data.map((cmd, idx) => ({
        description: `Command ${cmd} at step ${idx+1}`,
        counter: {
          pos: calculatePosition(patterns.robotCircle.data.slice(0, idx+1)),
          dir: idx % 4
        },
        code: cmd === 'R' ? "dir = (dir + 1) % 4" :
               cmd === 'L' ? "dir = (dir + 3) % 4" :
               `x += ${patterns.basicRobot.dirs[0][0]}; y += ${patterns.basicRobot.dirs[0][1]}`
      }))
    }
  ]
};

function calculatePosition(commands: string[]): [number, number] {
  let x = 0, y = 0, dir = 0;
  const dirs = patterns.basicRobot.dirs;
  for (const cmd of commands) {
    if (cmd === 'R') dir = (dir + 1) % 4;
    else if (cmd === 'L') dir = (dir + 3) % 4;
    else {
      x += dirs[dir][0];
      y += dirs[dir][1];
    }
  }
  return [x, y];
}
