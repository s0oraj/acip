import { Animation } from '@/data/types';

export const basicCounterAnimation: Animation = {
  id: "basic-counter",
  title: "Basic Counter Operations",
  description: "Understanding different types of counting operations",
  counters: [
    {
      title: "Single Value Counter",
      description: "Count occurrences of each element in an array",
      data: [
        {
          description: "Initialize empty counter",
          array: [4, 1, 2, 1, 2],
          counter: {},
          code: "counter = {}"
        },
        {
          description: "Process first element (4)",
          array: [4, 1, 2, 1, 2],
          activeIndex: 0,
          counter: {"4": 1},
          code: "counter[4] = 1"
        },
        {
          description: "Process second element (1)",
          array: [4, 1, 2, 1, 2],
          activeIndex: 1,
          counter: {"4": 1, "1": 1},
          code: "counter[1] = 1"
        },
        {
          description: "Process remaining elements",
          array: [4, 1, 2, 1, 2],
          counter: {"4": 1, "1": 2, "2": 2},
          code: "# Process elements 2, 1, 2"
        }
      ]
    },
    {
      title: "Conditional Counter",
      description: "Count occurrences of even elements in an array",
      data: [
        {
          description: "Initialize empty counter",
          array: [3, 2, 4, 1, 6],
          counter: {},
          code: "counter = {}"
        },
        {
          description: "Skip odd element (3)",
          array: [3, 2, 4, 1, 6],
          activeIndex: 0,
          counter: {},
          code: "# 3 is odd, skip"
        },
        {
          description: "Process even element (2)",
          array: [3, 2, 4, 1, 6],
          activeIndex: 1,
          counter: {"2": 1},
          code: "if 2 % 2 == 0:\n    counter[2] = 1"
        },
        {
          description: "Process remaining elements",
          array: [3, 2, 4, 1, 6],
          counter: {"2": 1, "4": 1, "6": 1},
          code: "# Process 4 (even), skip 1 (odd), process 6 (even)"
        }
      ]
    },
    {
      title: "Multi-Value Counter",
      description: "Count occurrences of consecutive pairs in a string",
      data: [
        {
          description: "Initialize empty set",
          array: ['A', 'B', 'A', 'C', 'C', 'B'],
          counter: {},
          code: "seen = set()"
        },
        {
          description: "Process first pair (AB)",
          array: ['A', 'B', 'A', 'C', 'C', 'B'],
          activeIndex: 0,
          highlightIndices: [0, 1],
          counter: {"AB": 1},
          code: "seen.add('AB')"
        },
        {
          description: "Process second pair (BA)",
          array: ['A', 'B', 'A', 'C', 'C', 'B'],
          activeIndex: 1,
          highlightIndices: [1, 2],
          counter: {"AB": 1, "BA": 1},
          code: "seen.add('BA')"
        },
        {
          description: "Process remaining pairs",
          array: ['A', 'B', 'A', 'C', 'C', 'B'],
          counter: {"AB": 1, "BA": 1, "AC": 1, "CC": 1, "CB": 1},
          code: "# Process AC, CC, CB"
        }
      ]
    }
  ]
};
