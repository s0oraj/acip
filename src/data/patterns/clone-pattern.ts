import { Pattern } from '../types';

export const clonePattern: Pattern = {
  id: 8,
  title: "Clone Pattern",
  description: "Master techniques for creating deep copies of complex data structures while maintaining their relationships and properties.",
  questions: [
    {
      id: 1,
      title: "Copy List with Random Pointer",
      difficulty: "medium",
      link: "https://leetcode.com/problems/copy-list-with-random-pointer/",
      description: "Base Pattern: HashMap-based node mapping. Key Operation: mapping[old] = new",
      details: {
        keyDifference: "HashMap-based node mapping",
        commonError: "Not handling null pointers",
        optimization: "O(1) space with interweaving"
      }
    },
    {
      id: 2,
      title: "Clone Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-graph/",
      description: "Builds on #1: Graph traversal with mapping",
      details: {
        keyDifference: "Cyclic reference handling",
        commonError: "Infinite recursion",
        optimization: "DFS vs BFS choice"
      }
    },
    {
      id: 3,
      title: "Find a Corresponding Node of a Binary Tree in a Clone of That Tree",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/",
      description: "Builds on #2: Simpler structure",
      details: {
        keyDifference: "No cycles possible",
        commonError: "Reference comparison",
        optimization: "Parallel traversal"
      }
    },
    {
      id: 4,
      title: "Clone Binary Tree With Random Pointer",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-binary-tree-with-random-pointer/",
      description: "Builds on #3: Additional pointer handling",
      details: {
        keyDifference: "Two-phase cloning",
        commonError: "Missing random links",
        optimization: "Combine phases"
      }
    },
    {
      id: 5,
      title: "Clone N-ary Tree",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-n-ary-tree/",
      description: "Base Pattern: Vector-based children. Key Operation: new_node.children = [clone(child) for child]",
      details: {
        keyDifference: "Vector-based children",
        commonError: "Shallow copy of children",
        optimization: "Level-order cloning"
      }
    },
    {
      id: 6,
      title: "Construct Binary Search Tree from Preorder Traversal",
      difficulty: "medium",
      link: "https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/",
      description: "Builds on #5: BST properties",
      details: {
        keyDifference: "Ordered structure",
        commonError: "Not maintaining BST invariant",
        optimization: "Use value constraints"
      }
    },
    {
      id: 7,
      title: "Clone a Perfect Binary Tree",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/perfect-binary-tree/1",
      description: "Builds on #6: Level completeness",
      details: {
        keyDifference: "Fixed shape",
        commonError: "Level counting",
        optimization: "Level-wise copy"
      }
    },
    {
      id: 8,
      title: "Complete Binary Tree Inserter",
      difficulty: "medium",
      link: "https://leetcode.com/problems/complete-binary-tree-inserter/",
      description: "Builds on #7: Relaxed constraints",
      details: {
        keyDifference: "Last level filling",
        commonError: "Node indexing",
        optimization: "Array representation"
      }
    },
    {
      id: 9,
      title: "Longest Uploaded Prefix",
      difficulty: "medium",
      link: "https://leetcode.com/problems/longest-uploaded-prefix/",
      description: "Base Pattern: Multi-pointer structure. Key Operation: mapping[curr.arb] = new_curr",
      details: {
        keyDifference: "Multi-pointer structure",
        commonError: "Circular references",
        optimization: "Three-pass solution"
      }
    },
    {
      id: 10,
      title: "Clone a Doubly Linked List",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
      description: "Builds on #9: Backward links",
      details: {
        keyDifference: "Bidirectional pointers",
        commonError: "Previous pointer sync",
        optimization: "Single pass possible"
      }
    },
    {
      id: 11,
      title: "Design Skiplist",
      difficulty: "hard",
      link: "https://leetcode.com/problems/design-skiplist/",
      description: "Builds on #10: Level-based links",
      details: {
        keyDifference: "Probabilistic structure",
        commonError: "Level probability",
        optimization: "Optimize level count"
      }
    },
    {
      id: 12,
      title: "Implement Stack using Queues",
      difficulty: "easy",
      link: "https://leetcode.com/problems/implement-stack-using-queues/",
      description: "Base Pattern: LIFO structure. Key Operation: new_stack.push(old_stack.top())",
      details: {
        keyDifference: "LIFO structure",
        commonError: "Reference vs value",
        optimization: "Iterative vs recursive"
      }
    },
    {
      id: 13,
      title: "Implement Queue using Stacks",
      difficulty: "easy",
      link: "https://leetcode.com/problems/implement-queue-using-stacks/",
      description: "Builds on #12: FIFO structure",
      details: {
        keyDifference: "Order preservation",
        commonError: "Element ordering",
        optimization: "Batch processing"
      }
    },
    {
      id: 14,
      title: "Design Circular Deque",
      difficulty: "medium",
      link: "https://leetcode.com/problems/design-circular-deque/",
      description: "Builds on #13: Dual-ended operations",
      details: {
        keyDifference: "Front/back access",
        commonError: "Boundary conditions",
        optimization: "Circular array"
      }
    },
    {
      id: 15,
      title: "Seat Reservation Manager",
      difficulty: "medium",
      link: "https://leetcode.com/problems/seat-reservation-manager/",
      description: "Base Pattern: Heap structure. Key Operation: heapify(elements)",
      details: {
        keyDifference: "Heap structure",
        commonError: "Comparator copying",
        optimization: "Bottom-up construction"
      }
    },
    {
      id: 16,
      title: "Design HashMap",
      difficulty: "easy",
      link: "https://leetcode.com/problems/design-hashmap/",
      description: "Builds on #15: Key-value mapping",
      details: {
        keyDifference: "Collision handling",
        commonError: "Hash function copying",
        optimization: "Capacity planning"
      }
    },
    {
      id: 17,
      title: "LRU Cache",
      difficulty: "medium",
      link: "https://leetcode.com/problems/lru-cache/",
      description: "Builds on #16: Access ordering",
      details: {
        keyDifference: "Eviction policy",
        commonError: "Order updates",
        optimization: "Update-get ratio"
      }
    },
    {
      id: 18,
      title: "LFU Cache",
      difficulty: "hard",
      link: "https://leetcode.com/problems/lfu-cache/",
      description: "Builds on #17: Frequency counting",
      details: {
        keyDifference: "Multi-level ordering",
        commonError: "Frequency updates",
        optimization: "Frequency bucketing"
      }
    },
    {
      id: 19,
      title: "Insert into a Sorted Circular Linked List",
      difficulty: "medium",
      link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/",
      description: "Base Pattern: Cycle handling. Key Operation: detect_and_break_cycle()",
      details: {
        keyDifference: "Cycle handling",
        commonError: "Infinite loops",
        optimization: "Cycle detection"
      }
    },
    {
      id: 20,
      title: "Print in Order",
      difficulty: "medium",
      link: "https://leetcode.com/problems/print-in-order/",
      description: "Builds on all previous: Synchronization",
      details: {
        keyDifference: "Lock handling",
        commonError: "Deadlock potential",
        optimization: "Lock granularity"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic object cloning → Complex data structure cloning",
      "Single pointer structures → Multi-pointer structures",
      "Static structures → Dynamic, self-modifying structures",
      "Single-threaded cloning → Thread-safe cloning"
    ],
    coreTechniques: [
      "HashMap-based node mapping",
      "Recursive structure traversal",
      "Two-phase cloning for complex structures",
      "Interweaving technique for space optimization",
      "Deep vs shallow copy differentiation"
    ],
    implementationGuidelines: [
      {
        title: "Basic Object Cloning Template",
        code: `
def clone_with_mapping(head):
    if not head:
        return None
        
    # Phase 1: Create nodes
    mapping = {}
    curr = head
    while curr:
        mapping[curr] = Node(curr.val)
        curr = curr.next
        
    # Phase 2: Connect pointers
    curr = head
    while curr:
        if curr.next:
            mapping[curr].next = mapping[curr.next]
        if curr.random:  # For structures with extra pointers
            mapping[curr].random = mapping[curr.random]
        curr = curr.next
        
    return mapping[head]
        `
      }
    ],
    testingStrategy: [
      "Test with various data structure sizes and complexities",
      "Check edge cases (empty structures, single node, fully connected)",
      "Verify correct handling of cycles and self-references",
      "Test performance with large inputs",
      "Validate thread safety for concurrent operations"
    ]
  }
};

