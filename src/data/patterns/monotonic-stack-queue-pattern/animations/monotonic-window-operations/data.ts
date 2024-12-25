// src/data/patterns/monotonic-stack-queue-pattern/animations/monotonic-window-operations/data.ts
export const patterns = {
  max: {
    data: [1, 3, -1, -3, 5, 3, 6, 7],
    windowSize: 3,
    icon: 'maximize',
    title: "Window Maximum",
    desc: "Sliding Window Max",
    color: "#4F46E5"
  },
  min: {
    data: [5, 3, 4, 1, 2, 6, 2, 3],
    windowSize: 3,
    icon: 'minimize',
    title: "Window Minimum",
    desc: "Sliding Window Min",
    color: "#7C3AED"
  },
  avg: {
    data: [1, 10, 3, 5, 2, 8, 4, 6],
    windowSize: 4,
    icon: 'calculator',
    title: "Window Average",
    desc: "Fixed Window Avg",
    color: "#2563EB"
  },
  diff: {
    data: [8, 2, 4, 7, 1, 5, 3, 6],
    windowSize: 3,
    limit: 4,
    icon: 'move-horizontal',
    title: "Difference Limit",
    desc: "Max-Min Difference",
    color: "#DC2626"
  },
  sum: {
    data: [2, -1, 2, 1, -3, 4, 3, -2],
    targetSum: 3,
    icon: 'plus',
    title: "Dynamic Sum",
    desc: "Target Sum Window",
    color: "#059669"
  }
};

export const windowOperationsAnimation = {
  id: "window-operations",
  title: "Monotonic Window Operations",
  description: "Visualize different sliding window operations using monotonic deques",
  steps: patterns.max.data.map((_, index) => ({
    title: "Window Operations",
    description: "Visualizing window-based computations",
    array: patterns.max.data,
    phases: [{
      description: index === 0 
        ? "Initialize window" 
        : `Process element at index ${index}`,
      activeIndex: index,
      highlightIndices: Array.from(
        { length: patterns.max.windowSize }, 
        (_, i) => Math.max(0, index - i)
      ).filter(i => i >= 0),
      counter: {
        window: patterns.max.data.slice(
          Math.max(0, index - patterns.max.windowSize + 1),
          index + 1
        ),
        result: patterns.max.data
          .slice(0, index + 1)
          .reduce((acc, _, i, arr) => {
            if (i < patterns.max.windowSize - 1) return acc;
            const windowMax = Math.max(
              ...arr.slice(i - patterns.max.windowSize + 1, i + 1)
            );
            return [...acc, windowMax];
          }, [])
      },
      code: index === 0
        ? "deque = collections.deque()"
        : `while deque and nums[deque[-1]] < nums[${index}]:
    deque.pop()
deque.append(${index})
if deque[0] <= ${index - patterns.max.windowSize}:
    deque.popleft()`
    }])
  })),
  counters: ["window", "result"]
};
