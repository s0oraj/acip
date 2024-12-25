export const patterns = {
  competitive: {
    data: [3, 5, 2, 6, 1, 4],
    k: 3,
    icon: 'trophy',
    title: "Competitive Subsequence",
    desc: "Most Competitive K Elements",
    color: "#4F46E5"
  },
  digits: {
    data: [1, 4, 3, 2, 5, 2],
    k: 2,
    icon: 'binary',
    title: "Remove K Digits",
    desc: "Smallest After Removal",
    color: "#7C3AED"
  },
  ramp: {
    data: [6, 3, 4, 2, 7, 5],
    icon: 'trending-up',
    title: "Width Ramp",
    desc: "Maximum Width Analysis",
    color: "#2563EB"
  },
  cost: {
    data: [4, 2, 5, 3, 1, 6],
    icon: 'chart',
    title: "Cost Tree",
    desc: "Minimum Cost Path",
    color: "#DC2626"
  },
  span: {
    data: [100, 80, 60, 70, 60, 75, 85],
    icon: 'bar-chart',
    title: "Stock Span",
    desc: "Price Span Analysis",
    color: "#059669"
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
