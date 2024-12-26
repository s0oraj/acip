import { Animation } from '@/types';

export const advancedRadixAnimation: Animation = {
  id: "advanced-radix",
  title: "Advanced Radix Applications",
  description: "Exploring advanced applications of radix sort",
  steps: [
    {
      title: "Sort Array by Power Value",
      description: "Sort integers by their power value",
      array: [3, 2, 4, 6, 5],
      k: 12,
      x: 2,
      code: `
function getKth(lo, hi, k) {
  const powerValues = new Map();
  
  function getPower(x) {
    if (x === 1) return 0;
    if (powerValues.has(x)) return powerValues.get(x);
    
    const power = 1 + (x % 2 === 0 ? getPower(x / 2) : getPower(3 * x + 1));
    powerValues.set(x, power);
    return power;
  }
  
  const nums = Array.from({length: hi - lo + 1}, (_, i) => lo + i);
  nums.sort((a, b) => {
    const powerDiff = getPower(a) - getPower(b);
    return powerDiff !== 0 ? powerDiff : a - b;
  });
  
  return nums[k - 1];
}
      `,
    },
    {
      title: "Numbers With Same Consecutive Differences",
      description: "Find all numbers with the same consecutive differences",
      n: 3,
      k: 7,
      code: `
function numsSameConsecDiff(n, k) {
  if (n === 1) return Array.from({length: 10}, (_, i) => i);
  
  const result = [];
  
  function dfs(num, n) {
    if (n === 0) {
      result.push(num);
      return;
    }
    
    const lastDigit = num % 10;
    if (k === 0) {
      dfs(num * 10 + lastDigit, n - 1);
    } else {
      if (lastDigit + k < 10) dfs(num * 10 + lastDigit + k, n - 1);
      if (lastDigit - k >= 0) dfs(num * 10 + lastDigit - k, n - 1);
    }
  }
  
  for (let i = 1; i <= 9; i++) {
    dfs(i, n - 1);
  }
  
  return result;
}
      `,
    },
    {
      title: "Maximum Binary String",
      description: "Find the maximum binary string after change operations",
      binaryString: "000110",
      code: `
function maximumBinaryString(binary) {
  let zeros = 0;
  let ones = 0;
  let firstZero = binary.length;
  
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '0') {
      zeros++;
      firstZero = Math.min(firstZero, i);
    } else if (i >= firstZero) {
      ones++;
    }
  }
  
  if (zeros <= 1) return binary;
  
  return '1'.repeat(firstZero + zeros - 1) + '0' + '1'.repeat(ones);
}
      `,
    },
  ],
};


