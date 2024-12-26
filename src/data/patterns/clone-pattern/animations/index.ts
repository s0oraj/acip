import { basicNodeCloningAnimation } from './basic-node-cloning/data';
import BasicNodeCloningVisualizer from './basic-node-cloning/visualizer';
import { treeStructureCloningAnimation } from './tree-structure-cloning/data';
import TreeStructureCloningVisualizer from './tree-structure-cloning/visualizer';
import { graphStructureCloningAnimation } from './graph-structure-cloning/data';
import GraphStructureCloningVisualizer from './graph-structure-cloning/visualizer';
import { containerStructureCloningAnimation } from './container-structure-cloning/data';
import ContainerStructureCloningVisualizer from './container-structure-cloning/visualizer';
import { cacheStructureCloningAnimation } from './cache-structure-cloning/data';
import CacheStructureCloningVisualizer from './cache-structure-cloning/visualizer';

export const visualizers = {
  'basic-node-cloning': BasicNodeCloningVisualizer,
  'tree-structure-cloning': TreeStructureCloningVisualizer,
  'graph-structure-cloning': GraphStructureCloningVisualizer,
  'container-structure-cloning': ContainerStructureCloningVisualizer,
  'cache-structure-cloning': CacheStructureCloningVisualizer,
};

export const clonePatternAnimations = {
  "basic-node-cloning": basicNodeCloningAnimation,
  "tree-structure-cloning": treeStructureCloningAnimation,
  "graph-structure-cloning": graphStructureCloningAnimation,
  "container-structure-cloning": containerStructureCloningAnimation,
  "cache-structure-cloning": cacheStructureCloningAnimation,
};

