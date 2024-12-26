import { Animation } from '@/types';
import { ReplaceIcon as Transform } from 'lucide-react';

export const patterns = {
  treeToListEncoding: {
    icon: 'transform',
    title: "Tree to List Encoding",
    desc: "Structure conversion",
    color: "#4F46E5"
  },
  graphToTreeEncoding: {
    icon: 'transform',
    title: "Graph to Tree Encoding",
    desc: "Cycle removal",
    color: "#7C3AED"
  },
  matrixToGraphEncoding: {
    icon: 'transform',
    title: "Matrix to Graph Encoding",
    desc: "Grid conversion",
    color: "#2563EB"
  },
  structureVersioning: {
    icon: 'transform',
    title: "Structure Versioning",
    desc: "Version control",
    color: "#DB2777"
  }
};

export const dataStructureTransformations: Animation = {
  id: "data-structure-transformations",
  title: "Data Structure Transformations",
  description: "Techniques for transforming between different data structures",
  steps: [
    {
      title: "Tree to List Encoding",
      description: "Convert a tree structure to a list",
      input: { val: 1, children: [{ val: 2 }, { val: 3, children: [{ val: 4 }, { val: 5 }] }] },
      phases: [
        { description: "Initialize", encoded: [] },
        { description: "Encode root", encoded: [1] },
        { description: "Encode level 1", encoded: [1, 2, 3] },
        { description: "Encode level 2", encoded: [1, 2, 3, null, null, 4, 5] },
        { description: "Decoding", decoded: { val: 1, children: [{ val: 2 }, { val: 3, children: [{ val: 4 }, { val: 5 }] }] } }
      ]
    },
    {
      title: "Graph to Tree Encoding",
      description: "Convert a graph to a tree by removing cycles",
      input: { 0: [1, 2], 1: [0, 3], 2: [0, 3], 3: [1, 2] },
      phases: [
        { description: "Initialize", encoded: {} },
        { description: "Select root", encoded: { 0: [] } },
        { description: "Add children", encoded: { 0: [1, 2], 1: [], 2: [] } },
        { description: "Add grandchildren", encoded: { 0: [1, 2], 1: [3], 2: [3], 3: [] } },
        { description: "Decoding", decoded: { 0: [1, 2], 1: [3], 2: [3], 3: [] } }
      ]
    },
    {
      title: "Matrix to Graph Encoding",
      description: "Convert a matrix to a graph representation",
      input: [
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
      ],
      phases: [
        { description: "Initialize", encoded: {} },
        { description: "Encode row 0", encoded: { 0: [1], 1: [0] } },
        { description: "Encode row 1", encoded: { 0: [1], 1: [0] } },
        { description: "Encode row 2", encoded: { 0: [1], 1: [0], 2: [] } },
        { description: "Decoding", decoded: [[1, 1, 0], [1, 1, 0], [0, 0, 1]] }
      ]
    },
    {
      title: "Structure Versioning",
      description: "Version control for data structures",
      input: { v1: [1, 2, 3], v2: [1, 2, 3, 4] },
      phases: [
        { description: "Initialize", encoded: { v1: [1, 2, 3] } },
        { description: "Create v2", encoded: { v1: [1, 2, 3], v2: "v1+[4]" } },
        { description: "Create v3", encoded: { v1: [1, 2, 3], v2: "v1+[4]", v3: "v2-[2]" } },
        { description: "Decoding v3", decoded: [1, 3, 4] }
      ]
    }
  ]
};

