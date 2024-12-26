import { Animation } from '@/types';

export const countingSortAnimation: Animation = {
  id: "counting-sort",
  title: "Counting Sort with Modified Rules",
  description: "Understanding different variations of counting sort",
  steps: [
    {
      title: "Basic Counting Sort",
      description: "Sort an array using counting sort",
      array: [4, 2, 2, 8, 3, 3, 1],
      code: `
function countingSort(arr) {
  const max = Math.max(...arr);
  const count = new Array(max + 1).fill(0);
  
  for (const num of arr) {
    count[num]++;
  }
  
  let sortedIndex = 0;
  for (let i = 0; i <= max; i++) {
    while (count[i] > 0) {
      arr[sortedIndex] = i;
      sortedIndex++;
      count[i]--;
    }
  }
  
  return arr;
}
      `,
    },
    {
      title: "Sort Array By Parity",
      description: "Sort array so that even integers are followed by odd integers",
      array: [3, 1, 2, 4],
      code: `
function sortArrayByParity(arr) {
  let evenIndex = 0;
  let oddIndex = arr.length - 1;
  
  while (evenIndex < oddIndex) {
    if (arr[evenIndex] % 2 > arr[oddIndex] % 2) {
      [arr[evenIndex], arr[oddIndex]] = [arr[oddIndex], arr[evenIndex]];
    }
    
    if (arr[evenIndex] % 2 === 0) evenIndex++;
    if (arr[oddIndex] % 2 === 1) oddIndex--;
  }
  
  return arr;
}
      `,
    },
    {
      title: "Sort Array by Parity II",
      description: "Sort array so that even indices hold even integers and odd indices hold odd integers",
      array: [4, 2, 5, 7],
      code: `
function sortArrayByParityII(arr) {
  let even = 0;
  let odd = 1;
  const n = arr.length;
  
  while (even < n && odd < n) {
    while (even < n && arr[even] % 2 === 0) {
      even += 2;
    }
    while (odd < n && arr[odd] % 2 === 1) {
      odd += 2;
    }
    if (even < n && odd < n) {
      [arr[even], arr[odd]] = [arr[odd], arr[even]];
    }
  }
  
  return arr;
}
      `,
    },
    {
      title: "Wiggle Sort",
      description: "Sort array into a wiggle sequence",
      array: [3, 5, 2, 1, 6, 4],
      code: `
function wiggleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i % 2 === 0) === (arr[i] > arr[i + 1])) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
  return arr;
}
      `,
    },
    {
      title: "Custom Sort String",
      description: "Sort string based on custom order",
      array: ['c', 'b', 'a'],
      customOrder: "cba",
      code: `
function customSortString(order, s) {
  const count = new Array(26).fill(0);
  for (const c of s) {
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  
  let result = '';
  for (const c of order) {
    result += c.repeat(count[c.charCodeAt(0) - 'a'.charCodeAt(0)]);
    count[c.charCodeAt(0) - 'a'.charCodeAt(0)] = 0;
  }
  
  for (let i = 0; i < 26; i++) {
    result += String.fromCharCode('a'.charCodeAt(0) + i).repeat(count[i]);
  }
  
  return result;
}
      `,
    },
  ],
};


