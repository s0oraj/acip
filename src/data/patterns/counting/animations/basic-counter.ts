// data/patterns/counting/animations/basic-counter.ts
export const basicCounterAnimation = {
  id: "basic-counter",
  title: "Basic Counter Operations",
  description: "Understanding how to count and track element frequencies",
  steps: [
    {
      description: "Initialize an empty counter array or hash map",
      code: `// Using array (if numbers are within known range)
counter = [0] * (max_value + 1)

// Using hash map (for any values)
counter = {}`,
      visualization: {
        initialState: [],
        elements: [3, 1, 4, 1, 5, 9, 2, 6],
        highlightIndices: []
      }
    },
    {
      description: "Iterate through array and count each element",
      code: `for num in nums:
    counter[num] += 1  # or counter[num] = counter.get(num, 0) + 1`,
      visualization: {
        elements: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: { "1": 2, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "9": 1 },
        highlightIndices: [0, 1]
      }
    },
    {
      description: "Query the counter for frequencies",
      code: `# Check frequency of a number
frequency = counter[num]

# Find most frequent element
most_frequent = max(counter.items(), key=lambda x: x[1])[0]`,
      visualization: {
        elements: [3, 1, 4, 1, 5, 9, 2, 6],
        counter: { "1": 2, "2": 1, "3": 1, "4": 1, "5": 1, "6": 1, "9": 1 },
        highlightIndices: [],
        highlightValue: 1  // Most frequent element
      }
    }
  ]
};
