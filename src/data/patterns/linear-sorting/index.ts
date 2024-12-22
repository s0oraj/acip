import { Pattern } from '@/types';
import { basicCountingSortPattern } from './basic-counting-sort';
import { bucketSortFundamentalsPattern } from './bucket-sort-fundamentals';
import { modifiedSortingRulesPattern } from './modified-sorting-rules';
import { advancedApplicationsPattern } from './advanced-applications';

export const linearSortingPattern: Pattern = {
  id: 4,
  title: "Linear Sorting Pattern",
  description: "Master linear-time sorting techniques and their applications in solving complex problems.",
  subpatterns: [
    basicCountingSortPattern,
    bucketSortFundamentalsPattern,
    modifiedSortingRulesPattern,
    advancedApplicationsPattern
  ],
  summary: {
    progressionElements: [
      "Fixed-range counting → Variable-range bucketing",
      "Single-pass partitioning → Multi-criteria sorting",
      "In-place modifications → Auxiliary data structures",
      "Simple frequency counting → Complex ordering rules"
    ],
    coreTechniques: [
      "Counting sort",
      "Bucket sort",
      "Modified sorting rules",
      "Difference arrays",
      "Custom comparison functions"
    ],
    implementationGuidelines: [
      {
        title: "Basic Counting Sort Template",
        code: `def counting_sort(arr, max_val):
    count = [0] * (max_val + 1)
    # Count frequencies
    for num in arr:
        count[num] += 1
    
    # Rebuild array
    idx = 0
    for i in range(max_val + 1):
        while count[i] > 0:
            arr[idx] = i
            idx += 1
            count[i] -= 1
    return arr`
      },
      {
        title: "Bucket Sort Template",
        code: `def bucket_sort(arr, bucket_size=5):
    if not arr:
        return arr
    
    # Create buckets
    min_val, max_val = min(arr), max(arr)
    bucket_count = (max_val - min_val) // bucket_size + 1
    buckets = [[] for _ in range(bucket_count)]
    
    # Distribute elements
    for num in arr:
        bucket_idx = (num - min_val) // bucket_size
        buckets[bucket_idx].append(num)
    
    # Sort buckets and combine
    result = []
    for bucket in buckets:
        bucket.sort()  # Can use counting sort here
        result.extend(bucket)
    return result`
      }
    ],
    testingStrategy: [
      "Test with various input ranges and distributions",
      "Check edge cases (empty array, single element, all same elements)",
      "Verify stability requirements",
      "Test performance with large inputs",
      "Validate custom sorting rules and constraints"
    ]
  }
};

