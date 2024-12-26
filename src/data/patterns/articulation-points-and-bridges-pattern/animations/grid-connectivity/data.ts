import { Animation } from '@/types';

export const gridConnectivityAnimation: Animation = {
  id: "grid-connectivity",
  title: "Grid Connectivity",
  description: "Visualizing grid connectivity operations",
  steps: [
    {
      title: "Number of Islands",
      description: "Count the number of islands in a grid",
      visualizationData: {
        grid: [
          [1, 1, 0, 0, 0],
          [1, 1, 0, 0, 0],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 1, 1],
        ],
      },
    },
    {
      title: "Minimum Days to Disconnect",
      description: "Find the minimum number of days to disconnect an island",
      visualizationData: {
        grid: [
          [1, 1, 0],
          [1, 1, 0],
          [0, 0, 0],
        ],
        disconnectCells: [[0, 1], [1, 0]],
      },
    },
    {
      title: "Shortest Bridge",
      description: "Find the shortest bridge between two islands",
      visualizationData: {
        grid: [
          [1, 1, 0, 0],
          [1, 0, 0, 0],
          [0, 0, 0, 1],
          [0, 0, 1, 1],
        ],
        bridge: [[1, 1], [1, 2], [1, 3], [2, 3]],
      },
    },
    {
      title: "Making A Large Island",
      description: "Find the size of the largest island after changing one 0 to 1",
      visualizationData: {
        grid: [
          [1, 0, 1],
          [0, 0, 0],
          [1, 0, 1],
        ],
        largestIsland: [[0, 0], [0, 1], [0, 2], [1, 1], [2, 0], [2, 1], [2, 2]],
      },
    },
  ],
};


