import { Animation } from '@/types';

export const advancedCountingSortAnimation: Animation = {
  id: "advanced-counting-sort",
  title: "Advanced Counting Sort Applications",
  description: "Exploring advanced applications of counting sort",
  steps: [
    {
      title: "Range Addition",
      description: "Perform range addition using counting sort principles",
      array: [0, 0, 0, 0, 0],
      updates: [[1, 3, 2], [2, 4, 3], [0, 2, -2]],
      code: `
function getModifiedArray(length, updates) {
  const result = new Array(length).fill(0);
  
  for (const [start, end, inc] of updates) {
    result[start] += inc;
    if (end + 1 < length) {
      result[end + 1] -= inc;
    }
  }
  
  for (let i = 1; i < length; i++) {
    result[i] += result[i - 1];
  }
  
  return result;
}
      `,
    },
    {
      title: "Car Fleet",
      description: "Determine the number of car fleets",
      positions: [10, 8, 0, 5, 3],
      speeds: [2, 4, 1, 1, 3],
      target: 12,
      code: `
function carFleet(target, position, speed) {
  const cars = position.map((p, i) => [p, speed[i]]);
  cars.sort((a, b) => b[0] - a[0]);
  
  const times = cars.map(([p, s]) => (target - p) / s);
  let fleets = 0;
  let maxTime = 0;
  
  for (const time of times) {
    if (time > maxTime) {
      fleets++;
      maxTime = time;
    }
  }
  
  return fleets;
}
      `,
    },
    {
      title: "Maximum Height by Stacking Cuboids",
      description: "Find the maximum height by stacking cuboids",
      cuboids: [[50,45,20],[95,37,53],[45,23,12]],
      code: `
function maxHeight(cuboids) {
  cuboids.forEach(c => c.sort((a, b) => b - a));
  cuboids.sort((a, b) => b[0] + b[1] + b[2] - (a[0] + a[1] + a[2]));
  
  const n = cuboids.length;
  const dp = new Array(n).fill(0);
  
  for (let i = 0; i < n; i++) {
    dp[i] = cuboids[i][2];
    for (let j = 0; j < i; j++) {
      if (cuboids[j][0] >= cuboids[i][0] && 
          cuboids[j][1] >= cuboids[i][1] && 
          cuboids[j][2] >= cuboids[i][2]) {
        dp[i] = Math.max(dp[i], dp[j] + cuboids[i][2]);
      }
    }
  }
  
  return Math.max(...dp);
}
      `,
    },
  ],
};

