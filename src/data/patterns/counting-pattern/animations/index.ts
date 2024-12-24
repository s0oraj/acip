
import { basicCounterAnimation } from './basic-counter-operations/data';

import { Visualizer as BasicCounterOperationsVisualizer } from './basic-counter-operations/visualizer';

export const visualizers = {
  'basic-counter-operations': BasicCounterOperationsVisualizer,
  // Add other visualizers here as needed
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
  frequencydistribution: placeholderAnimation,
  windowbasedcounting: placeholderAnimation, 
  statebasedcounting: placeholderAnimation,
  populationtracking: placeholderAnimation,
  advancedcounting: placeholderAnimation
};
