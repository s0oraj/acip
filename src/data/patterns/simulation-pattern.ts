import { Pattern } from '../types';

export const simulationPattern: Pattern = {
  id: 3,
  title: "Simulation Pattern",
  description: "Learn to implement step-by-step simulation algorithms for complex problem-solving.",
  questions: [
    {
      id: 1,
      title: "Array Transformation",
      difficulty: "easy",
      link: "https://leetcode.com/problems/array-transformation/",
      description: "Base Pattern: In-place array updates. Key Operation: arr[i] = compare(arr[i-1], arr[i+1])",
      details: {
        keyDifference: "In-place array updates",
        commonError: "Not handling boundaries",
        optimization: "Single pass modification"
      }
    },
    {
      id: 2,
      title: "Replace Elements with Greatest Right",
      difficulty: "easy",
      link: "https://leetcode.com/problems/replace-elements-with-greatest-element-on-right-side/",
      description: "Builds on #1: Directional scanning. Key Difference: Running maximum tracking",
      details: {
        keyDifference: "Running maximum tracking",
        commonError: "Wrong scan direction",
        optimization: "Reverse iteration eliminates extra space"
      }
    },
    {
      id: 3,
      title: "Apply Operations to Array",
      difficulty: "easy",
      link: "https://leetcode.com/problems/apply-operations-to-an-array/",
      description: "Builds on #2: Pairwise operations",
      details: {
        keyDifference: "Two-element state change",
        commonError: "Not handling duplicates",
        optimization: "In-place modification"
      }
    },
    {
      id: 4,
      title: "Minimum Operations to Make Array Alternating",
      difficulty: "medium",
      link: "https://leetcode.com/problems/minimum-operations-to-make-the-array-alternating/",
      description: "Builds on #3: Pattern-based validation",
      details: {
        keyDifference: "Frequency counting for decisions",
        commonError: "Not considering all valid patterns",
        optimization: "Use two frequency maps"
      }
    },
    {
      id: 5,
      title: "Beautiful Array",
      difficulty: "hard",
      link: "https://leetcode.com/problems/beautiful-array/",
      description: "Builds on #4: Complex pattern creation",
      details: {
        keyDifference: "Divide-and-conquer transformation",
        commonError: "Invalid subarray combinations",
        optimization: "Memoize subpatterns"
      }
    },
    {
      id: 6,
      title: "Water Bottles",
      difficulty: "easy",
      link: "https://leetcode.com/problems/water-bottles/",
      description: "Base Pattern: Resource exchange cycle",
      details: {
        keyDifference: "Resource exchange cycle",
        commonError: "Incorrect remainder handling",
        optimization: "Mathematical formula exists"
      }
    },
    {
      id: 7,
      title: "Cells in Range on Excel Sheet",
      difficulty: "easy",
      link: "https://leetcode.com/problems/cells-in-a-range-on-an-excel-sheet/",
      description: "Builds on #6: 2D coordinate simulation",
      details: {
        keyDifference: "Character-based increments",
        commonError: "Wrong range boundaries",
        optimization: "Direct formula for cell count"
      }
    },
    {
      id: 8,
      title: "Maximum Number of Eaten Apples",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-number-of-eaten-apples/",
      description: "Builds on #7: Time-based expiration",
      details: {
        keyDifference: "Priority queue for freshness",
        commonError: "Not removing expired items",
        optimization: "Lazy deletion of expired"
      }
    },
    {
      id: 9,
      title: "Distribute Cookies",
      difficulty: "medium",
      link: "https://leetcode.com/problems/fair-distribution-of-cookies/",
      description: "Builds on #8: Resource distribution",
      details: {
        keyDifference: "Backtracking allocation",
        commonError: "Missing distribution combinations",
        optimization: "Branch pruning"
      }
    },
    {
      id: 10,
      title: "Construct Target Array With Multiple Sums",
      difficulty: "hard",
      link: "https://leetcode.com/problems/construct-target-array-with-multiple-sums/",
      description: "Builds on #9: Reverse simulation",
      details: {
        keyDifference: "Work backwards from target",
        commonError: "Integer overflow",
        optimization: "Use modulo for large numbers"
      }
    },
    {
      id: 11,
      title: "Design Tic-Tac-Toe",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-tic-tac-toe/",
      description: "Base Pattern: Grid state tracking",
      details: {
        keyDifference: "Track rows, cols, diagonals",
        commonError: "Redundant win checking",
        optimization: "O(1) move validation"
      }
    },
    {
      id: 12,
      title: "Minesweeper",
      difficulty: "medium",
      link: "https://leetcode.com/problems/minesweeper/",
      description: "Builds on #11: Cell revelation rules",
      details: {
        keyDifference: "Recursive revelation",
        commonError: "Invalid boundary checks",
        optimization: "Iterative BFS instead of DFS"
      }
    },
    {
      id: 13,
      title: "Game of Life",
      difficulty: "medium",
      link: "https://leetcode.com/problems/game-of-life/",
      description: "Builds on #12: Neighbor state rules",
      details: {
        keyDifference: "Simultaneous updates",
        commonError: "Premature state updates",
        optimization: "Bit manipulation for states"
      }
    },
    {
      id: 14,
      title: "Design Excel Sum Formula",
      difficulty: "hard",
      link: "https://leetcode.com/problems/design-excel-sum-formula/",
      description: "Builds on #13: Cell dependencies",
      details: {
        keyDifference: "Topological evaluation",
        commonError: "Circular references",
        optimization: "Cache intermediate results"
      }
    },
    {
      id: 15,
      title: "Design Snake Game",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-snake-game/",
      description: "Builds on #14: Moving entity",
      details: {
        keyDifference: "Queue-based movement",
        commonError: "Collision detection timing",
        optimization: "Set for body positions"
      }
    },
    {
      id: 16,
      title: "Design Parking System",
      difficulty: "easy",
      link: "https://leetcode.com/problems/design-parking-system/",
      description: "Base Pattern: Counter management",
      details: {
        keyDifference: "Counter management",
        commonError: "Not checking capacity",
        optimization: "Use array instead of map"
      }
    },
    {
      id: 17,
      title: "Design Hit Counter",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-hit-counter/",
      description: "Builds on #16: Time window tracking",
      details: {
        keyDifference: "Circular buffer concept",
        commonError: "Stale data retention",
        optimization: "Fixed size array reuse"
      }
    },
    {
      id: 18,
      title: "Design File System",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-file-system/",
      description: "Builds on #17: Path-based operations",
      details: {
        keyDifference: "Trie-like structure",
        commonError: "Missing parent validation",
        optimization: "Path component caching"
      }
    },
    {
      id: 19,
      title: "Design a Food Rating System",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-a-food-rating-system/",
      description: "Builds on #18: Multi-index lookup",
      details: {
        keyDifference: "Sorted maintenance",
        commonError: "Inconsistent state updates",
        optimization: "Use TreeMap/SortedSet"
      }
    },
    {
      id: 20,
      title: "Design Movie Rental System",
      difficulty: "hard",
      link: "https://leetcode.com/problems/design-movie-rental-system/",
      description: "Builds on #19: Complex state machine",
      details: {
        keyDifference: "Multiple sorted views",
        commonError: "Search optimization missing",
        optimization: "Maintain multiple indices"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic array operations → Complex system simulations",
      "Single state changes → Multi-state interactions",
      "Static simulations → Dynamic, time-based simulations",
      "Simple resource management → Complex resource allocation"
    ],
    coreTechniques: [
      "In-place array modifications",
      "State machine implementations",
      "Grid-based simulations",
      "Resource allocation algorithms",
      "Time-based event handling"
    ],
    implementationGuidelines: [
      {
        title: "State Management",
        code: `
class StateMachine:
    def __init__(self):
        self.state = 'INITIAL'
        self.transitions = {
            'INITIAL': {'start': 'RUNNING'},
            'RUNNING': {'pause': 'PAUSED', 'stop': 'STOPPED'},
            'PAUSED': {'resume': 'RUNNING', 'stop': 'STOPPED'},
            'STOPPED': {'reset': 'INITIAL'}
        }
    
    def transition(self, action):
        if action in self.transitions[self.state]:
            self.state = self.transitions[self.state][action]
            return True
        return False
        `
      }
    ],
    testingStrategy: [
      "Test edge cases (empty input, maximum values)",
      "Test all possible state transitions",
      "Test time-based scenarios with various intervals",
      "Test resource allocation with different constraints",
      "Test system design implementations with concurrent operations"
    ]
  }
};

