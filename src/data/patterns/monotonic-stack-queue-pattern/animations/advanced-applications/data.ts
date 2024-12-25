export const patterns = {
  histogram: {
    data: [2, 1, 5, 6, 2, 3],
    icon: 'bar-chart-2',
    title: "Rectangle Histogram",
    desc: "Area Calculation",
    color: "#4F46E5",
    questions: [
      {
        title: "Rectangle Histogram",
        link: "https://leetcode.com/problems/largest-rectangle-in-histogram/",
        difficulty: "hard",
        key: "area = height * (right - left - 1)",
        error: "Boundary handling",
        optimization: "Sentinel values"
      }
    ]
  },
  tree: {
    data: [3, 2, 1, 6, 0, 5],
    icon: 'git-fork',
    title: "Maximum Binary Tree",
    desc: "Tree Construction",
    color: "#7C3AED",
    questions: [
      {
        title: "Maximum Binary Tree",
        link: "https://leetcode.com/problems/maximum-binary-tree/",
        difficulty: "medium",
        key: "node.left = construct(left); node.right = construct(right)",
        error: "Range splitting",
        optimization: "Stack construction"
      }
    ]
  },
  subarray: {
    data: [3, 1, 2, 4, 1, 5],
    icon: 'sigma',
    title: "Subarray Minimums",
    desc: "Contribution Calculation",
    color: "#2563EB",
    questions: [
      {
        title: "Sum of Subarray Minimums",
        link: "https://leetcode.com/problems/sum-of-subarray-minimums/",
        difficulty: "medium",
        key: "sum += val * left * right",
        error: "Contribution range",
        optimization: "MOD handling"
      }
    ]
  },
  score: {
    data: [1, 4, 3, 7, 4, 5],
    icon: 'award',
    title: "Maximum Score",
    desc: "Scoring System",
    color: "#DC2626",
    questions: [
      {
        title: "Maximum Score Good Array",
        link: "https://leetcode.com/problems/maximum-score-of-a-good-array/",
        difficulty: "hard",
        key: "score = min(nums[left], nums[right]) * (right - left)",
        error: "Score boundaries",
        optimization: "Two pointer sweep"
      }
    ]
  },
  rectangle: {
    data: [[1, 0, 1, 0], [1, 0, 1, 1], [1, 1, 1, 1]],
    icon: 'square',
    title: "Maximal Rectangle",
    desc: "2D Processing",
    color: "#059669",
    questions: [
      {
        title: "Maximal Rectangle",
        link: "https://leetcode.com/problems/maximal-rectangle/",
        difficulty: "hard",
        key: "heights[j] = (heights[j] + 1 if matrix[i][j] == '1' else 0)",
        error: "Height reset",
        optimization: "Height caching"
      }
    ]
  }
};

export const advancedApplicationsAnimation = {
  id: "advanced-applications",
  title: "Advanced Stack Applications",
  description: "Visualize advanced stack-based problems and their solutions",
  steps: Array(6).fill(0).map((_, index) => ({
    title: "Advanced Operations",
    description: "Visualizing complex stack operations",
    array: patterns.histogram.data,
    phases: [{
      description: `Step ${index + 1}`,
      activeIndex: index,
      highlightIndices: [index],
      counter: {
        stack: [],
        result: []
      },
      code: "// Advanced stack operation"
    }]
  }))
};
