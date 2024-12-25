import { AnimationData } from '../types';
import PopulationTrackingVisualizer from './visualizer';

export interface PopulationTrackingStep {
  description: string;
  code: string;
  highlightedLines: number[];
  gridState: number[][];
}

export const GRID_ROWS = 5;
export const GRID_COLS = 5;

export const steps: PopulationTrackingStep[] = [
  {
    description: "Initialize the grid with random population values",
    code: `grid = [[random() for _ in range(COLS)] for _ in range(ROWS)]`,
    highlightedLines: [1],
    gridState: [
      [3, 1, 4, 1, 5],
      [9, 2, 6, 5, 3],
      [5, 8, 9, 7, 9],
      [3, 2, 3, 8, 4],
      [6, 2, 6, 4, 3],
    ],
  },
  {
    description: "Calculate the total population",
    code: `total_population = sum(sum(row) for row in grid)`,
    highlightedLines: [1],
    gridState: [
      [3, 1, 4, 1, 5],
      [9, 2, 6, 5, 3],
      [5, 8, 9, 7, 9],
      [3, 2, 3, 8, 4],
      [6, 2, 6, 4, 3],
    ],
  },
  {
    description: "Find the area with the highest population",
    code: `max_population = max(max(row) for row in grid)
max_row, max_col = next((i, j) for i, row in enumerate(grid)
                        for j, val in enumerate(row) if val == max_population)`,
    highlightedLines: [1, 2, 3],
    gridState: [
      [3, 1, 4, 1, 5],
      [9, 2, 6, 5, 3],
      [5, 8, 9, 7, 9],
      [3, 2, 3, 8, 4],
      [6, 2, 6, 4, 3],
    ],
  },
  {
    description: "Calculate the average population",
    code: `average_population = total_population / (ROWS * COLS)`,
    highlightedLines: [1],
    gridState: [
      [3, 1, 4, 1, 5],
      [9, 2, 6, 5, 3],
      [5, 8, 9, 7, 9],
      [3, 2, 3, 8, 4],
      [6, 2, 6, 4, 3],
    ],
  },
  {
    description: "Identify areas above average population",
    code: `above_average = [[1 if cell > average_population else 0
                            for cell in row] for row in grid]`,
    highlightedLines: [1, 2],
    gridState: [
      [0, 0, 0, 0, 1],
      [1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1],
      [0, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
    ],
  },
];

export const populationTrackingAnimation: AnimationData = {
  name: 'Population Tracking',
  description: 'Visualize population tracking in a grid',
  component: PopulationTrackingVisualizer,
};

