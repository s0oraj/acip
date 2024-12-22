import { Pattern } from '@/types';
import { basicFrequencyPattern } from './basic-frequency';
import { runningWindowsPattern } from './running-windows';
import { advancedFrequencyPattern } from './advanced-frequency';
import { multiCounterPattern } from './multi-counter';
import { patternRecognitionPattern } from './pattern-recognition';
import { stateManagementPattern } from './state-management';
import { complexFrequencyPattern } from './complex-frequency';
import { populationTrackingPattern } from './population-tracking';

export const countingPattern: Pattern = {
  id: 1,
  title: "Counting Pattern",
  description: "Master frequency counting and statistical patterns",
  subpatterns: [
    basicFrequencyPattern,
    runningWindowsPattern,
    advancedFrequencyPattern,
    multiCounterPattern,
    patternRecognitionPattern,
    stateManagementPattern,
    complexFrequencyPattern,
    populationTrackingPattern
  ],
  questions: [], // All questions are now in subpatterns
  summary: {
    progressionElements: [
      "Time-based counting → Range queries",
      "Single point → Range operations",
      "Static counting → Dynamic tracking",
      "Basic counting → Statistical measures"
    ],
    coreTechniques: [
      "Line sweep algorithm",
      "Prefix & difference arrays",
      "Running statistics",
      "Binary search for ranges",
      "Sliding window for trends"
    ],
    implementationGuidelines: [
      {
        title: "Range Operations",
        code: `# Use difference array for efficient updates
def update_range(start, end, value):
    diff[start] += value
    diff[end + 1] -= value`
      },
      {
        title: "Population Queries",
        code: `# Efficient range sum using prefix array
def query_range(start, end):
    return prefix_sum[end] - prefix_sum[start - 1]`
      }
    ],
    testingStrategy: [
      "Test boundaries (year ranges)",
      "Test overlapping periods",
      "Test pattern sequences",
      "Test large datasets",
      "Test update consistency"
    ]
  }
};
