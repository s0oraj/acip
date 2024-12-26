import { Animation } from '@/types';

export const directedComponentsAnimation: Animation = {
  id: "directed-components",
  title: "Directed Components",
  description: "Visualizing operations on directed graph components",
  steps: [
    {
      title: "Find Eventual Safe States",
      description: "Identify eventual safe states in a directed graph",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
          { source: 5, target: 1 },
        ],
        safeStates: [4, 5],
      },
    },
    {
      title: "Strong Bridges",
      description: "Find strong bridges in a directed graph",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
        ],
        edges: [
          { source: 1, target: 2 },{ source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 1 },
        ],
        strongBridges: [
          { source: 3, target: 4 }
        ],
      },
    },
    {
      title: "Minimize Malware Spread",
      description: "Find the node to remove to minimize malware spread",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
          { source: 5, target: 1 },
        ],
        initialInfected: [2, 4],
        bestRemoval: 3,
      },
    },
    {
      title: "Component Bridges",
      description: "Identify bridges between strongly connected components",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 1 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
          { source: 5, target: 4 },
          { source: 5, target: 6 },
        ],
        componentBridges: [
          { source: 2, target: 3 },
          { source: 5, target: 6 },
        ],
      },
    },
  ],
};


