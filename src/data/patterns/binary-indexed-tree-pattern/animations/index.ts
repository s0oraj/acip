import { basicRangeOperationsAnimation } from './basic-range-operations/data';
import BasicRangeOperationsVisualizer from './basic-range-operations/visualizer';
import { orderStatisticsAnimation } from './order-statistics/data';
import OrderStatisticsVisualizer from './order-statistics/visualizer';
import { twoDOperationsAnimation } from './bit-2d-operations/data';
import TwoDOperationsVisualizer from './bit-2d-operations/visualizer';
import { multipleBITsAnimation } from './multiple-bits/data';
import MultipleBITsVisualizer from './multiple-bits/visualizer';
import { advancedApplicationsAnimation } from './bit-advanced-applications/data';
import AdvancedApplicationsVisualizer from './bit-advanced-applications/visualizer';

export const visualizers = {
  'basic-range-operations': BasicRangeOperationsVisualizer,
  'order-statistics': OrderStatisticsVisualizer,
  'bit-2d-operations': TwoDOperationsVisualizer,
  'multiple-bits': MultipleBITsVisualizer,
  'bit-advanced-applications': AdvancedApplicationsVisualizer,
};

export const binaryIndexedTreeAnimations = {
  "basic-range-operations": basicRangeOperationsAnimation,
  "order-statistics": orderStatisticsAnimation,
  "bit-2d-operations": twoDOperationsAnimation,
  "multiple-bits": multipleBITsAnimation,
  "bit-advanced-applications": advancedApplicationsAnimation,
};

