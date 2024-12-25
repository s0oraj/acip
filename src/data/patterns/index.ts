import { Pattern } from '../types';
import { countingPattern } from './counting-pattern/counting-pattern';
import { monotonicQueuePattern } from './monotonic-queue/monotonic-queue-pattern';
import { simulationPattern } from './simulation-pattern';
import { linearSortingPattern } from './linear-sorting-pattern';
import { meetInMiddlePattern } from './meet-in-middle-pattern';
import { moAlgorithmPattern } from './mo-algorithm-pattern';
import { serializeDeserializePattern } from './serialize-deserialize-pattern';
import { clonePattern } from './clone-pattern';
import { articulationPointsPattern } from './articulation-points-pattern';
import { segmentTreePattern } from './segment-tree-pattern';
import { binaryIndexedTreePattern } from './binary-indexed-tree-pattern';

export const patterns: Pattern[] = [
  countingPattern,
  monotonicQueuePattern,
  simulationPattern,
  linearSortingPattern,
  meetInMiddlePattern,
  moAlgorithmPattern,
  serializeDeserializePattern,
  clonePattern,
  articulationPointsPattern,
  segmentTreePattern,
  binaryIndexedTreePattern
];

