// data/patterns/counting/animations/frequency-distribution.ts
export const frequencyDistributionAnimation = {
  id: "frequency-distribution",
  title: "Frequency Distribution Analysis",
  description: "Learn how to analyze frequency distributions and patterns",
  steps: [
    {
      description: "Count frequencies of each element",
      code: `freq = {}
for num in nums:
    freq[num] = freq.get(num, 0) + 1`,
      visualization: {
        elements: [1, 2, 2, 3, 3, 3, 4, 4],
        frequencies: { "1": 1, "2": 2, "3": 3, "4": 2 }
      }
    },
    {
      description: "Track frequency of frequencies",
      code: `freq_of_freq = {}
for count in freq.values():
    freq_of_freq[count] = freq_of_freq.get(count, 0) + 1`,
      visualization: {
        frequencies: { "1": 1, "2": 2, "3": 3, "4": 2 },
        freqOfFreq: { "1": 1, "2": 2, "3": 1 }
      }
    },
    {
      description: "Analyze distribution patterns",
      code: `# Check if frequencies follow a pattern
max_freq = max(freq.values())
min_freq = min(freq.values())
is_uniform = max_freq == min_freq`,
      visualization: {
        distribution: [
          { freq: 1, count: 1 },
          { freq: 2, count: 2 },
          { freq: 3, count: 1 }
        ]
      }
    }
  ]
};