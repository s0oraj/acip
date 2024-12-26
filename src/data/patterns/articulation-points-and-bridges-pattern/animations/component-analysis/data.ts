import { Animation } from '@/types';

export const componentAnalysisAnimation: Animation = {
  id: "component-analysis",
  title: "Component Analysis",
  description: "Visualizing component analysis operations",
  steps: [
    {
      title: "Unreachable Pairs",
      description: "Count the number of unreachable pairs of nodes",
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
        components: [
          [1, 2, 3],
          [4, 5, 6],
        ],
      },
    },
    {
      title: "Maximum Score Sequence",
      description: "Find the maximum score of a node sequence",
      visualizationData: {
        nodes: [
          { id: 1, score: 5 },
          { id: 2, score: 3 },
          { id: 3, score: 4 },
          { id: 4, score: 2 },
          { id: 5, score: 6 },
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
        ],
        maxScoreSequence: [1, 2, 3, 5],
      },
    },
    {
      title: "Strongly Connected Components",
      description: "Identify strongly connected components in a directed graph",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }
        ],
        edges: [
          { source: 1, target: 2 },
          { source: 2, target: 3 },
          { source: 3, target: 1 },
          { source: 3, target: 4 },
          { source: 4, target: 5 },
          { source: 5, target: 6 },
          { source: 6, target: 4 },
        ],
        components: [
          [1, 2, 3],
          [4, 5, 6],
        ],
      },
    },
    {
      title: "Remove Max Edges",
      description: "Find the maximum number of edges to remove while keeping the graph fully traversable",
      visualizationData: {
        nodes: [
          { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }
        ],
        edges: [
          { source: 1, target: 2, type: 'both' },
          { source: 2, target: 3, type: 'both' },
          { source: 3, target: 4, type: 'both' },
          { source: 1, target: 3, type: 'alice' },
          { source: 2, target: 4, type: 'bob' },
        ],
        removableEdges: [
          { source: 1, target: 3 },
          { source: 2, target: 4 },
        ],
      },
    },
  ],
};


