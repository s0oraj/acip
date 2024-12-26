import { Animation } from '@/types';

export const radixSortAnimation: Animation = {
  id: "radix-sort",
  title: "Radix Sort Implementations",
  description: "Understanding different implementations of radix sort",
  steps: [
    {
      title: "Basic Radix Sort",
      description: "Sort an array using radix sort",
      array: [170, 45, 75, 90, 802, 24, 2, 66],
      code: `
function radixSort(arr) {
  const max = Math.max(...arr);
  
  for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
    countingSort(arr, exp);
  }
  
  return arr;
}

function countingSort(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  const count = new Array(10).fill(0);
  
  for (let i = 0; i < n; i++) {
    count[Math.floor(arr[i] / exp) % 10]++;
  }
  
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }
  
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  
  for (let i = 0; i < n; i++) {
    arr[i] = output[i];
  }
}
      `,
    },
    {
      title: "Largest Number",
      description: "Arrange numbers to form the largest number",
      array: [3, 30, 34, 5, 9],
      code: `
function largestNumber(nums) {
  nums.sort((a, b) => {
    const order1 = '' + a + b;
    const order2 = '' + b + a;
    return order2.localeCompare(order1);
  });
  
  if (nums[0] === 0) {
    return '0';
  }
  
  return nums.join('');
}
      `,
    },
    {
      title: "IP Address Sorting",
      description: "Sort IP addresses in ascending order",
      array: ["192.168.0.1", "10.0.0.1", "172.16.0.1", "192.168.1.1"],
      code: `
function sortIPAddresses(ips) {
  return ips.sort((a, b) => {
    const aOctets = a.split('.').map(Number);
    const bOctets = b.split('.').map(Number);
    
    for (let i = 0; i < 4; i++) {
      if (aOctets[i] !== bOctets[i]) {
        return aOctets[i] - bOctets[i];
      }
    }
    
    return 0;
  });
}
      `,
    },
  ],
};


