// src/data/patterns/counting-pattern/animations/index.ts
import { basicCounterAnimation } from './basic-counter-operations/data';
import { frequencyDistributionAnimation } from './frequency-distribution/data';
import BasicCounterOperationsVisualizer from './basic-counter-operations/visualizer';
import FrequencyDistributionVisualizer from './frequency-distribution/visualizer';

export const visualizers = {
  'basic-counter-operations': BasicCounterOperationsVisualizer,
  'frequency-distribution': FrequencyDistributionVisualizer
};
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

export const countingAnimations = {
  "basic-counter-operations": basicCounterAnimation,
  "frequency-distribution": frequencyDistributionAnimation,
  windowbasedcounting: placeholderAnimation,
  statebasedcounting: placeholderAnimation,
  populationtracking: placeholderAnimation,
  advancedcounting: placeholderAnimation
};
