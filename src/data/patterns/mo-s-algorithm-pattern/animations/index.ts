import { basicRangeQueryOperationsAnimation } from './basic-range-query-operations/data';
import BasicRangeQueryOperationsVisualizer from './basic-range-query-operations/visualizer';

import { frequencyBasedQueriesAnimation } from './frequency-based-queries/data';
import FrequencyBasedQueriesVisualizer from './frequency-based-queries/visualizer';

import { advancedRangeOperationsAnimation } from './advanced-range-operations/data';
import AdvancedRangeOperationsVisualizer from './advanced-range-operations/visualizer';

import { specialRangeOperationsAnimation } from './special-range-operations/data';
import SpecialRangeOperationsVisualizer from './special-range-operations/visualizer';

import { updateOperationsAnimation } from './update-operations/data';
import UpdateOperationsVisualizer from './update-operations/visualizer';

export const visualizers = {
  'basic-range-query-operations': BasicRangeQueryOperationsVisualizer,
  'frequency-based-queries': FrequencyBasedQueriesVisualizer,
  'advanced-range-operations': AdvancedRangeOperationsVisualizer,
  'special-range-operations': SpecialRangeOperationsVisualizer,
  'update-operations': UpdateOperationsVisualizer
};

export const mosAlgorithmAnimations = {
  "basic-range-query-operations": basicRangeQueryOperationsAnimation,
  "frequency-based-queries": frequencyBasedQueriesAnimation,
  "advanced-range-operations": advancedRangeOperationsAnimation,
  "special-range-operations": specialRangeOperationsAnimation,
  "update-operations": updateOperationsAnimation
};

