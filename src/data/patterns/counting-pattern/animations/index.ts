// src/data/patterns/counting-pattern/animations/index.ts
import { basicCounterAnimation } from './basic-counter-operations/data';
import { frequencyDistributionAnimation } from './frequency-distribution/data';
import { windowBasedCountingAnimation } from './window-based-counting/data';
import BasicCounterOperationsVisualizer from './basic-counter-operations/visualizer';
import FrequencyDistributionVisualizer from './frequency-distribution/visualizer';
import WindowBasedCountingVisualizer from './window-based-counting/visualizer';
import { stateBasedCountingAnimation } from './state-based-counting/data';
import StateBasedCountingVisualizer from './state-based-counting/visualizer';


export const visualizers = {
  'basic-counter-operations': BasicCounterOperationsVisualizer,
  'frequency-distribution': FrequencyDistributionVisualizer,
  'window-based-counting': WindowBasedCountingVisualizer,
  'state-based-counting': StateBasedCountingVisualizer
};

export const countingAnimations = {
  "basic-counter-operations": basicCounterAnimation,
  "frequency-distribution": frequencyDistributionAnimation,
  "window-based-counting": windowBasedCountingAnimation,
  "state-based-counting": stateBasedCountingAnimation,
  populationtracking: placeholderAnimation,
  advancedcounting: placeholderAnimation
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

