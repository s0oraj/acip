
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
  basiccounteroperations: basicCounterAnimation,
  frequencydistribution: placeholderAnimation,
  windowbasedcounting: placeholderAnimation, 
  statebasedcounting: placeholderAnimation,
  populationtracking: placeholderAnimation,
  advancedcounting: placeholderAnimation
};
