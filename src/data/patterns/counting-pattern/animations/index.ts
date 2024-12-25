
// src/data/patterns/counting-pattern/animations/index.ts
import { basicCounterAnimation } from './basic-counter-operations/data';
import BasicCounterOperationsVisualizer from './basic-counter-operations/visualizer';

import { frequencyDistributionAnimation } from './frequency-distribution/data';
import FrequencyDistributionVisualizer from './frequency-distribution/visualizer';

import { windowBasedCountingAnimation } from './window-based-counting/data';
import WindowBasedCountingVisualizer from './window-based-counting/visualizer';

//import { stateBasedCountingAnimation } from './state-based-counting/data';
//import StateBasedCountingVisualizer from './state-based-counting/visualizer';

//import { populationTrackingAnimation } from './population-tracking/data';
//import PopulationTrackingVisualizer from './population-tracking/visualizer';

import { advancedCounterAnimation } from './advanced-counting/data';
import AdvancedCounterOperationsVisualizer from './advanced-counting/visualizer';


export const visualizers = {
  'basic-counter-operations': BasicCounterOperationsVisualizer,
  'frequency-distribution': FrequencyDistributionVisualizer,
  'window-based-counting': WindowBasedCountingVisualizer,
  'advanced-counting': AdvancedCounterOperationsVisualizer
};
// 'state-based-counting': StateBasedCountingVisualizer
// population-tracking': PopulationTrackingVisualizer
// advanced-counter-operations': AdvancedCounterOperationsVisualizer

export const countingAnimations = {
  "basic-counter-operations": basicCounterAnimation,
  "frequency-distribution": frequencyDistributionAnimation,
  "window-based-counting": windowBasedCountingAnimation,
  statebasedcounting: placeholderAnimation,
  populationtracking: placeholderAnimation,
  "advanced-counting": advancedCounterAnimation
};
// "state-based-counting": stateBasedCountingAnimation
// population-tracking": placeholderAnimation,
//advanced-counter-operations": placeholderAnimation
//advancedcounting: placeholderAnimation
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

