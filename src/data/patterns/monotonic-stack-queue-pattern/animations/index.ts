// src/data/patterns/monotonic-stack-queue-pattern/animations/index.ts
import NextGreaterVisualizer from './next-greater-problems-foundation-/visualizer';
import MonotonicWindowVisualizer from './monotonic-window-operations/visualizer';
import { nextGreaterAnimation } from './next-greater-problems-foundation-/data';
import { windowOperationsAnimation } from './monotonic-window-operations/data';
import CompetitionVisualizer from './competition-stack-problems/visualizer';
import { competitionStackAnimation } from './competition-stack-problems/data';
import {advancedApplicationsAnimation } from './advanced-applications/data';
import AdvancedVisualizer from './advanced-applications/visualizer';


export const visualizers = {
  'next-greater-problems-foundation-': NextGreaterVisualizer,
  'monotonic-window-operations': MonotonicWindowVisualizer,
  'competition-stack-problems':CompetitionVisualizer,
  'advaned-applications': AdvancedVisualizer
};

export const monotonicQueueAnimations = {
  'next-greater-problems-foundation-': nextGreaterAnimation,
  'monotonic-window-operations': windowOperationsAnimation,
  "competition-stack-problems":competitionStackAnimation,
  'advaned-applications':advancedApplicationsAnimation
};

const placeholderAnimation = {
  id: "placeholder",
  title: "Coming Soon",
  description: "This animation is under development",
  steps: [{
    title: "Under Development",
    description: "Animation coming soon",
    array: [],
    phases: [{
      description: "Animation under development",
      activeIndex: -1,
      highlightIndices: [],
      counter: {},
      code: "// TODO: Implementation coming soon"
    }]
  }],
  counters: []
};

Object.keys(visualizers).forEach(key => {
  if (!monotonicQueueAnimations[key]) {
    monotonicQueueAnimations[key] = placeholderAnimation;
  }
});
