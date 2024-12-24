// data/patterns/counting/animations/window-based.ts
export const windowBasedAnimation = {
  id: "window-based",
  title: "Window-Based Counting",
  description: "Understanding sliding window counting techniques",
  steps: [
    {
      description: "Initialize window counters",
      code: `window_count = {}
window_size = k
left = right = 0`,
      visualization: {
        array: [1, 2, 3, 4, 5, 6],
        window: { start: 0, end: 0 },
        counter: {}
      }
    },
    {
      description: "Build initial window",
      code: `while right < window_size:
    num = nums[right]
    window_count[num] = window_count.get(num, 0) + 1
    right += 1`,
      visualization: {
        array: [1, 2, 3, 4, 5, 6],
        window: { start: 0, end: 3 },
        counter: { "1": 1, "2": 1, "3": 1 }
      }
    },
    {
      description: "Slide window and update counts",
      code: `# Remove left element
window_count[nums[left]] -= 1
if window_count[nums[left]] == 0:
    del window_count[nums[left]]
left += 1

# Add right element
window_count[nums[right]] = window_count.get(nums[right], 0) + 1
right += 1`,
      visualization: {
        array: [1, 2, 3, 4, 5, 6],
        window: { start: 1, end: 4 },
        counter: { "2": 1, "3": 1, "4": 1 },
        arrows: { remove: 0, add: 4 }
      }
    }
  ]
};