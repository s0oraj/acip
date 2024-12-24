import { SubPattern } from '@/types';

export const basicWindowOperations: SubPattern = {
  title: "Basic Window Operations",
  questions: [
    {
      id: 1,
      title: "Sliding Window Maximum",
      difficulty: "hard",
      link: "https://leetcode.com/problems/sliding-window-maximum/",
      description: "Base Pattern: Basic monotonic queue",
      details: {
        keyDifference: "Base Pattern: Basic monotonic queue",
        commonError: "Not removing out-of-window elements",
        optimization: "Single pass through array"
      }
    },
    {
      id: 2,
      title: "Maximum Window Average",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-average-subarray-i/",
      description: "Builds on #1: Changes to average calculation",
      details: {
        keyDifference: "Running sum maintenance",
        commonError: "Float precision issues",
        optimization: "Avoid redundant calculations"
      }
    },
    {
      id: 3,
      title: "Window Maximum Product",
      difficulty: "easy",
      link: "https://leetcode.com/problems/maximum-product-of-three-numbers/",
      description: "Builds on #2: Handle negative numbers",
      details: {
        keyDifference: "Track both max and min deques",
        commonError: "Missing negative number cases",
        optimization: "Two-ended tracking"
      }
    },
    {
      id: 4,
      title: "Window Maximum GCD",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/maximum-gcd-of-siblings-of-a-binary-tree/1",
      description: "Builds on #3: GCD property maintenance",
      details: {
        keyDifference: "GCD calculation in window",
        commonError: "Unnecessary GCD recalculations",
        optimization: "GCD property optimization"
      }
    },
    {
      id: 5,
      title: "K-Length Window Maximum Sum",
      difficulty: "medium",
      link: "https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/",
      description: "Builds on #4: Adds uniqueness constraint",
      details: {
        keyDifference: "Hash set for uniqueness",
        commonError: "Not maintaining unique set",
        optimization: "Sliding window with set"
      }
    }
  ]
};

