import { Pattern } from '../types';

export const meetInMiddlePattern: Pattern = {
  id: 5,
  title: "Meet in Middle Pattern",
  description: "Learn to solve complex problems by dividing the search space and meeting in the middle.",
  questions: [
    {
      id: 1,
      title: "Partition Equal Subset Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-equal-subset-sum/",
      description: "Base Pattern: Single split meet-in-middle. Key Operation: subsets1[sum1] = True",
      details: {
        keyDifference: "Single split meet-in-middle",
        commonError: "Not handling empty subset",
        optimization: "Early termination checks"
      }
    },
    {
      id: 2,
      title: "Partition Array Into Two Arrays",
      difficulty: "hard",
      link: "https://leetcode.com/problems/partition-array-into-two-arrays-to-minimize-sum-difference/",
      description: "Builds on #1: Size-constrained splits. Key Difference: Equal size requirement",
      details: {
        keyDifference: "Size-constrained splits",
        commonError: "Missing size validation",
        optimization: "Binary search on sorted halves"
      }
    },
    {
      id: 3,
      title: "Partition to K Equal Sum Subsets",
      difficulty: "medium",
      link: "https://leetcode.com/problems/partition-to-k-equal-sum-subsets/",
      description: "Builds on #2: Multi-way partitioning",
      details: {
        keyDifference: "K-way split tracking",
        commonError: "Wrong backtracking state",
        optimization: "Sort elements descending"
      }
    },
    {
      id: 4,
      title: "Split Array With Same Average",
      difficulty: "hard",
      link: "https://leetcode.com/problems/split-array-with-same-average/",
      description: "Builds on #3: Average-based splitting",
      details: {
        keyDifference: "Floating point comparison",
        commonError: "Precision errors",
        optimization: "Use scaled integers"
      }
    },
    {
      id: 5,
      title: "Closest Subsequence Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/closest-subsequence-sum/",
      description: "Base Pattern: Two-way subset sums",
      details: {
        keyDifference: "Two-way subset sums",
        commonError: "Not handling duplicates",
        optimization: "Sort and binary search"
      }
    },
    {
      id: 6,
      title: "Find Minimum Time to Finish All Jobs",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-minimum-time-to-finish-all-jobs/",
      description: "Builds on #5: Worker assignment",
      details: {
        keyDifference: "Load balancing",
        commonError: "Inefficient pruning",
        optimization: "State compression"
      }
    },
    {
      id: 7,
      title: "Ways to Split Array Into Three Subarrays",
      difficulty: "hard",
      link: "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/",
      description: "Builds on #6: Three-way splitting",
      details: {
        keyDifference: "Prefix sum usage",
        commonError: "Boundary conditions",
        optimization: "Two pointers approach"
      }
    },
    {
      id: 8,
      title: "Find Array Given Subset Sums",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-array-given-subset-sums/",
      description: "Builds on #7: Reconstruction problem",
      details: {
        keyDifference: "Backward building",
        commonError: "Wrong subset ordering",
        optimization: "Sort and deduce"
      }
    },
    {
      id: 9,
      title: "Maximum Product of the Length of Two Palindromic Subsequences",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-product-of-the-length-of-two-palindromic-subsequences/",
      description: "Base Pattern: Product optimization",
      details: {
        keyDifference: "Product optimization",
        commonError: "Overlapping elements",
        optimization: "Precompute palindromes"
      }
    },
    {
      id: 10,
      title: "Maximum Score Words Formed by Letters",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
      description: "Builds on #9: Resource constrained",
      details: {
        keyDifference: "Letter frequency limit",
        commonError: "Resource counting",
        optimization: "Precompute word scores"
      }
    },
    {
      id: 11,
      title: "Find the K-Sum of an Array",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-the-k-sum-of-an-array/",
      description: "Builds on #10: K-based optimization",
      details: {
        keyDifference: "Heap-based tracking",
        commonError: "Sum overflow",
        optimization: "Priority queue"
      }
    },
    {
      id: 12,
      title: "Maximize Score After N Operations",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximize-score-after-n-operations/",
      description: "Builds on #11: Pair-based operations",
      details: {
        keyDifference: "GCD calculations",
        commonError: "State representation",
        optimization: "Precompute GCD"
      }
    },
    {
      id: 13,
      title: "Find XOR Sum of All Pairs Bitwise AND",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/",
      description: "Base Pattern: Bit manipulation splitting",
      details: {
        keyDifference: "Bit manipulation splitting",
        commonError: "Order of operations",
        optimization: "Bit-by-bit processing"
      }
    },
    {
      id: 14,
      title: "Count of Sub-Multisets With Bounded Sum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-of-sub-multisets-with-bounded-sum/",
      description: "Builds on #13: Multi-occurrence elements",
      details: {
        keyDifference: "Frequency handling",
        commonError: "Modulo arithmetic",
        optimization: "Rolling DP array"
      }
    },
    {
      id: 15,
      title: "Minimum Cost to Change Final Value of Expression",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-cost-to-change-final-value-of-expression/",
      description: "Builds on #14: Expression evaluation",
      details: {
        keyDifference: "Cost calculation",
        commonError: "Parentheses matching",
        optimization: "Stack-based parsing"
      }
    },
    {
      id: 16,
      title: "Count Array Pairs Divisible by K",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-array-pairs-divisible-by-k/",
      description: "Builds on #15: GCD properties",
      details: {
        keyDifference: "Divisibility check",
        commonError: "GCD calculation",
        optimization: "Factor map"
      }
    },
    {
      id: 17,
      title: "Check if String Can Break Another String",
      difficulty: "medium",
      link: "https://leetcode.com/problems/check-if-string-can-break-another-string/",
      description: "Base Pattern: Character rearrangement",
      details: {
        keyDifference: "Character rearrangement",
        commonError: "Wrong comparison order",
        optimization: "Count sort"
      }
    },
    {
      id: 18,
      title: "Maximum Number of Eaten Apples",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
      description: "Builds on #17: Timeline reconstruction",
      details: {
        keyDifference: "Expiration tracking",
        commonError: "Priority management",
        optimization: "Heap cleanup"
      }
    },
    {
      id: 19,
      title: "Maximum Value After Insertion",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-value-after-insertion/",
      description: "Builds on #18: Optimal insertion",
      details: {
        keyDifference: "Sign handling",
        commonError: "Leading zeros",
        optimization: "Early termination"
      }
    },
    {
      id: 20,
      title: "Maximum Number of Groups Getting Fresh Donuts",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/",
      description: "Builds on #19: Group optimization",
      details: {
        keyDifference: "Modulo grouping",
        commonError: "State encoding",
        optimization: "State compression"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Single split → Multi-way partitioning",
      "Sum-based division → Product-based division",
      "Basic subset generation → Advanced reconstruction",
      "Simple constraints → Complex optimization criteria"
    ],
    coreTechniques: [
      "Meet-in-the-middle algorithm",
      "Subset generation and combination",
      "Binary search on sorted halves",
      "Dynamic programming with bitmasks",
      "GCD and modular arithmetic"
    ],
    implementationGuidelines: [
      {
        title: "Basic Meet-in-Middle Template",
        code: `
def meet_in_middle(arr):
    n = len(arr)
    mid = n // 2
    
    # Generate subsets for first half
    left_sums = generate_subsets(arr[:mid])
    right_sums = generate_subsets(arr[mid:])
    
    # Process combinations
    result = process_combinations(left_sums, right_sums)
    return result

def generate_subsets(arr):
    n = len(arr)
    sums = []
    for mask in range(1 << n):
        curr_sum = 0
        for i in range(n):
            if mask & (1 << i):
                curr_sum += arr[i]
        sums.append(curr_sum)
    return sorted(sums)  # Sort for binary search

def process_combinations(left, right):
    result = float('inf')
    for sum1 in left:
        # Binary search in right half
        idx = binary_search(right, target - sum1)
        if idx >= 0:
            result = min(result, abs(target - (sum1 + right[idx])))
    return result
        `
      }
    ],
    testingStrategy: [
      "Test with various input sizes and distributions",
      "Check edge cases (empty input, single element, all same elements)",
      "Verify correctness of subset generation and combination",
      "Test performance with large inputs",
      "Validate handling of constraints and optimization criteria"
    ]
  }
};

