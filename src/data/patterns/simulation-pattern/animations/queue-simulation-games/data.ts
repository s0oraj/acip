import { Animation } from '@/types';
import { Users, ArrowLeftRight, Circle, RotateCcw, List } from 'lucide-react';

export const patterns = {
  simpleQueue: {
    data: [3, 2, 4, 1, 5],
    target: 3,
    icon: 'users',
    title: "Ticket Queue",
    desc: "Simple Processing",
    color: "#4F46E5"
  },
  matchingQueue: {
    students: [1, 1, 0, 0, 1],
    sandwiches: [1, 0, 0, 1, 1],
    icon: 'arrowLeftRight',
    title: "Lunch Queue",
    desc: "Student-Sandwich Matching",
    color: "#7C3AED"
  },
  circularQueue: {
    players: ['A', 'B', 'C', 'D', 'E'],
    k: 2,
    icon: 'circle',
    title: "Circular Game",
    desc: "Josephus Problem",
    color: "#2563EB"
  }
};

const processMatchingQueue = (
  students: number[],
  sandwiches: number[],
  step: number
) => {
  const state = {
    students: [...students],
    sandwiches: [...sandwiches],
    matched: [],
    rotations: 0,
    stuck: false
  };

  for (let i = 0; i < step && state.students.length > 0; i++) {
    if (state.students[0] === state.sandwiches[0]) {
      state.matched.push({
        student: state.students.shift()!,
        sandwich: state.sandwiches.shift()!,
        success: true
      });
    } else {
      state.students.push(state.students.shift()!);
      state.rotations++;
      if (state.rotations > state.students.length) {
        state.stuck = true;
        break;
      }
    }
  }

  return state;
};

export const queueSimulationAnimation: Animation = {
  id: "queue-simulation",
  title: "Queue Matching Simulation",
  description: "Visualizing queue matching scenarios",
  steps: [
    {
      title: "Student-Sandwich Matching",
      description: "Match students with their preferred sandwiches",
      array: patterns.matchingQueue.students,
      phases: Array(10).fill(null).map((_, index) => ({
        description: index === 0 
          ? "Initialize queues" 
          : `Processing step ${index}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: processMatchingQueue(
          patterns.matchingQueue.students,
          patterns.matchingQueue.sandwiches,
          index
        ),
        code: index === 0 
          ? "const state = initializeQueues();" 
          : `processStep(${index});`
      }))
    }
  ],
  counters: []
};
