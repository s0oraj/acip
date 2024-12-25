export interface PopulationTrackingStep {
  description: string;
  code: string;
  highlightedLines: number[];
  gridState: number[][];
}

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
  // ... (keep the rest of the steps as they are, just add the highlightedLines property to each step)
];

export const GRID_ROWS = 5;
export const GRID_COLS = 5;

