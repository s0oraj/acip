import { SubPattern } from '@/types';

export const gridBasedSimulations: SubPattern = {
  title: "Grid-Based Simulations",
  questions: [
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
    }
  ]
};

