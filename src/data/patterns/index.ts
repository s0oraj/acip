import { Pattern } from '../types';
import { countingPattern } from './counting-pattern/counting-pattern';
import { monotonicQueuePattern } from './monotonic-stack-queue-pattern/monotonic-queue-pattern';
import { simulationPattern } from './simulation-pattern/simulation-pattern';
import { linearSortingPattern } from './linear-sorting-pattern/linear-sorting-pattern';
import { meetInMiddlePattern } from './meet-in-the-middle-pattern/meet-in-middle-pattern';
import { moAlgorithmPattern } from './mo-s-algorithm-pattern/mo-algorithm-pattern';
import { serializeDeserializePattern } from './serialize-deserialize-pattern/serialize-deserialize-pattern';
import { clonePattern } from './clone-pattern/clone-pattern';
import { articulationPointsPattern } from './articulation-points-and-bridges-pattern/articulation-points-pattern';
import { segmentTreePattern } from './segment-tree-pattern/segment-tree-pattern';
import { binaryIndexedTreePattern } from './binary-indexed-tree-pattern/binary-indexed-tree-pattern';


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

