import { basicRangeQueriesAnimation } from './basic-range-queries/data';
import BasicRangeQueriesVisualizer from './basic-range-queries/visualizer';
import { lazyPropagationAnimation } from './lazy-propagation/data';
import LazyPropagationVisualizer from './lazy-propagation/visualizer';
import { advancedRangeOperationsAnimation } from './advanced-range-operations/data';
import AdvancedRangeOperationsVisualizer from './advanced-range-operations/visualizer';
import { twoDOperationsAnimation } from './2d-operations/data';
import TwoDOperationsVisualizer from './2d-operations/visualizer';
import { persistentOperationsAnimation } from './persistent-operations/data';
import PersistentOperationsVisualizer from './persistent-operations/visualizer';

export const visualizers = {
  'basic-range-queries': BasicRangeQueriesVisualizer,
  'lazy-propagation': LazyPropagationVisualizer,
  'st-advanced-range-operations': AdvancedRangeOperationsVisualizer,
  '2d-operations': TwoDOperationsVisualizer,
  'persistent-operations': PersistentOperationsVisualizer,
};

export const segmentTreeAnimations = {
  "basic-range-queries": basicRangeQueriesAnimation,
  "lazy-propagation": lazyPropagationAnimation,
  "st-advanced-range-operations": advancedRangeOperationsAnimation,
  "2d-operations": twoDOperationsAnimation,
  "persistent-operations": persistentOperationsAnimation,
};

