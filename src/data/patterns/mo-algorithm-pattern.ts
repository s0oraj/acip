import { Pattern } from '../types'

export const moAlgorithmPattern: Pattern = {
  id: 6,
  title: "Mo's Algorithm Pattern",
  description: "Master Mo's Algorithm for efficient range query processing across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Range Query Operations",
      questions: [
        {
          id: 1,
          title: "Range Sum Query - Mutable",
          difficulty: "medium",
          link: "https://leetcode.com/problems/range-sum-query-mutable/",
          description: "Base Pattern: Square root decomposition with offline queries",
          details: {
            keyDifference: "sortQueries() by block_id and right endpoint",
            commonError: "Block size calculation",
            optimization: "Query ordering"
          }
        },
        {
          id: 2,
          title: "XOR Queries of a Subarray",
          difficulty: "medium",
          link: "https://leetcode.com/problems/xor-queries-of-a-subarray/",
          description: "Builds on #1: Adding/removing elements while moving pointers",
          details: {
            keyDifference: "curr_xor ^= arr[pos] for both add/remove",
            commonError: "XOR property application",
            optimization: "Two-pointer technique"
          }
        },
        {
          id: 3,
          title: "Count of Unique Elements in Subarray",
          difficulty: "medium",
          link: "https://leetcode.com/problems/k-divisible-elements-subarrays/",
          description: "Builds on #2: Frequency array for tracking",
          details: {
            keyDifference: "if(++freq[arr[pos]] == 1) distinct_count++",
            commonError: "Decrement handling",
            optimization: "Hash table for sparse arrays"
          }
        },
        {
          id: 4,
          title: "Count Nice Pairs in Array",
          difficulty: "medium",
          link: "https://leetcode.com/problems/count-nice-pairs-in-an-array/",
          description: "Builds on #3: Two-pointer with frequency",
          details: {
            keyDifference: "pairs += freq[target - curr]",
            commonError: "Self-pairs handling",
            optimization: "Hash map"
          }
        }
      ]
    },
    {
      title: "Frequency-Based Queries",
      questions: [
        {
          id: 5,
          title: "Most Frequent Element in Range",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/220/B",
          description: "Base Pattern: Frequency tracking with Mo's",
          details: {
            keyDifference: "updateMaxFreq(freq[arr[pos]])",
            commonError: "Maximum frequency maintenance",
            optimization: "Bucket array"
          }
        },
        {
          id: 6,
          title: "K-Most Frequent in Range",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/86/D",
          description: "Builds on #5: Track top-K elements",
          details: {
            keyDifference: "priority_queue for K elements",
            commonError: "Frequency updates",
            optimization: "Count array"
          }
        },
        {
          id: 7,
          title: "Count Pairs with Sum in Range",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/375/D",
          description: "Builds on #6: Two-pointer with frequency",
          details: {
            keyDifference: "pairs += freq[target - curr]",
            commonError: "Self-pairs handling",
            optimization: "Hash map"
          }
        },
        {
          id: 8,
          title: "Range Mode Query with Updates",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/617/E",
          description: "Builds on #7: Handle updates between queries",
          details: {
            keyDifference: "time parameter in query sorting",
            commonError: "Update ordering",
            optimization: "Time-based blocks"
          }
        }
      ]
    },
    {
      title: "Advanced Range Operations",
      questions: [
        {
          id: 9,
          title: "Number of Different Integers in a String",
          difficulty: "easy",
          link: "https://leetcode.com/problems/number-of-different-integers-in-a-string/",
          description: "Base Pattern: Distinct counting with Mo's",
          details: {
            keyDifference: "updateCount(window, num)",
            commonError: "String to integer conversion",
            optimization: "Hash set"
          }
        },
        {
          id: 10,
          title: "GCD of an Array",
          difficulty: "easy",
          link: "https://leetcode.com/problems/find-greatest-common-divisor-of-array/",
          description: "Builds on #9: GCD computation",
          details: {
            keyDifference: "curr_gcd = gcd(curr_gcd, arr[pos])",
            commonError: "Remove operation",
            optimization: "Prime factorization"
          }
        },
        {
          id: 11,
          title: "Product of Array Except Self",
          difficulty: "medium",
          link: "https://leetcode.com/problems/product-of-array-except-self/",
          description: "Builds on #10: Product with division handling",
          details: {
            keyDifference: "curr_prod = (curr_prod * arr[pos]) % MOD",
            commonError: "Division for removal",
            optimization: "Logarithmic exponentiation"
          }
        },
        {
          id: 12,
          title: "Count Number of Nice Subarrays",
          difficulty: "medium",
          link: "https://leetcode.com/problems/count-number-of-nice-subarrays/",
          description: "Builds on #11: Count tracking",
          details: {
            keyDifference: "if(isNice(arr[pos])) count++",
            commonError: "Window updates",
            optimization: "Two pointers"
          }
        }
      ]
    },
    {
      title: "Special Range Operations",
      questions: [
        {
          id: 13,
          title: "Range Median Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/840/D",
          description: "Base Pattern: Order statistics with Mo's",
          details: {
            keyDifference: "freq[] array for position tracking",
            commonError: "Median calculation",
            optimization: "Binary search"
          }
        },
        {
          id: 14,
          title: "Range Mode with Duplicates",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/940/F",
          description: "Builds on #13: Frequency of frequencies",
          details: {
            keyDifference: "freq_of_freq[] array",
            commonError: "Mode updates",
            optimization: "Bucket array"
          }
        },
        {
          id: 15,
          title: "Range AND Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/242/E",
          description: "Builds on #14: Bitwise AND",
          details: {
            keyDifference: "curr_and &= arr[pos]",
            commonError: "Remove operation",
            optimization: "Bit manipulation"
          }
        },
        {
          id: 16,
          title: "Range OR Query",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/620/E",
          description: "Builds on #15: Bitwise OR",
          details: {
            keyDifference: "curr_or |= arr[pos]",
            commonError: "Bit tracking",
            optimization: "Bit parallelism"
          }
        }
      ]
    },
    {
      title: "Update Operations",
      questions: [
        {
          id: 17,
          title: "Range Sum Query 2D - Mutable",
          difficulty: "hard",
          link: "https://leetcode.com/problems/range-sum-query-2d-mutable/",
          description: "Base Pattern: Mo's with updates",
          details: {
            keyDifference: "time parameter in sorting",
            commonError: "Update timing",
            optimization: "Block size adjustment"
          }
        },
        {
          id: 18,
          title: "Number of Submatrices That Sum to Target",
          difficulty: "hard",
          link: "https://leetcode.com/problems/number-of-submatrices-that-sum-to-target/",
          description: "Builds on #17: Value updates",
          details: {
            keyDifference: "curr_sum += new_val - old_val",
            commonError: "Update application",
            optimization: "Lazy updates"
          }
        },
        {
          id: 19,
          title: "Range XOR Queries",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/940/F",
          description: "Builds on #18: XOR updates",
          details: {
            keyDifference: "curr_xor ^= new_val ^ old_val",
            commonError: "XOR property",
            optimization: "Bit operations"
          }
        },
        {
          id: 20,
          title: "Count Distinct Elements in Range",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/786/C",
          description: "Builds on #19: Frequency updates",
          details: {
            keyDifference: "updateFreq(old_val, new_val)",
            commonError: "Count maintenance",
            optimization: "Delta tracking"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic range queries → Complex range operations",
      "Static arrays → Mutable arrays with updates",
      "Single element operations → Frequency-based queries",
      "Simple data types → Bitwise operations"
    ],
    coreTechniques: [
      "Square root decomposition",
      "Query sorting and processing",
      "Two-pointer technique",
      "Frequency tracking",
      "Bitwise operations"
    ],
    implementationGuidelines: [
      {
        title: "Basic MO's Algorithm Template",
        code: `
class MOQuery:
    def __init__(self, left, right, index):
        self.left = left
        self.right = right
        self.index = index

class MOSolver:
    def __init__(self, arr):
        self.arr = arr
        self.n = len(arr)
        self.block_size = int(math.sqrt(self.n))
        
    def compare_queries(self, q1, q2):
        if q1.left // self.block_size != q2.left // self.block_size:
            return q1.left // self.block_size - q2.left // self.block_size
        return q1.right - q2.right
        
    def process_queries(self, queries):
        # Sort queries by block and right endpoint
        queries.sort(key=functools.cmp_to_key(self.compare_queries))
        
        results = [0] * len(queries)
        curr_l, curr_r = 0, -1
        curr_answer = 0
        
        for q in queries:
            # Add/remove elements to match current query range
            while curr_l > q.left:
                curr_l -= 1
                self.add(curr_l)
            while curr_r < q.right:
                curr_r += 1
                self.add(curr_r)
            while curr_l < q.left:
                self.remove(curr_l)
                curr_l += 1
            while curr_r > q.right:
                self.remove(curr_r)
                curr_r -= 1
                
            results[q.index] = self.get_answer()
        
        return results
        `
      },
      {
        title: "Range Update Template",
        code: `
class RangeUpdateSolver:
    def __init__(self, arr):
        self.arr = arr
        self.n = len(arr)
        self.block_size = int(math.sqrt(self.n))
        self.blocks = [0] * ((self.n + self.block_size - 1) // self.block_size)
        self.lazy = [0] * len(self.blocks)
        
    def update_range(self, left, right, val):
        left_block = left // self.block_size
        right_block = right // self.block_size
        
        if left_block == right_block:
            self.update_single_block(left, right, val)
        else:
            # Update partial blocks
            self.update_single_block(left, (left_block + 1) * self.block_size - 1, val)
            self.update_single_block(right_block * self.block_size, right, val)
            
            # Update complete blocks
            for block in range(left_block + 1, right_block):
                self.lazy[block] += val
        `
      }
    ],
    testingStrategy: [
      "Test with various array sizes and query counts",
      "Include edge cases (empty arrays, single-element queries)",
      "Test with different types of operations (sum, XOR, AND, OR)",
      "Verify correctness with updates between queries",
      "Benchmark performance with large inputs"
    ],
    commonPitfalls: [
      "Not handling corner cases in block boundaries",
      "Incorrect order of add/remove operations",
      "Integer overflow in cumulative operations",
      "Inefficient data structure choices for specific operations",
      "Not considering query order optimization"
    ]
  }
}

