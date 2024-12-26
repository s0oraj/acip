import { countingSortAnimation } from './counting-sort-with-modified-rules/data';
import CountingSortVisualizer from './counting-sort-with-modified-rules/visualizer';
import { advancedCountingSortAnimation } from './advanced-counting-sort-applications/data';
import AdvancedCountingSortVisualizer from './advanced-counting-sort-applications/visualizer';
import { bucketSortAnimation } from './bucket-sort-foundations/data';
import BucketSortVisualizer from './bucket-sort-foundations/visualizer';
import { advancedBucketAnimation } from './advanced-bucket-applications/data';
import AdvancedBucketVisualizer from './advanced-bucket-applications/visualizer';
import { radixSortAnimation } from './radix-sort-implementations/data';
import RadixSortVisualizer from './radix-sort-implementations/visualizer';
import { advancedRadixAnimation } from './advanced-radix-applications/data';
import AdvancedRadixVisualizer from './advanced-radix-applications/visualizer';

export const visualizers = {
  'counting-sort-with-modified-rules': CountingSortVisualizer,
  'advanced-counting-sort-applications': AdvancedCountingSortVisualizer,
  'bucket-sort-foundations': BucketSortVisualizer,
  'advanced-bucket-applications': AdvancedBucketVisualizer,
  'radix-sort-implementations': RadixSortVisualizer,
  'advanced-radix-applications': AdvancedRadixVisualizer,
};

export const linearSortingAnimations = {
  "counting-sort-with-modified-rules": countingSortAnimation,
  "advanced-counting-sort-applications": advancedCountingSortAnimation,
  "bucket-sort-foundations": bucketSortAnimation,
  "advanced-bucket-applications": advancedBucketAnimation,
  "radix-sort-implementations": radixSortAnimation,
  "advanced-radix-applications": advancedRadixAnimation,
};

