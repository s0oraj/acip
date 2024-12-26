import { Animation } from '@/types';

export const basicGraphCuttingAnimation: Animation = {
  id: "basic-graph-cutting",
  title: "Basic Graph Cutting",
  description: "Visualizing basic graph cutting operations",
  steps: [
    {
      title: "Number of Connected Components",
      description: "Count the number of connected components in an undirected graph",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 4, target: 5 },
          { source: 5, target: 6 },
        ],
      },
    },
    {
      title: "Critical Connections",
      description: "Identify critical connections (bridges) in a network",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 1, target: 3 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
        ],
        criticalEdges: [
          { source: 3, target: 4 }
        ],
      },
    },
    {
      title: "Articulation Points",
      description: "Find articulation points in a graph",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 1, target: 3 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 3, target: 5 },
        ],
        articulationPoints: [3],
      },
    },
    {
      title: "Critical MST Edges",
      description: "Identify critical edges in a Minimum Spanning Tree",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
        ],
        edges: [
          { source: 1, target: 2, weight: 1 },
          { source: 1, target: 3, weight: 2 },
          { source: 2, target: 3, weight: 3 },
          { source: 2, target: 4, weight: 4 },
          { source: 3, target: 4, weight: 5 },
        ],
        mstEdges: [
          { source: 1, target: 2 },
          { source: 1, target: 3 },
          { source: 2, target: 4 },
        ],
        criticalEdges: [
          { source: 2, target: 4 }
        ],
      },
    },
  ],
};


