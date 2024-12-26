import { Animation } from '@/types';

export const advancedPatternsAnimation: Animation = {
  id: "advanced-patterns",
  title: "Advanced Patterns",
  description: "Visualizing advanced graph patterns and algorithms",
  steps: [
    {
      title: "Reachable with Restrictions",
      description: "Find reachable nodes with restrictions",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
          { source: 5, target: 6 },
        ],
        restrictedNodes: [3, 5],
        reachableNodes: [1, 2],
      },
    },
    {
      title: "Critical MST Classification",
      description: "Classify edges in a Minimum Spanning Tree",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
        ],
        edges: [
          { source: 1, target: 2, weight: 1, type: 'critical' },
          { source: 1, target: 3, weight: 2, type: 'pseudo-critical' },
          { source: 2, target: 3, weight: 3, type: 'non-critical' },
          { source: 2, target: 4, weight: 4, type: 'critical' },
          { source: 3, target: 4, weight: 5, type: 'non-critical' },
        ],
      },
    },
    {
      title: "Hierarchical Components",
      description: "Analyze hierarchical components in a tree structure",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, { id: 7 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 1, target: 3 },
          { source: 2, target: 4 },
          { source: 2, target: 5 },
          { source: 3, target: 6 },
          { source: 3, target: 7 },
        ],
        components: [
          [1, 2, 3],
          [4, 5],
          [6, 7],
        ],
      },
    },
    {
      title: "Network Layer Optimization",
      description: "Optimize network layers based on multiple criteria",
      visualizationData: {
        nodes: [
          { id: 1, layer: 1 },
          { id: 2, layer: 1 },
          { id: 3, layer: 2 },
          { id: 4, layer: 2 },
          { id: 5, layer: 3 },
        ],
        edges: [
          { source: 1, target: 3, weight: 2 },
          { source: 1, target: 4, weight: 3 },
          { source: 2, target: 3, weight: 1 },
          { source: 2, target: 4, weight: 4 },
          { source: 3, target: 5, weight: 2 },
          { source: 4, target: 5, weight: 1 },
        ],
        optimizedPath: [2, 3, 5],
      },
    },
  ],
};


