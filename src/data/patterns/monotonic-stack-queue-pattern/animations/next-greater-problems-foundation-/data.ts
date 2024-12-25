// src/data/patterns/monotonic-stack-queue-pattern/animations/next-greater-problems-foundation-/data.ts
import { Animation } from '../types';

export const patterns = {
  basic: {
    data: [2, 1, 4, 3, 6, 5],
    icon: 'stack',
    title: "Next Greater",
    desc: "Basic Stack Pattern",
    color: "#4F46E5"
  },
  circular: {
    data: [5, 4, 3, 2, 1],
    icon: 'repeat',
    title: "Circular Array",
    desc: "Wrap-around Search",
    color: "#7C3AED"
  },
  optimized: {
    data: [1, 3, 2, 4, 6, 5],
    icon: 'zap',
    title: "Optimized",
    desc: "Early Exit",
    color: "#2563EB"
  }
};

export const nextGreaterAnimation = {
  id: "next-greater",
  title: "Next Greater Element",
  description: "Find the next greater element for each array position using a monotonic stack",
  steps: [
    {
      title: "Stack Operations",
      description: "Using monotonic decreasing stack to find next greater elements",
      array: patterns.basic.data,
      phases: patterns.basic.data.map((val, index) => ({
        description: index === 0 
          ? "Initialize empty stack"
          : `Process element ${val}`,
        activeIndex: index,
        highlightIndices: [index],
        counter: {
          stack: patterns.basic.data
            .slice(0, index + 1)
            .reduce((stack, curr) => {
              while (stack.length && stack[stack.length - 1] < curr) {
                stack.pop();
              }
              stack.push(curr);
              return stack;
            }, []),
          result: patterns.basic.data
            .slice(0, index + 1)
            .reduce((res, curr, i, arr) => {
              const nextGreater = arr.slice(i + 1).find(x => x > curr) || -1;
              res[i] = nextGreater;
              return res;
            }, Array(patterns.basic.data.length).fill(-1))
        },
        code: index === 0
          ? "stack = []"
          : `while stack and stack[-1] < ${val}:
    result[stack.pop()] = ${val}
stack.append(${val})`
      }))
    }
  ],
  counters: ["stack", "result"]
};
