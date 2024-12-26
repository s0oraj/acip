import { basicGraphCuttingAnimation } from './basic-graph-cutting/data';
import BasicGraphCuttingVisualizer from './basic-graph-cutting/visualizer';
import { gridConnectivityAnimation } from './grid-connectivity/data';
import GridConnectivityVisualizer from './grid-connectivity/visualizer';
import { directedComponentsAnimation } from './directed-components/data';
import DirectedComponentsVisualizer from './directed-components/visualizer';
import { componentAnalysisAnimation } from './component-analysis/data';
import ComponentAnalysisVisualizer from './component-analysis/visualizer';
import { advancedPatternsAnimation } from './advanced-patterns/data';
import AdvancedPatternsVisualizer from './advanced-patterns/visualizer';

export const visualizers = {
  'basic-graph-cutting': BasicGraphCuttingVisualizer,
  'grid-connectivity': GridConnectivityVisualizer,
  'directed-components': DirectedComponentsVisualizer,
  'component-analysis': ComponentAnalysisVisualizer,
  'advanced-patterns': AdvancedPatternsVisualizer,
};

export const articulationPointsAndBridgesAnimations = {
  "basic-graph-cutting": basicGraphCuttingAnimation,
  "grid-connectivity": gridConnectivityAnimation,
  "directed-components": directedComponentsAnimation,
  "component-analysis": componentAnalysisAnimation,
  "advanced-patterns": advancedPatternsAnimation,
};

