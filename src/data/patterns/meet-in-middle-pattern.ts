import { Pattern } from '../types'

export const meetInMiddlePattern: Pattern = {
  id: 5,
  title: "Meet in the Middle Pattern",
  description: "Master the meet-in-the-middle technique for efficient problem-solving across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Subset Division",
      questions: [
        {
          id: 1,
          title: "Partition Equal Subset Sum",
          difficulty: "medium",
          link: "https://leetcode.com/problems/partition-equal-subset-sum/",
          description: "Base Pattern: Single split meet-in-middle",
          details: {
            keyDifference: "subsets1[sum1] = True",
            commonError: "Not handling empty subset",
            optimization: "Early termination checks"
          }
        },
        {
          id: 2,
          title: "Split Array With Same Average",
          difficulty: "hard",
          link: "https://leetcode.com/problems/split-array-with-same-average/",
          description: "Builds on #1: Adding average constraint",
          details: {
            keyDifference: "subsets1[sum1].add(size1)",
            commonError: "Floating point comparison",
            optimization: "Size-based pruning"
          }
        },
        {
          id: 3,
          title: "Fair Distribution of Cookies",
          difficulty: "medium",
          link: "https://leetcode.com/problems/fair-distribution-of-cookies/",
          description: "Builds on #2: K-way partitioning",
          details: {
            keyDifference: "distribute(i, curr_sums)",
            commonError: "Backtracking state",
            optimization: "Sort cookies descending"
          }
        },
        {
          id: 4,
          title: "Tallest Billboard",
          difficulty: "hard",
          link: "https://leetcode.com/problems/tallest-billboard/",
          description: "Builds on #3: Difference based splitting",
          details: {
            keyDifference: "dp[diff] = max(curr_sum)",
            commonError: "Negative differences",
            optimization: "Hash map states"
          }
        }
      ]
    },
    {
      title: "Sum-based Division",
      questions: [
        {
          id: 5,
          title: "Closest Subsequence Sum",
          difficulty: "hard",
          link: "https://leetcode.com/problems/closest-subsequence-sum/",
          description: "Base Pattern: Two-way subset generation",
          details: {
            keyDifference: "binary_search(sums2, target - sum1)",
            commonError: "Duplicate sums",
            optimization: "Sort and search"
          }
        },
        {
          id: 6,
          title: "Sum of Mutated Array Closest to Target",
          difficulty: "medium",
          link: "https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/",
          description: "Builds on #5: Value modification",
          details: {
            keyDifference: "findBestValue(arr, target)",
            commonError: "Rounding values",
            optimization: "Binary search"
          }
        },
        {
          id: 7,
          title: "Count Subarrays With Score Less Than K",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-subarrays-with-score-less-than-k/",
          description: "Builds on #6: Score-based splitting",
          details: {
            keyDifference: "score = sum * len",
            commonError: "Long integer overflow",
            optimization: "Sliding window"
          }
        },
        {
          id: 8,
          title: "Ways to Split Array Into Three Subarrays",
          difficulty: "hard",
          link: "https://leetcode.com/problems/ways-to-split-array-into-three-subarrays/",
          description: "Builds on #7: Three-way splitting",
          details: {
            keyDifference: "count += right - left + 1",
            commonError: "Boundary cases",
            optimization: "Two pointers"
          }
        }
      ]
    },
    {
      title: "Product Division",
      questions: [
        {
          id: 9,
          title: "Numbers With Repeated Digits",
          difficulty: "hard",
          link: "https://leetcode.com/problems/numbers-with-repeated-digits/",
          description: "Base Pattern: Digit state splitting",
          details: {
            keyDifference: "count_repeated = total - unique",
            commonError: "Leading zeros",
            optimization: "Digit DP"
          }
        },
        {
          id: 10,
          title: "Find the K-Sum of an Array",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-the-k-sum-of-an-array/",
          description: "Builds on #9: K-selection tracking",
          details: {
            keyDifference: "heap.push((sum + diff, i + 1))",
            commonError: "Sum overflow",
            optimization: "Priority queue"
          }
        },
        {
          id: 11,
          title: "Count Array Pairs Divisible by K",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-array-pairs-divisible-by-k/",
          description: "Builds on #10: GCD properties",
          details: {
            keyDifference: "count += gcd_map[k//curr_gcd]",
            commonError: "Factor counting",
            optimization: "Prime factorization"
          }
        },
        {
          id: 12,
          title: "Maximum XOR With an Element From Array",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-xor-with-an-element-from-array/",
          description: "Builds on #11: XOR optimization",
          details: {
            keyDifference: "max_xor = curr | (1 << bit)",
            commonError: "Bit ordering",
            optimization: "Trie structure"
          }
        }
      ]
    },
    {
      title: "Advanced Reconstruction",
      questions: [
        {
          id: 13,
          title: "Minimize XOR",
          difficulty: "medium",
          link: "https://leetcode.com/problems/minimize-xor/",
          description: "Base Pattern: Bit manipulation",
          details: {
            keyDifference: "result |= (1 << i)",
            commonError: "Bit counting",
            optimization: "Greedy selection"
          }
        },
        {
          id: 14,
          title: "Maximum Genetic Difference Query",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-genetic-difference-query/",
          description: "Builds on #13: Tree traversal",
          details: {
            keyDifference: "maxXor = getMax(trie, val)",
            commonError: "Trie update",
            optimization: "Online queries"
          }
        },
        {
          id: 15,
          title: "Find XOR Sum of All Pairs Bitwise AND",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-xor-sum-of-all-pairs-bitwise-and/",
          description: "Builds on #14: Pair operations",
          details: {
            keyDifference: "result ^= (a & b)",
            commonError: "Order of operations",
            optimization: "Bit manipulation"
          }
        },
        {
          id: 16,
          title: "Maximum AND Sum of Array",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-and-sum-of-array/",
          description: "Builds on #15: AND optimization",
          details: {
            keyDifference: "dp[mask] = max(score)",
            commonError: "State encoding",
            optimization: "State compression"
          }
        }
      ]
    },
    {
      title: "State Reconstruction",
      questions: [
        {
          id: 17,
          title: "Maximum Score Words Formed by Letters",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-score-words-formed-by-letters/",
          description: "Base Pattern: State reconstruction",
          details: {
            keyDifference: "max_score = backtrack(used)",
            commonError: "Letter counting",
            optimization: "Bit masking"
          }
        },
        {
          id: 18,
          title: "Number of Ways to Wear Different Hats to Each Other",
          difficulty: "hard",
          link: "https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/",
          description: "Builds on #17: Assignment problem",
          details: {
            keyDifference: "dp[mask][i] += dp[prev][i-1]",
            commonError: "State transition",
            optimization: "State compression"
          }
        },
        {
          id: 19,
          title: "Maximum Number of Groups Getting Fresh Donuts",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-number-of-groups-getting-fresh-donuts/",
          description: "Builds on #18: Group optimization",
          details: {
            keyDifference: "dp[mask][rem] = max_groups",
            commonError: "State encoding",
            optimization: "State compression"
          }
        },
        {
          id: 20,
          title: "Minimum Cost to Change Final Value of Expression",
          difficulty: "hard",
          link: "https://leetcode.com/problems/minimum-cost-to-change-final-value-of-expression/",
          description: "Builds on #19: Expression evaluation",
          details: {
            keyDifference: "min_cost[expr] = min(costs)",
            commonError: "Parentheses handling",
            optimization: "Stack-based parsing"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic subset division → Complex state reconstruction",
      "Single-split problems → Multi-way partitioning",
      "Sum-based operations → Product and XOR-based operations",
      "Simple bit manipulation → Advanced state compression"
    ],
    coreTechniques: [
      "Meet-in-the-middle algorithm",
      "Dynamic programming",
      "Bit manipulation",
      "State compression",
      "Binary search optimization"
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
      },
      {
        title: "K-Way Split Template",
        code: `
def k_way_split(arr, k):
    def can_split(target):
        groups = 0
        curr_sum = 0
        for num in arr:
            curr_sum += num
            if curr_sum > target:
                return False
            if curr_sum == target:
                groups += 1
                curr_sum = 0
        return groups >= k

    left = max(arr)
    right = sum(arr)
    while left < right:
        mid = (left + right) // 2
        if can_split(mid):
            right = mid
        else:
            left = mid + 1
    return left
        `
      },
      {
        title: "Product-based Division Template",
        code: `
def max_product_division(arr):
    n = len(arr)
    best = 0
    
    # Try all possible divisions
    for mask in range(1 << n):
        set1 = []
        set2 = []
        for i in range(n):
            if mask & (1 << i):
                set1.append(arr[i])
            else:
                set2.append(arr[i])
        
        # Check validity and update result
        if is_valid(set1) and is_valid(set2):
            best = max(best, calculate_score(set1) * calculate_score(set2))
    
    return best
        `
      }
    ],
    testingStrategy: [
      "Test with various input sizes and distributions",
      "Include edge cases (empty sets, single elements)",
      "Verify correctness for all possible partitions",
      "Test performance with large inputs",
      "Check for integer overflow in sum and product operations"
    ],
    commonPitfalls: [
      "Not handling edge cases (empty sets, single element)",
      "Integer overflow in calculations",
      "Wrong binary search implementation",
      "Memory limit exceeded in subset generation",
      "Incorrect pruning conditions"
    ]
  }
}

