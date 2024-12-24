
// src/data/patterns/counting-pattern/animations/index.ts
import { basicCounterAnimation } from './basic-counter-operations/data';
import BasicCounterOperationsVisualizer from './basic-counter-operations/visualizer';

import { frequencyDistributionAnimation } from './frequency-distribution/data';
import FrequencyDistributionVisualizer from './frequency-distribution/visualizer';

import { windowBasedCountingAnimation } from './window-based-counting/data';
import WindowBasedCountingVisualizer from './window-based-counting/visualizer';

import { stateBasedCountingAnimation } from './state-based-counting/data';
import StateBasedCountingVisualizer from './state-based-counting/visualizer';

//import { populationTrackingAnimation } from './population-tracking/data';
//import PopulationTrackingVisualizer from './population-tracking/visualizer';

//import { advancedCounterAnimation } from './advanced-counter-operations/data';
//import AdvancedCounterOperationsVisualizer from './advanced-counter-operations/visualizer';


export const visualizers = {
  'basic-counter-operations': BasicCounterOperationsVisualizer,
  'frequency-distribution': FrequencyDistributionVisualizer,
  'window-based-counting': WindowBasedCountingVisualizer,
  'state-based-counting': StateBasedCountingVisualizer
};
//'advanced-counter-operations': AdvancedCounterOperationsVisualizer
//  'population-tracking': PopulationTrackingVisualizer
export const countingAnimations = {
  "basic-counter-operations": basicCounterAnimation,
  "frequency-distribution": frequencyDistributionAnimation,
  "window-based-counting": windowBasedCountingAnimation,
  "state-based-counting": stateBasedCountingAnimation,
};
/*"population-tracking": placeholderAnimation,
  "advanced-counter-operations": placeholderAnimation*/
const placeholderAnimation = {
  title: "Coming Soon",
  steps: [{
    description: "Animation under development",
    code: "// TODO",
    visualization: {
      elements: [],
      highlightIndices: []
    }
  }]
};

