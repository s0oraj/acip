export const patterns = {
  competitive: {
    data: [3, 5, 2, 6, 1, 4],
    k: 3,
    icon: 'trophy',
    title: "Competitive Subsequence",
    desc: "Most Competitive K Elements",
    color: "#4F46E5",
    questions: [
      {
        title: "Most Competitive Subsequence",
        link: "https://leetcode.com/problems/find-the-most-competitive-subsequence/",
        difficulty: "medium",
        key: "while stack and len(stack) + rem > k and stack[-1] > num",
        error: "Remaining elements",
        optimization: "Early termination"
      }
    ]
  },
  digits: {
    data: [1, 4, 3, 2, 5, 2],
    k: 2,
    icon: 'binary',
    title: "Remove K Digits",
    desc: "Smallest After Removal",
    color: "#7C3AED",
    questions: [
      {
        title: "Remove K Digits",
        link: "https://leetcode.com/problems/remove-k-digits/",
        difficulty: "medium",
        key: "while k > 0 and stack and stack[-1] > num",
        error: "Leading zeros",
        optimization: "Digit counting"
      }
    ]
  },
  ramp: {
    data: [6, 3, 4, 2, 7, 5],
    icon: 'trending-up',
    title: "Width Ramp",
    desc: "Maximum Width Analysis",
    color: "#2563EB",
    questions: [
      {
        title: "Maximum Width Ramp",
        link: "https://leetcode.com/problems/maximum-width-ramp/",
        difficulty: "medium",
        key: "while stack and nums[stack[-1]] <= nums[i]",
        error: "Width calculation",
        optimization: "Binary search"
      }
    ]
  },
  cost: {
    data: [4, 2, 5, 3, 1, 6],
    icon: 'chart',
    title: "Cost Tree",
    desc: "Minimum Cost Path",
    color: "#DC2626",
    questions: [
      {
        title: "Minimum Cost Tree",
        link: "https://codeforces.com/problemset/problem/1313/C",
        difficulty: "medium",
        key: "cost = min(stack[-1], nums[i])",
        error: "Cost propagation",
        optimization: "DP combination"
      }
    ]
  },
  span: {
    data: [100, 80, 60, 70, 60, 75, 85],
    icon: 'bar-chart',
    title: "Stock Span",
    desc: "Price Span Analysis",
    color: "#059669",
    questions: [
      {
        title: "Stock Span Problem",
        link: "https://leetcode.com/problems/online-stock-span/",
        difficulty: "medium",
        key: "span = i - prev_greater[i]",
        error: "Consecutive counting",
        optimization: "Price-span pairs"
      }
    ]
  }
};

export const competitionStackAnimation = {
  id: "competition-stack",
  title: "Competition Stack Operations",
  description: "Visualize different competition-based stack operations",
  steps: patterns.competitive.data.map((_, index) => ({
    title: "Stack Operations",
    description: "Visualizing stack-based computations",
    array: patterns.competitive.data,
    phases: [{
      description: index === 0 
        ? "Initialize empty stack" 
        : `Process element at index ${index}`,
      activeIndex: index,
      highlightIndices: [index],
      counter: {
        stack: patterns.competitive.data
          .slice(0, index + 1)
          .reduce((acc, curr, i, arr) => {
            while (acc.length && acc[acc.length - 1] > curr) {
              acc.pop();
            }
            acc.push(curr);
            return acc;
          }, []),
        result: patterns.competitive.data
          .slice(0, index + 1)
      },
      code: index === 0
        ? "stack = []"
        : `while stack and stack[-1] > ${patterns.competitive.data[index]}:
    stack.pop()
stack.append(${patterns.competitive.data[index]})`
    }]
  })),
  counters: ["stack", "result"]
};
