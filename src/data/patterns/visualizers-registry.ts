// src/data/patterns/visualizers-registry.ts
import { visualizers as countingVisualizers } from './counting-pattern/animations';
import { visualizers as monotonicVisualizers } from './monotonic-stack-queue-pattern/animations';
import { visualizers as simulationVisualizers } from './simulation-pattern/animations';
import { visualizers as linearSortingVisualizers } from './linear-sorting-pattern/animations';
import { visualizers as meetInMiddleVisualizers } from './meet-in-the-middle-pattern/animations';
import { visualizers as moAlgorithmVisualizers } from './mo-s-algorithm-pattern/animations';
import { visualizers as serializeVisualizers } from './serialize-deserialize-pattern/animations';
import { visualizers as cloneVisualizers } from './clone-pattern/animations';
import { visualizers as articulationVisualizers } from './articulation-points-and-bridges-pattern/animations';
import { visualizers as segmentTreeVisualizers } from './segment-tree-pattern/animations';
import { visualizers as binaryIndexedTreeVisualizers } from './binary-indexed-tree-pattern/animations';

// Combine all visualizer
export const allVisualizers = {
  ...countingVisualizers,
  ...monotonicVisualizers,
  ...simulationVisualizers,
  ...linearSortingVisualizers,
  ...meetInMiddleVisualizers,
  ...moAlgorithmVisualizers,
  ...serializeVisualizers,
  ...cloneVisualizers,
  ...articulationVisualizers,
  ...segmentTreeVisualizers,
  ...binaryIndexedTreeVisualizers
};
