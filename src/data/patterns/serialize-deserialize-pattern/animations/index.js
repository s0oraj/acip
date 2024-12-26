import { stringSerialization } from './string-serialization/data';
import StringSerializationVisualizer from './string-serialization/visualizer';

import { arrayListSerialization } from './array-list-serialization/data';
import ArrayListSerializationVisualizer from './array-list-serialization/visualizer';

import { treeSerialization } from './tree-serialization/data';
import TreeSerializationVisualizer from './tree-serialization/visualizer';

import { graphSerialization } from './graph-serialization/data';
import GraphSerializationVisualizer from './graph-serialization/visualizer';

import { dataStructureTransformations } from './data-structure-transformations/data';
import DataStructureTransformationsVisualizer from './data-structure-transformations/visualizer';

export const visualizers = {
  'string-serialization': StringSerializationVisualizer,
  'array-list-serialization': ArrayListSerializationVisualizer,
  'tree-serialization': TreeSerializationVisualizer,
  'graph-serialization': GraphSerializationVisualizer,
  'data-structure-transformations': DataStructureTransformationsVisualizer
};

export const serializeDeserializeAnimations = {
  "string-serialization": stringSerialization,
  "array-list-serialization": arrayListSerialization,
  "tree-serialization": treeSerialization,
  "graph-serialization": graphSerialization,
  "data-structure-transformations": dataStructureTransformations
};

