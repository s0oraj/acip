// src/data/index.ts
import * as level1 from './level1';
import * as level2 from './level2';
import * as level3 from './level3';
import * as level4 from './level4';

export const levelData = {
  1: {
    nodes: level1.initialNodes,
    edges: level1.initialEdges
  },
  2: {
    nodes: level2.initialNodes,
    edges: level2.initialEdges
  },
  3: {
    nodes: level3.initialNodes,
    edges: level3.initialEdges
  },
  4: {
    nodes: level4.initialNodes,
    edges: level4.initialEdges
  }
};

export type LevelNumber = 1 | 2 | 3 | 4;