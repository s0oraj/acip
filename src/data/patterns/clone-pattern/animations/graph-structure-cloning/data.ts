import { Animation } from '@/types';

export const graphStructureCloningAnimation: Animation = {
  id: "graph-structure-cloning",
  title: "Graph Structure Cloning",
  description: "Visualizing cloning operations on graph structures",
  steps: [
    {
      title: "DAG Clone",
      description: "Cloning a Directed Acyclic Graph (DAG)",
      visualizationData: {
        nodes: [
          { id: 1, label: 'A' },
          { id: 2, label: 'B' },
          { id: 3, label: 'C' },
          { id: 4, label: 'D' },
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 3 },
          { from: 2, to: 4 },
          { from: 3, to: 4 },
        ],
      },
    },
    {
      title: "Cyclic Graph Clone",
      description: "Cloning a graph with cycles",
      visualizationData: {
        nodes: [
          { id: 1, label: 'A' },
          { id: 2, label: 'B' },
          { id: 3, label: 'C' },
          { id: 4, label: 'D' },
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 2, to: 3 },
          { from: 3, to: 4 },
          { from: 4, to: 1 },
        ],
      },
    },
    {
      title: "Weighted Graph Clone",
      description: "Cloning a graph with weighted edges",
      visualizationData: {
        nodes: [
          { id: 1, label: 'A' },
          { id: 2, label: 'B' },
          { id: 3, label: 'C' },
          { id: 4, label: 'D' },
        ],
        edges: [
          { from: 1, to: 2, weight: 5 },
          { from: 1, to: 3, weight: 2 },
          { from: 2, to: 4, weight: 3 },
          { from: 3, to: 4, weight: 7 },
        ],
      },
    },
    {
      title: "Bipartite Graph Clone",
      description: "Cloning a bipartite graph",
      visualizationData: {
        nodes: [
          { id: 1, label: 'A', color: 'red' },
          { id: 2, label: 'B', color: 'blue' },
          { id: 3, label: 'C', color: 'red' },
          { id: 4, label: 'D', color: 'blue' },
        ],
        edges: [
          { from: 1, to: 2 },
          { from: 1, to: 4 },
          { from: 3, to: 2 },
          { from: 3, to: 4 },
        ],
      },
    },
  ],
};


