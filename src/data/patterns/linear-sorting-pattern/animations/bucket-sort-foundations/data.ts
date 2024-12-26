import { Animation } from '@/types';

export const bucketSortAnimation: Animation = {
  id: "bucket-sort",
  title: "Bucket Sort Foundations",
  description: "Understanding the basics of bucket sort",
  steps: [
    {
      title: "Basic Bucket Sort",
      description: "Sort an array using bucket sort",
      array: [0.78, 0.17, 0.39, 0.26, 0.72, 0.94, 0.21, 0.12, 0.23, 0.68],
      code: `
function bucketSort(arr, bucketSize = 5) {
  if (arr.length === 0) {
    return arr;
  }

  // Determine minimum and maximum values
  let minValue = arr[0];
  let maxValue = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minValue) {
      minValue = arr[i];
    } else if (arr[i] > maxValue) {
      maxValue = arr[i];
    }
  }

  // Initialize buckets
  let bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  let buckets = new Array(bucketCount);
  for (let i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (let i = 0; i < arr.length; i++) {
    let bucketIndex = Math.floor((arr[i] - minValue) / bucketSize);
    buckets[bucketIndex].push(arr[i]);
  }

  // Sort buckets and place back into input array
  let sortedIndex = 0;
  for (let i = 0; i < buckets.length; i++) {
    buckets[i].sort((a, b) => a - b);
    for (let j = 0; j < buckets[i].length; j++) {
      arr[sortedIndex++] = buckets[i][j];
    }
  }

  return arr;
}
      `,
    },
    {
      title: "Sort Array By Parity (Bucket Approach)",
      description: "Sort array so that even integers are followed by odd integers using buckets",
      array: [3, 1, 2, 4, 5, 7, 8, 6],
      code: `
function sortArrayByParity(arr) {
  let evenBucket = [];
  let oddBucket = [];
  
  for (let num of arr) {
    if (num % 2 === 0) {
      evenBucket.push(num);
    } else {
      oddBucket.push(num);
    }
  }
  
  return [...evenBucket, ...oddBucket];
}
      `,
    },
    {
      title: "Frequency Sort",
      description: "Sort array by increasing frequency of elements",
      array: [1, 1, 2, 2, 2, 3],
      code: `
function frequencySort(arr) {
  const freqMap = new Map();
  for (const num of arr) {
    freqMap.set(num, (freqMap.get(num) || 0) + 1);
  }
  
  const buckets = new Array(arr.length + 1).fill().map(() => []);
  for (const [num, freq] of freqMap) {
    buckets[freq].push(num);
  }
  
  const result = [];
  for (let freq = 1; freq < buckets.length; freq++) {
    for (const num of buckets[freq].sort((a, b) => b - a)) {
      result.push(...new Array(freq).fill(num));
    }
  }
  
  return result;
}
      `,
    },
  ],
};


