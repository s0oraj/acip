import { Animation } from '@/types';
import { GitBranch } from 'lucide-react';

export const patterns = {
  binaryTreeEncoding: {
    icon: 'git-branch',
    title: "Binary Tree Encoding",
    desc: "Tree traversal encoding",
    color: "#4F46E5"
  },
  bstOptimizedEncoding: {
    icon: 'git-branch',
    title: "BST Optimized Encoding",
    desc: "BST properties encoding",
    color: "#7C3AED"
  },
  naryTreeEncoding: {
    icon: 'git-branch',
    title: "N-ary Tree Encoding",
    desc: "Variable children encoding",
    color: "#2563EB"
  },
  completeTreeEncoding: {
    icon: 'git-branch',
    title: "Complete Tree Encoding",
    desc: "Level properties encoding",
    color: "#DB2777"
  }
};

export const treeSerialization: Animation = {
  id: "tree-serialization",
  title: "Tree Serialization",
  description: "Techniques for serializing tree structures",
  steps: [
    {
      title: "Binary Tree Encoding",
      description: "Encode a binary tree using preorder traversal",
      input: { val: 1, left: { val: 2 }, right: { val: 3, left: { val: 4 }, right: { val: 5 } } },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode root", encoded: "1" },
        { description: "Encode left subtree", encoded: "1,2,null,null" },
        { description: "Encode right subtree", encoded: "1,2,null,null,3,4,null,null,5,null,null" },
        { description: "Decoding", decoded: { val: 1, left: { val: 2 }, right: { val: 3, left: { val: 4 }, right: { val: 5 } } } }
      ]
    },
    {
      title: "BST Optimized Encoding",
      description: "Encode a Binary Search Tree with value bounds",
      input: { val: 5, left: { val: 3, left: { val: 1 }, right: { val: 4 } }, right: { val: 7, left: { val: 6 }, right: { val: 8 } } },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode root", encoded: "5" },
        { description: "Encode left subtree", encoded: "5,3,1,4" },
        { description: "Encode right subtree", encoded: "5,3,1,4,7,6,8" },
        { description: "Decoding", decoded: { val: 5, left: { val: 3, left: { val: 1 }, right: { val: 4 } }, right: { val: 7, left: { val: 6 }, right: { val: 8 } } } }
      ]
    },
    {
      title: "N-ary Tree Encoding",
      description: "Encode an N-ary tree with variable children",
      input: { val: 1, children: [{ val: 3, children: [{ val: 5 }, { val: 6 }] }, { val: 2 }, { val: 4 }] },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode root", encoded: "1[3" },
        { description: "Encode children", encoded: "1[3[5,6],2,4]" },
        { description: "Decoding", decoded: { val: 1, children: [{ val: 3, children: [{ val: 5 }, { val: 6 }] }, { val: 2 }, { val: 4 }] } }
      ]
    },
    {
      title: "Complete Tree Encoding",
      description: "Encode a complete binary tree",
      input: { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3, left: { val: 6 } } },
      phases: [
        { description: "Initialize", encoded: "" },
        { description: "Encode level 1", encoded: "1" },
        { description: "Encode level 2", encoded: "1,2,3" },
        { description: "Encode level 3", encoded: "1,2,3,4,5,6,null" },
        { description: "Decoding", decoded: { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3, left: { val: 6 } } } }
      ]
    }
  ]
};

