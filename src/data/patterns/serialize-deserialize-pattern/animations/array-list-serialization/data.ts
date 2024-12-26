import { Animation } from '@/types';
import { List } from 'lucide-react';

export const patterns = {
  arrayEncoding: {
    icon: 'list',
    title: "Array Encoding",
    desc: "Basic array serialization",
    color: "#4F46E5"
  },
  nestedArrayEncoding: {
    icon: 'list',
    title: "Nested Array Encoding",
    desc: "Recursive structure encoding",
    color: "#7C3AED"
  },
  sparseArrayEncoding: {
    icon: 'list',
    title: "Sparse Array Encoding",
    desc: "Index-value pair encoding",
    color: "#2563EB"
  },
  dynamicArrayEncoding: {
    icon: 'list',
    title: "Dynamic Array Encoding",
    desc: "Resizable array encoding",
    color: "#DB2777"
  }
};

export const arrayListSerialization: Animation = {
  id: "array-list-serialization",
  title: "Array/List Serialization",
  description: "Techniques for serializing arrays and lists",
  steps: [
    {
      title: "Array Encoding",
      description: "Encode a simple array",
      input: [1, 2, 3, 4, 5],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode elements", encoded: "1,2,3,4,5" },
        { description: "Decoding", decoded: [1, 2, 3, 4, 5] }
      ]
    },
    {
      title: "Nested Array Encoding",
      description: "Encode a nested array structure",
      input: [1, [2, 3], [4, [5, 6]]],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode outer array", encoded: "[1,[2,3],[4,[5,6]]]" },
        { description: "Decoding", decoded: [1, [2, 3], [4, [5, 6]]] }
      ]
    },
    {
      title: "Sparse Array Encoding",
      description: "Encode a sparse array",
      input: { 0: 1, 4: 5, 9: 10 },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode index-value pairs", encoded: "0:1,4:5,9:10" },
        { description: "Decoding", decoded: [1, , , , 5, , , , , 10] }
      ]
    },
    {
      title: "Dynamic Array Encoding",
      description: "Encode a dynamic array with size header",
      input: [1, 2, 3],
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode size", encoded: "3:" },
        { description: "Encode elements", encoded: "3:1,2,3" },
        { description: "Decoding", decoded: [1, 2, 3] }
      ]
    }
  ]
};

