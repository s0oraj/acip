import { Pattern } from '../types'

export const clonePattern: Pattern = {
  id: 8,
  title: "Clone Pattern",
  description: "Master techniques for efficiently cloning various data structures across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Node Cloning",
      questions: [
        {
          id: 1,
          title: "Single Node Clone",
          difficulty: "easy",
          link: "https://leetcode.com/problems/spiral-matrix-iv",
          description: "Base Pattern: Single node cloning",
          details: {
            keyDifference: "new_node = Node(old_node.val) - Base case",
            commonError: "Deep vs shallow copy",
            optimization: "Memory allocation"
          }
        },
        {
          id: 2,
          title: "Linear Node Chain Clone",
          difficulty: "easy",
          link: "https://leetcode.com/problems/palindrome-linked-list",
          description: "Builds on #1: Sequential nodes",
          details: {
            keyDifference: "next = clone(curr.next) - Next pointer handling",
            commonError: "Chain breaks",
            optimization: "Iterative approach"
          }
        },
        {
          id: 3,
          title: "Node with Random Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/copy-list-with-random-pointer",
          description: "Builds on #2: Extra pointer",
          details: {
            keyDifference: "map[old] = new - HashMap tracking",
            commonError: "Random pointer sync",
            optimization: "O(1) space method"
          }
        },
        {
          id: 4,
          title: "Circular Node Chain Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list",
          description: "Builds on #3: Cycle handling",
          details: {
            keyDifference: "detect_cycle() - Cycle preservation",
            commonError: "Infinite loops",
            optimization: "Single pass clone"
          }
        }
      ]
    },
    {
      title: "Tree Structure Cloning",
      questions: [
        {
          id: 5,
          title: "Binary Tree Node Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree",
          description: "Base Pattern: Tree structure",
          details: {
            keyDifference: "clone_tree(root) - Base tree case",
            commonError: "Null handling",
            optimization: "Parallel traversal"
          }
        },
        {
          id: 6,
          title: "Tree with Random Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/clone-binary-tree-with-random-pointer",
          description: "Builds on #5: Extra tree pointer",
          details: {
            keyDifference: "map[old_random] = new_random - Random link",
            commonError: "Missing connections",
            optimization: "Two-phase clone"
          }
        },
        {
          id: 7,
          title: "Multi-child Tree Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/clone-n-ary-tree",
          description: "Builds on #6: Vector children",
          details: {
            keyDifference: "clone_children(node) - Multiple children",
            commonError: "Child array copy",
            optimization: "Level-order clone"
          }
        },
        {
          id: 8,
          title: "Thread-Safe Tree Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/print-in-order",
          description: "Builds on #7: Synchronization",
          details: {
            keyDifference: "lock_and_clone() - Lock management",
            commonError: "Deadlocks",
            optimization: "Fine-grained locks"
          }
        }
      ]
    },
    {
      title: "Graph Structure Cloning",
      questions: [
        {
          id: 9,
          title: "DAG Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/all-paths-from-source-lead-to-destination",
          description: "Base Pattern: Graph cloning",
          details: {
            keyDifference: "clone_dag(graph) - Base DAG case",
            commonError: "Edge direction",
            optimization: "Topological order"
          }
        },
        {
          id: 10,
          title: "Cyclic Graph Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/clone-graph",
          description: "Builds on #9: Cycle handling",
          details: {
            keyDifference: "visited[node] = clone - Cycle detection",
            commonError: "Infinite recursion",
            optimization: "DFS vs BFS choice"
          }
        },
        {
          id: 11,
          title: "Weighted Graph Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/network-delay-time",
          description: "Builds on #10: Edge weights",
          details: {
            keyDifference: "clone_edge(u,v,w) - Weight copying",
            commonError: "Weight preservation",
            optimization: "Edge representation"
          }
        },
        {
          id: 12,
          title: "Bipartite Graph Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/is-graph-bipartite",
          description: "Builds on #11: Color property",
          details: {
            keyDifference: "clone_with_color() - Property preservation",
            commonError: "Color conflicts",
            optimization: "Union-find approach"
          }
        }
      ]
    },
    {
      title: "Container Structure Cloning",
      questions: [
        {
          id: 13,
          title: "Stack Clone",
          difficulty: "easy",
          link: "https://leetcode.com/problems/implement-stack-using-queues",
          description: "Base Pattern: LIFO structure",
          details: {
            keyDifference: "clone_stack(s) - Base container case",
            commonError: "Order preservation",
            optimization: "Single queue"
          }
        },
        {
          id: 14,
          title: "Queue Clone",
          difficulty: "easy",
          link: "https://leetcode.com/problems/implement-queue-using-stacks",
          description: "Builds on #13: FIFO handling",
          details: {
            keyDifference: "reverse_clone() - Order inversion",
            commonError: "Element ordering",
            optimization: "Amortized O(1)"
          }
        },
        {
          id: 15,
          title: "Priority Queue Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/seat-reservation-manager",
          description: "Builds on #14: Priority ordering",
          details: {
            keyDifference: "clone_with_priority() - Heap property",
            commonError: "Priority preservation",
            optimization: "Bottom-up build"
          }
        },
        {
          id: 16,
          title: "HashMap Clone",
          difficulty: "easy",
          link: "https://leetcode.com/problems/design-hashmap",
          description: "Builds on #15: Key-value pairs",
          details: {
            keyDifference: "clone_bucket(b) - Hash function",
            commonError: "Collision handling",
            optimization: "Load factor"
          }
        }
      ]
    },
    {
      title: "Cache Structure Cloning",
      questions: [
        {
          id: 17,
          title: "LRU Cache Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/lru-cache",
          description: "Base Pattern: Cache structure",
          details: {
            keyDifference: "clone_lru() - Base cache case",
            commonError: "Order updates",
            optimization: "O(1) operations"
          }
        },
        {
          id: 18,
          title: "LFU Cache Clone",
          difficulty: "hard",
          link: "https://leetcode.com/problems/lfu-cache",
          description: "Builds on #17: Frequency tracking",
          details: {
            keyDifference: "clone_with_freq() - Frequency counting",
            commonError: "Counter sync",
            optimization: "Bucket frequency"
          }
        },
        {
          id: 19,
          title: "Two-Level Cache Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/tweet-counts-per-frequency",
          description: "Builds on #18: Hierarchical cache",
          details: {
            keyDifference: "clone_levels() - Level handling",
            commonError: "Level sync",
            optimization: "Level balancing"
          }
        },
        {
          id: 20,
          title: "Distributed Cache Clone",
          difficulty: "medium",
          link: "https://leetcode.com/problems/design-file-system",
          description: "Builds on #19: Distribution",
          details: {
            keyDifference: "clone_distributed() - Shard handling",
            commonError: "Consistency",
            optimization: "Shard balancing"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic node cloning → Complex structure cloning",
      "Single pointer → Multiple pointer handling",
      "Static structures → Dynamic and distributed structures",
      "Simple data structures → Advanced cache systems"
    ],
    coreTechniques: [
      "Deep vs shallow copying",
      "Pointer mapping techniques",
      "Recursive vs iterative cloning",
      "Cycle detection and handling",
      "Thread-safe cloning methods"
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
      },
      {
        title: "Tree-based Cloning Template",
        code: `
def clone_tree(root):
    if not root:
        return None
        
    # Create new node
    new_root = TreeNode(root.val)
    
    # Recursively clone children
    new_root.left = clone_tree(root.left)
    new_root.right = clone_tree(root.right)
    
    return new_root

# For N-ary trees
def clone_nary_tree(root):
    if not root:
        return None
        
    new_root = Node(root.val)
    new_root.children = [clone_nary_tree(child) for child in root.children]
    
    return new_root
        `
      },
      {
        title: "Complex Structure Template",
        code: `
class CloneableStructure:
    def __init__(self):
        self.data = {}
        self.metadata = {}
    
    def deep_copy(self):
        new_instance = CloneableStructure()
        
        # Copy main data
        for key, value in self.data.items():
            if hasattr(value, 'deep_copy'):
                new_instance.data[key] = value.deep_copy()
            else:
                new_instance.data[key] = copy.deepcopy(value)
                
        # Copy metadata
        new_instance.metadata = copy.deepcopy(self.metadata)
        
        return new_instance
        `
      }
    ],
    testingStrategy: [
      "Test with various structure sizes and complexities",
      "Include edge cases (empty structures, single nodes)",
      "Verify correctness of all pointer connections",
      "Test with cyclic structures (linked lists, graphs)",
      "Benchmark performance with large inputs"
    ],
    commonPitfalls: [
      "Shallow vs deep copy confusion",
      "Missing edge cases (null, single node)",
      "Circular reference infinite loops",
      "Lost metadata during cloning",
      "Broken invariants after cloning"
    ]
  }
}

