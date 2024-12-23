import { Pattern } from '../types'

export const countingPattern: Pattern = {
  id: 1,
  title: "Counting Pattern",
  description: "Master frequency counting and statistical patterns across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Counter Operations",
      questions: [
        {
          id: 1,
          title: "How Many Numbers Are Smaller Than Current Number",
          difficulty: "easy",
          link: "https://leetcode.com/problems/how-many-numbers-are-smaller-than-current-number/",
          description: "Base Pattern: Array element counting",
          details: {
            keyDifference: "count[num] += 1",
            commonError: "Array bounds",
            optimization: "Value range compression"
          }
        },
        {
          id: 2,
          title: "Most Frequent Even Element",
          difficulty: "easy",
          link: "https://leetcode.com/problems/most-frequent-even-element/",
          description: "Builds on #1: Adds filter condition",
          details: {
            keyDifference: "if num % 2 == 0: count[num] += 1",
            commonError: "Edge cases (-1)",
            optimization: "Frequency tracking"
          }
        },
        {
          id: 3,
          title: "Do Not Be Distracted!",
          difficulty: "easy",
          link: "https://codeforces.com/problemset/problem/1520/A",
          description: "Builds on #2: Multiple value tracking",
          details: {
            keyDifference: "seen.add((nums[i], nums[i+1]))",
            commonError: "Pair ordering",
            optimization: "Set vs Counter"
          }
        }
      ]
    },
    {
      title: "Frequency Distribution",
      questions: [
        {
          id: 4,
          title: "Count Elements With Maximum Frequency",
          difficulty: "easy",
          link: "https://leetcode.com/problems/count-elements-with-maximum-frequency/",
          description: "Base Pattern: Frequency tracking",
          details: {
            keyDifference: "freq = Counter(nums)",
            commonError: "Max tracking",
            optimization: "Single pass count"
          }
        },
        {
          id: 5,
          title: "Maximum Equal Frequency",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-equal-frequency/",
          description: "Builds on #4: Double frequency tracking",
          details: {
            keyDifference: "freq_of_freq[freq[x]] += 1",
            commonError: "Map synchronization",
            optimization: "Running max tracking"
          }
        },
        {
          id: 6,
          title: "Remove Letter To Equalize Frequency",
          difficulty: "medium",
          link: "https://leetcode.com/problems/remove-letter-to-equalize-frequency/",
          description: "Builds on #5: Frequency grouping",
          details: {
            keyDifference: "groups[freq[x]].add(x)",
            commonError: "Group updates",
            optimization: "Early termination"
          }
        }
      ]
    },
    {
      title: "Window-Based Counting",
      questions: [
        {
          id: 7,
          title: "Number of Sub-arrays of Size K",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/",
          description: "Base Pattern: Window sum counting",
          details: {
            keyDifference: "window_sum += nums[right] - nums[left]",
            commonError: "Window bounds",
            optimization: "Running average"
          }
        },
        {
          id: 8,
          title: "Distinct Numbers in Each Window",
          difficulty: "medium",
          link: "https://leetcode.com/problems/distinct-numbers-in-each-subarray/",
          description: "Builds on #7: Distinct counting",
          details: {
            keyDifference: "window[nums[right]] += 1",
            commonError: "Count maintenance",
            optimization: "HashSet tracking"
          }
        },
        {
          id: 9,
          title: "Find the K-Beauty of a Number",
          difficulty: "easy",
          link: "https://leetcode.com/problems/find-the-k-beauty-of-a-number/",
          description: "Builds on #8: Condition checking",
          details: {
            keyDifference: "if int(window_str) % num == 0: count += 1",
            commonError: "String conversion",
            optimization: "Rolling hash"
          }
        }
      ]
    },
    {
      title: "State-Based Counting",
      questions: [
        {
          id: 10,
          title: "Maximize Number of Subsequences",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximize-number-of-subsequences-in-a-string/",
          description: "Base Pattern: State counting",
          details: {
            keyDifference: "state[char] += 1",
            commonError: "State ordering",
            optimization: "Prefix counting"
          }
        },
        {
          id: 11,
          title: "Minimum Number of Frogs Croaking",
          difficulty: "medium",
          link: "https://leetcode.com/problems/minimum-number-of-frogs-croaking/",
          description: "Builds on #10: Multi-state tracking",
          details: {
            keyDifference: "states[next_state] += 1",
            commonError: "State sync",
            optimization: "Circular states"
          }
        },
        {
          id: 12,
          title: "Even-Odd XOR",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1722/G",
          description: "Builds on #11: Pattern matching",
          details: {
            keyDifference: "pattern[state].append(char)",
            commonError: "Pattern validation",
            optimization: "State compression"
          }
        }
      ]
    },
    {
      title: "Population Tracking",
      questions: [
        {
          id: 13,
          title: "Maximum Population Year",
          difficulty: "easy",
          link: "https://leetcode.com/problems/maximum-population-year/",
          description: "Base Pattern: Timeline counting",
          details: {
            keyDifference: "timeline[year] += 1",
            commonError: "Year boundaries",
            optimization: "Line sweep"
          }
        },
        {
          id: 14,
          title: "Number of Flowers in Full Bloom",
          difficulty: "hard",
          link: "https://leetcode.com/problems/number-of-flowers-in-full-bloom/",
          description: "Builds on #13: Range operations",
          details: {
            keyDifference: "prefix[start] += 1; prefix[end] -= 1",
            commonError: "Range overlap",
            optimization: "Prefix sums"
          }
        },
        {
          id: 15,
          title: "Number of Smooth Descent Periods",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-smooth-descent-periods/",
          description: "Builds on #14: Pattern growth",
          details: {
            keyDifference: "if prices[i] > prices[i-1]: count += streak",
            commonError: "Reset conditions",
            optimization: "DP approach"
          }
        }
      ]
    },
    {
      title: "Advanced Counting",
      questions: [
        {
          id: 16,
          title: "Count Number of Pairs With Absolute Difference K",
          difficulty: "easy",
          link: "https://leetcode.com/problems/count-number-of-pairs-with-absolute-difference-k/",
          description: "Base Pattern: Pair counting",
          details: {
            keyDifference: "count += freq[num + k]",
            commonError: "Double counting",
            optimization: "Single pass"
          }
        },
        {
          id: 17,
          title: "Count Largest Group",
          difficulty: "easy",
          link: "https://leetcode.com/problems/count-largest-group/",
          description: "Builds on #16: Group formation",
          details: {
            keyDifference: "groups[digit_sum(num)] += 1",
            commonError: "Group sizing",
            optimization: "Digit sum memo"
          }
        },
        {
          id: 18,
          title: "Find Longest Awesome Substring",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-longest-awesome-substring/",
          description: "Builds on #17: Balance checking",
          details: {
            keyDifference: "state ^= (1 << char)",
            commonError: "State tracking",
            optimization: "Bit manipulation"
          }
        },
        {
          id: 19,
          title: "K Divisible Elements Subarrays",
          difficulty: "medium",
          link: "https://leetcode.com/problems/k-divisible-elements-subarrays/",
          description: "Builds on #18: Pattern matching",
          details: {
            keyDifference: "if divisible_count <= k: patterns.add(tuple(arr))",
            commonError: "Duplicate patterns",
            optimization: "Rolling hash"
          }
        },
        {
          id: 20,
          title: "Apply Operations to Maximize Frequency Score",
          difficulty: "hard",
          link: "https://leetcode.com/problems/apply-operations-to-maximize-frequency-score/",
          description: "Builds on #19: Advanced patterns",
          details: {
            keyDifference: "count += check_window(nums, size)",
            commonError: "Score calculation",
            optimization: "Binary search"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic counting → Frequency tracking",
      "Single value → Multiple states",
      "Fixed window → Dynamic patterns",
      "Simple pairs → Complex relationships"
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
      },
      {
        title: "Growth Pattern Detection",
        code: `# Track consecutive growth periods
def track_growth(populations):
    growth = 0
    streak = 1
    for i in range(1, len(populations)):
        if populations[i] > populations[i-1]:
            streak += 1
        else:
            growth += (streak * (streak - 1)) // 2
            streak = 1`
      }
    ],
    testingStrategy: [
      "Test boundaries (year ranges)",
      "Test overlapping periods",
      "Test pattern sequences",
      "Test large datasets",
      "Test update consistency"
    ],
    commonPitfalls: [
      "Year boundary mishandling",
      "Range overlap errors",
      "Precision loss in averages",
      "Update operation inconsistency",
      "Inefficient range processing"
    ]
  }
}

