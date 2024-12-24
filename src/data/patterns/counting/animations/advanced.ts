// data/patterns/counting/animations/advanced.ts
export const advancedAnimation = {
  id: "advanced",
  title: "Advanced Counting Techniques",
  description: "Complex counting patterns and optimizations",
  steps: [
    {
      description: "Pair-based counting",
      code: `# Count pairs with difference k
count = 0
freq = {}
for num in nums:
    count += freq.get(num - k, 0) + freq.get(num + k, 0)
    freq[num] = freq.get(num, 0) + 1`,
      visualization: {
        array: [1, 5, 3, 4, 2],
        k: 2,
        pairs: [
          { nums: [1, 3], diff: 2 },
          { nums: [3, 5], diff: 2 }
        ]
      }
    },
    {
      description: "Group-based counting",
      code: `# Count elements by group property
groups = {}
for num in nums:
    group_key = calculate_group(num)
    groups[group_key] = groups.get(group_key, 0) + 1`,
      visualization: {
        elements: [12, 21, 31, 14, 41],
        groups: {
          "sum3": [12, 21],
          "sum4": [31, 13],
          "sum5": [41, 14]
        }
      }
    },
    {
      description: "Pattern matching with state",
      code: `# Track state using bit manipulation
state = 0
for num in nums:
    state ^= (1 << num)
    if is_valid_state(state):
        count += 1`,
      visualization: {
        array: [1, 2, 1, 3, 2, 3],
        states: [
          "001",
          "011",
          "010",
          "110",
          "100",
          "000"
        ]
      }
    }
  ]
};