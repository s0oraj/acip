import { AnimationData } from '../types';
import StateBasedCountingVisualizer from './visualizer';

export interface StatePattern {
  id: number;
  state: string;
  count: number;
  transitions: string[];
}

export const statePatterns: StatePattern[] = [
  {
    id: 1,
    state: 'Initial',
    count: 0,
    transitions: ['Processing']
  },
  {
    id: 2,
    state: 'Processing',
    count: 0,
    transitions: ['Success', 'Error']
  },
  {
    id: 3,
    state: 'Success',
    count: 0,
    transitions: ['Initial']
  },
  {
    id: 4,
    state: 'Error',
    count: 0,
    transitions: ['Initial']
  }
];

export interface StateBasedCountingStep {
  description: string;
  code: string;
  highlightedLines: number[];
  currentState: string;
  statePatterns: StatePattern[];
}

export const steps: StateBasedCountingStep[] = [
  {
    description: "Initialize state patterns with counts",
    code: `states = {
  'Initial': { count: 0, transitions: ['Processing'] },
  'Processing': { count: 0, transitions: ['Success', 'Error'] },
  'Success': { count: 0, transitions: ['Initial'] },
  'Error': { count: 0, transitions: ['Initial'] }
}`,
    highlightedLines: [1, 2, 3, 4, 5],
    currentState: 'Initial',
    statePatterns: statePatterns.map(pattern => ({ ...pattern }))
  },
  {
    description: "Transition to Processing state and increment count",
    code: `current_state = 'Processing'
states['Processing'].count += 1`,
    highlightedLines: [1, 2],
    currentState: 'Processing',
    statePatterns: statePatterns.map(pattern => ({
      ...pattern,
      count: pattern.state === 'Processing' ? 1 : 0
    }))
  },
  {
    description: "Transition to Success state and increment count",
    code: `current_state = 'Success'
states['Success'].count += 1`,
    highlightedLines: [1, 2],
    currentState: 'Success',
    statePatterns: statePatterns.map(pattern => ({
      ...pattern,
      count: pattern.state === 'Success' ? 1 : pattern.state === 'Processing' ? 1 : 0
    }))
  },
  {
    description: "Return to Initial state",
    code: `current_state = 'Initial'
# Counts persist across state transitions`,
    highlightedLines: [1, 2],
    currentState: 'Initial',
    statePatterns: statePatterns.map(pattern => ({
      ...pattern,
      count: pattern.state === 'Success' ? 1 : pattern.state === 'Processing' ? 1 : 0
    }))
  }
];

export const stateBasedCountingAnimation: AnimationData = {
  name: 'State-Based Counting',
  description: 'Visualize state transitions and counting',
  component: StateBasedCountingVisualizer,
};
