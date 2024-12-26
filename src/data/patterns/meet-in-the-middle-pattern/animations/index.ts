import { basicSubsetDivisionAnimation } from './basic-subset-division/data';
import BasicSubsetDivisionVisualizer from './basic-subset-division/visualizer';

import { sumBasedDivisionAnimation } from './sum-based-division/data';
import SumBasedDivisionVisualizer from './sum-based-division/visualizer';

import { productDivisionAnimation } from './product-division/data';
import ProductDivisionVisualizer from './product-division/visualizer';

import { advancedReconstructionAnimation } from './advanced-reconstruction/data';
import AdvancedReconstructionVisualizer from './advanced-reconstruction/visualizer';

import { stateReconstructionAnimation } from './state-reconstruction/data';
import StateReconstructionVisualizer from './state-reconstruction/visualizer';

export const visualizers = {
  'basic-subset-division': BasicSubsetDivisionVisualizer,
  'sum-based-division': SumBasedDivisionVisualizer,
  'product-division': ProductDivisionVisualizer,
  'advanced-reconstruction': AdvancedReconstructionVisualizer,
  'state-reconstruction': StateReconstructionVisualizer
};

export const meetInTheMiddleAnimations = {
  "basic-subset-division": basicSubsetDivisionAnimation,
  "sum-based-division": sumBasedDivisionAnimation,
  "product-division": productDivisionAnimation,
  "advanced-reconstruction": advancedReconstructionAnimation,
  "state-reconstruction": stateReconstructionAnimation
};

