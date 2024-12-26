import { Animation } from '@/types';
import { Network } from 'lucide-react';

export const patterns = {
  basicGraphEncoding: {
    icon: 'network',
    title: "Basic Graph Encoding",
    desc: "Adjacency encoding",
    color: "#4F46E5"
  },
  directedGraphEncoding: {
    icon: 'network',
    title: "Directed Graph Encoding",
    desc: "Edge direction encoding",
    color: "#7C3AED"
  },
  weightedGraphEncoding: {
    icon: 'network',
    title: "Weighted Graph Encoding",
    desc: "Edge weight encoding",
    color: "#2563EB"
  },
  multiGraphEncoding: {
    icon: 'network',
    title: "Multi-Graph Encoding",
    desc: "Multiple components encoding",
    color: "#DB2777"
  }
};

export const graphSerialization: Animation = {
  id: "graph-serialization",
  title: "Graph Serialization",
  description: "Techniques for serializing graph structures",
  steps: [
    {
      title: "Basic Graph Encoding",
      description: "Encode a simple undirected graph",
      input: { 0: [1, 2], 1: [0, 2], 2: [0, 1] },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode node 0", encoded: "0:1,2" },
        { description: "Encode node 1", encoded: "0:1,2;1:0,2" },
        { description: "Encode node 2", encoded: "0:1,2;1:0,2;2:0,1" },
        { description: "Decoding", decoded: { 0: [1, 2], 1: [0, 2], 2: [0, 1] } }
      ]
    },
    {
      title: "Directed Graph Encoding",
      description: "Encode a directed graph",
      input: { 0: [1, 2], 1: [2], 2: [] },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode node 0", encoded: "0->1,2" },
        { description: "Encode node 1", encoded: "0->1,2;1->2" },
        { description: "Encode node 2", encoded: "0->1,2;1->2;2->" },
        { description: "Decoding", decoded: { 0: [1, 2], 1: [2], 2: [] } }
      ]
    },
    {
      title: "Weighted Graph Encoding",
      description: "Encode a weighted graph",
      input: { 0: [[1, 5], [2, 3]], 1: [[2, 2]], 2: [] },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode node 0", encoded: "0:1(5),2(3)" },
        { description: "Encode node 1", encoded: "0:1(5),2(3);1:2(2)" },
        { description: "Encode node 2", encoded: "0:1(5),2(3);1:2(2);2:" },
        { description: "Decoding", decoded: { 0: [[1, 5], [2, 3]], 1: [[2, 2]], 2: [] } }
      ]
    },
    {
      title: "Multi-Graph Encoding",
      description: "Encode multiple graph components",
      input: [
        { 0: [1], 1: [0] },
        { 2: [3], 3: [2] }
      ],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode component 1", encoded: "[0:1;1:0]" },
        { description: "Encode component 2", encoded: "[0:1;1:0],[2:3;3:2]" },
        { description: "Decoding", decoded: [{ 0: [1], 1: [0] }, { 2: [3], 3: [2] }] }
      ]
    }
  ]
};

