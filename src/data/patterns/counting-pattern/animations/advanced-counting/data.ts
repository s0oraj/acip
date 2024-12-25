// data.ts
import { Animation } from '@/types';
import { Hash, Users, Binary, Layers, MessagesSquare } from 'lucide-react';

export const patterns = {
  pairs: {
    data: [1, 3, 2, 4, 3, 1, 5],
    icon: 'hash',
    title: "Pair Counter",
    desc: "Count pairs with absolute difference K",
    color: "#2563EB",
    k: 2
  },
  groups: {
    data: [12, 23, 34, 45, 56],
    icon: 'users',
    title: "Group Counter",
    desc: "Count by digit sums",
    color: "#7C3AED",
  },
  balance: {
    data: [1, 0, 1, 0, 1, 1, 0],
    icon: 'binary',
    title: "Balance Counter",
    desc: "Track state balance",
    color: "#DC2626"
  },
  subarray: {
    data: [2, 4, 6, 3, 7],
    icon: 'layers',
    title: "Pattern Counter",
    desc: "Count valid subarrays",
    color: "#059669",
    k: 2
  },
  complex: {
    data: [1, 2, 2, 3, 1],
    icon: 'messages-square',
    title: "Complex Counter",
    desc: "Maximize frequency score",
    color: "#D97706"
  }
};

// Get pairs up to current index
const getPairs = (arr: number[], idx: number, k: number) => {
  const pairs = [];
  const freq = {};
  for (let i = 0; i <= idx; i++) {
    const curr = arr[i];
    if (freq[curr + k]) pairs.push([curr, curr + k]);
    if (freq[curr - k]) pairs.push([curr - k, curr]);
    freq[curr] = (freq[curr] || 0) + 1;
  }
  return pairs;
};

// Get digit sum for a number
const getDigitSum = (num: number): number => 
  String(num).split('').reduce((sum, digit) => sum + parseInt(digit), 0);

// Get subarrays with k divisible elements
const getValidSubarrays = (arr: number[], idx: number, k: number) => {
  const result = new Set();
  for (let i = 0; i <= idx; i++) {
    let count = 0;
    for (let j = i; j <= idx; j++) {
      if (arr[j] % k === 0) count++;
      if (count <= k) result.add(arr.slice(i, j + 1).join(','));
    }
  }
  return Array.from(result);
};

export const getVisualizationData = (pattern: string, data: number[], step: number, k: number) => {
  switch (pattern) {
    case 'pairs':
      return getPairs(data, step, k).map((pair, idx) => ({
        name: `${pair[0]}-${pair[1]}`,
        value: 1
      }));
      
    case 'groups':
      return Object.entries(
        data.slice(0, step + 1).reduce((acc, num) => {
          const sum = getDigitSum(num);
          acc[sum] = (acc[sum] || 0) + 1;
          return acc;
        }, {})
      ).map(([sum, count]) => ({
        name: `Sum ${sum}`,
        value: count
      }));
      
    case 'balance':
      const state = data.slice(0, step + 1).reduce((acc, val) => acc ^ (1 << val), 0);
      return [{ name: 'Ones', value: state.toString(2).split('1').length - 1 }];
      
    case 'subarray':
      return getValidSubarrays(data, step, k).map((arr, idx) => ({
        name: arr,
        value: 1
      }));
      
    case 'complex':
      return data.slice(0, step + 1).reduce((acc, num) => {
        acc[num] = (acc[num] || 0) + 1;
        return acc;
      }, {});
      
    default:
      return [];
  }
};

export const getStepDescription = (pattern: string, step: number, data: any[]) => {
  if (step === 0) return "Initialize counters and data structures";
  
  const curr = data[step - 1];
  switch (pattern) {
    case 'pairs':
      return `Check pairs with difference K for element ${curr}`;
    case 'groups':
      return `Add number ${curr} to group with sum ${getDigitSum(curr)}`;
    case 'balance':
      return `Update balance state with value ${curr}`;
    case 'subarray':
      return `Generate valid subarrays including element ${curr}`;
    case 'complex':
      return `Update frequency score with element ${curr}`;
    default:
      return "";
  }
};

export const getCodeSnippet = (pattern: string, step: number, data: any[]) => {
  if (step === 0) return "// Initialize data structures";
  
  const curr = data[step - 1];
  switch (pattern) {
    case 'pairs':
      return `count += freq.get(${curr} + k) + freq.get(${curr} - k);`;
    case 'groups':
      return `groups[digitSum(${curr})]++;`;
    case 'balance':
      return `state ^= (1 << ${curr});`;
    case 'subarray':
      return `if (divisibleCount <= k) patterns.add(subarray);`;
    case 'complex':
      return `maxFreq = Math.max(maxFreq, ++count[${curr}]);`;
    default:
      return "";
  }
};
