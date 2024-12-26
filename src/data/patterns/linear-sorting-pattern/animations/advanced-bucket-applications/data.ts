import { Animation } from '@/types';

export const advancedBucketAnimation: Animation = {
  id: "advanced-bucket",
  title: "Advanced Bucket Applications",
  description: "Exploring advanced applications of bucket sort",
  steps: [
    {
      title: "Maximum Gap",
      description: "Find the maximum gap between sorted elements",
      array: [3, 6, 9, 1],
      code: `
function maximumGap(nums) {
  const n = nums.length;
  if (n < 2) return 0;

  const minNum = Math.min(...nums);
  const maxNum = Math.max(...nums);
  
  const bucketSize = Math.max(1, Math.floor((maxNum - minNum) / (n - 1)));
  const buckets = Array.from({length: n}, () => ({min: Infinity, max: -Infinity}));

  for (const num of nums) {
    const bucketIndex = Math.floor((num - minNum) / bucketSize);
    buckets[bucketIndex].min = Math.min(buckets[bucketIndex].min, num);
    buckets[bucketIndex].max = Math.max(buckets[bucketIndex].max, num);
  }

  let maxGap = 0;
  let previousMax = minNum;
  for (const bucket of buckets) {
    if (bucket.min === Infinity) continue;
    maxGap = Math.max(maxGap, bucket.min - previousMax);
    previousMax = bucket.max;
  }

  return maxGap;
}
      `,
    },
    {
      title: "Contains Duplicate III",
      description: "Check if there are two distinct indices i and j such that abs(nums[i] - nums[j]) <= t and abs(i - j) <= k",
      array: [1, 2, 3, 1],
      k: 3,
      t: 0,
      code: `
function containsNearbyAlmostDuplicate(nums, k, t) {
  if (t < 0) return false;
  
  const n = nums.length;
  const buckets = new Map();
  const w = t + 1;

  for (let i = 0; i < n; i++) {
    const bucketId = Math.floor(nums[i] / w);
    
    if (buckets.has(bucketId)) return true;
    if (buckets.has(bucketId - 1) && Math.abs(nums[i] - buckets.get(bucketId - 1)) < w) return true;
    if (buckets.has(bucketId + 1) && Math.abs(nums[i] - buckets.get(bucketId + 1)) < w) return true;
    
    buckets.set(bucketId, nums[i]);
    if (i >= k) buckets.delete(Math.floor(nums[i - k] / w));
  }
  
  return false;
}
      `,
    },
    {
      title: "Find Median from Data Stream",
      description: "Design a data structure that supports adding integers and finding the median",
      operations: [
        ["addNum", 1],
        ["addNum", 2],
        ["findMedian", null],
        ["addNum", 3],
        ["findMedian", null]
      ],
      code: `
class MedianFinder {
  constructor() {
    this.small = new MaxPriorityQueue();
    this.large = new MinPriorityQueue();
  }

  addNum(num) {
    if (this.small.size() === 0 || num < this.small.front().element) {
      this.small.enqueue(num);
    } else {
      this.large.enqueue(num);
    }
    
    if (this.small.size() > this.large.size() + 1) {
      this.large.enqueue(this.small.dequeue().element);
    } else if (this.large.size() > this.small.size()) {
      this.small.enqueue(this.large.dequeue().element);
    }
  }

  findMedian() {
    if (this.small.size() === this.large.size()) {
      return (this.small.front().element + this.large.front().element) / 2;
    } else {
      return this.small.front().element;
    }
  }
}
      `,
    },
  ],
};


