import { AnimationData } from '../types';
import PopulationTrackingVisualizer from './visualizer';

export interface PopulationTrackingStep {
  description: string;
  code: string;
  highlightedLines: number[];
  gridState: number[][];
}

export const steps: PopulationTrackingStep[] = [
  // ... (keep the existing steps)
];

export const GRID_ROWS = 5;
export const GRID_COLS = 5;

export const populationTrackingAnimation: AnimationData = {
  name: 'Population Tracking',
  description: 'Visualize population tracking in a grid',
  component: PopulationTrackingVisualizer,
};
