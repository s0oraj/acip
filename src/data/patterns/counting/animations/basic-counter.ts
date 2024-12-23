// src/data/patterns/counting/animations/basic-counter.ts
export const basicCounterAnimation = {
  id: "basic-counter",
  title: "Basic Counter Operations",
  description: "Understanding how to count and track element frequencies",
  steps: [
    {
      title: "Initialize Counter",
      description: "Create an empty hash map to store element frequencies",
      code: "counter = {}",
      array: [3, 1, 4, 1, 5, 9, 2, 6],
      phases: [
        {
          description: "Start with an empty counter",
          counter: {},
          code: "counter = {}"
        }
      ]
    },
    {
      title: "Count First Element",
      description: "Process the first element and update counter",
      array: [3, 1, 4, 1, 5, 9, 2, 6],
      phases: [
        {
          description: "Add first element (3) to counter",
          activeIndex: 0,
          counter: {"3": 1},
          code: "counter[3] = 1"
        }
      ]
    },
    {
      title: "Process Array Elements",
      description: "Iterate through array updating frequencies",
      array: [3, 1, 4, 1, 5, 9, 2, 6],
      phases: [
        {
          description: "Process element at index 1",
          activeIndex: 1,
          highlightIndices: [1],
          counter: {"3": 1, "1": 1},
          code: "counter[1] = counter.get(1, 0) + 1"
        },
        {
          description: "Found duplicate element (1)",
          activeIndex: 3,
          highlightIndices: [1, 3],
          counter: {"3": 1, "1": 2},
          code: "counter[1] += 1  # Increment existing count"
        }
      ]
    },
    {
      title: "Final Counter State",
      description: "Complete frequency count for all elements",
      array: [3, 1, 4, 1, 5, 9, 2, 6],
      phases: [
        {
          description: "Final frequency distribution",
          counter: {
            "1": 2, "2": 1, "3": 1, "4": 1,
            "5": 1, "6": 1, "9": 1
          },
          code: `# Final counter state
print(counter)  # {1: 2, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 9: 1}`
        }
      ]
    }
  ]
};
