
import { basicCounterAnimation } from './basic-counter-operations/data';

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
