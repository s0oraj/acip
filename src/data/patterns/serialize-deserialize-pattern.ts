import { Pattern } from '../types';

export const serializeDeserializePattern: Pattern = {
  id: 7,
  title: "Serialize/Deserialize Pattern",
  description: "Learn techniques for converting complex data structures to strings and back, essential for data persistence and transmission.",
  questions: [
    {
      id: 1,
      title: "Encode and Decode Strings",
      difficulty: "medium",
      link: "https://leetcode.com/problems/encode-and-decode-strings/",
      description: "Base Pattern: Length prefix encoding. Key Operation: encoded += f\"{len(s)}#{s}\"",
      details: {
        keyDifference: "Length prefix encoding",
        commonError: "Delimiter collision",
        optimization: "Fixed-width length field"
      }
    },
    {
      id: 2,
      title: "String Compression",
      difficulty: "medium",
      link: "https://leetcode.com/problems/string-compression/",
      description: "Builds on #1: Run-length encoding",
      details: {
        keyDifference: "Consecutive character counting",
        commonError: "Single character handling",
        optimization: "In-place modification"
      }
    },
    {
      id: 3,
      title: "Run Length Encoding",
      difficulty: "easy",
      link: "https://practice.geeksforgeeks.org/problems/run-length-encoding/1",
      description: "Builds on #2: General compression",
      details: {
        keyDifference: "All character compression",
        commonError: "Count overflow",
        optimization: "StringBuilder usage"
      }
    },
    {
      id: 4,
      title: "Check if String is Valid",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/check-if-string-is-valid/1",
      description: "Builds on #3: Validation rules",
      details: {
        keyDifference: "Format checking",
        commonError: "Edge case handling",
        optimization: "Early termination"
      }
    },
    {
      id: 5,
      title: "Serialize and Deserialize Binary Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
      description: "Base Pattern: Preorder traversal. Key Operation: serialize(node.left) + serialize(node.right)",
      details: {
        keyDifference: "Preorder traversal",
        commonError: "Null handling",
        optimization: "Level-order for balanced trees"
      }
    },
    {
      id: 6,
      title: "Binary Tree to String",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/binary-tree-to-string/1",
      description: "Builds on #5: Parentheses notation",
      details: {
        keyDifference: "Bracket matching",
        commonError: "Empty subtree representation",
        optimization: "Skip unnecessary brackets"
      }
    },
    {
      id: 7,
      title: "Recover Binary Search Tree",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/recover-binary-search-tree/1",
      description: "Builds on #6: BST properties",
      details: {
        keyDifference: "Violation detection",
        commonError: "Multiple swaps",
        optimization: "Morris traversal"
      }
    },
    {
      id: 8,
      title: "Level Order Spiral Traversal",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/level-order-traversal-in-spiral-form/1",
      description: "Builds on #7: Level tracking",
      details: {
        keyDifference: "Direction alternation",
        commonError: "Level boundary",
        optimization: "Double-ended queue"
      }
    },
    {
      id: 9,
      title: "Clone Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/clone-graph/",
      description: "Base Pattern: Node mapping. Key Operation: visited[node] = Node(node.val)",
      details: {
        keyDifference: "Node mapping",
        commonError: "Cycle detection",
        optimization: "DFS vs BFS choice"
      }
    },
    {
      id: 10,
      title: "Clone Directed Graph",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/clone-graph/1",
      description: "Builds on #9: Direction handling",
      details: {
        keyDifference: "Edge direction preservation",
        commonError: "Back edge handling",
        optimization: "Adjacency list representation"
      }
    },
    {
      id: 11,
      title: "Clone Binary Tree with Random Pointer",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/clone-a-linked-list-with-next-and-random-pointer/1",
      description: "Builds on #10: Extra pointer",
      details: {
        keyDifference: "Random connection",
        commonError: "Pointer mapping",
        optimization: "Three-pass solution"
      }
    },
    {
      id: 12,
      title: "Clone Weighted Graph",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/clone-a-binary-tree/1",
      description: "Builds on #11: Edge weights",
      details: {
        keyDifference: "Weight preservation",
        commonError: "Weight type handling",
        optimization: "Weight map compression"
      }
    },
    {
      id: 13,
      title: "Serialize and Deserialize N-ary Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
      description: "Base Pattern: Child count encoding. Key Operation: serialize(children) + f\"{len(children)}#\"",
      details: {
        keyDifference: "Child count encoding",
        commonError: "Children count tracking",
        optimization: "Variable length encoding"
      }
    },
    {
      id: 14,
      title: "Encode N-ary Tree to Binary",
      difficulty: "hard",
      link: "https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/",
      description: "Builds on #13: Structure transformation",
      details: {
        keyDifference: "First child-next sibling",
        commonError: "Relationship preservation",
        optimization: "Height balancing"
      }
    },
    {
      id: 15,
      title: "Convert Graph to Tree",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/convert-graph-to-tree/1",
      description: "Builds on #14: Cycle elimination",
      details: {
        keyDifference: "Root selection",
        commonError: "Disconnected components",
        optimization: "Union-find approach"
      }
    },
    {
      id: 16,
      title: "Multiple Graphs Serialization",
      difficulty: "hard",
      link: "https://www.hackerearth.com/practice/algorithms/graphs/graph-representation/practice-problems/",
      description: "Builds on #15: Multi-graph handling",
      details: {
        keyDifference: "Graph separation",
        commonError: "Cross-graph references",
        optimization: "Shared node pool"
      }
    },
    {
      id: 17,
      title: "Encode with Checksum",
      difficulty: "hard",
      link: "https://practice.geeksforgeeks.org/problems/check-sum-string/1",
      description: "Base Pattern: Data validation. Key Operation: checksum = hash(data)",
      details: {
        keyDifference: "Data validation",
        commonError: "Hash collision",
        optimization: "Rolling hash"
      }
    },
    {
      id: 18,
      title: "Encode with Length Prefix",
      difficulty: "medium",
      link: "https://www.hackerrank.com/challenges/string-construction/",
      description: "Builds on #17: Size encoding",
      details: {
        keyDifference: "Variable length fields",
        commonError: "Length overflow",
        optimization: "Varint encoding"
      }
    },
    {
      id: 19,
      title: "Encode with Metadata",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/serialize-and-deserialize-a-string/1",
      description: "Builds on #18: Header information",
      details: {
        keyDifference: "Metadata section",
        commonError: "Version compatibility",
        optimization: "Metadata compression"
      }
    },
    {
      id: 20,
      title: "Encode with Error Recovery",
      difficulty: "medium",
      link: "https://practice.geeksforgeeks.org/problems/check-if-string-is-valid/1",
      description: "Builds on #19: Error handling",
      details: {
        keyDifference: "Recovery mechanisms",
        commonError: "State corruption",
        optimization: "Checkpoint frequency"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic string encoding → Complex data structure serialization",
      "Single data type handling → Multi-type serialization",
      "Lossless compression → Lossy compression with error recovery",
      "Static structures → Dynamic, self-describing formats"
    ],
    coreTechniques: [
      "Length-prefix encoding",
      "Run-length encoding",
      "Tree traversal serialization",
      "Graph node mapping",
      "Checksum and error correction"
    ],
    implementationGuidelines: [
      {
        title: "Basic String Encoding Template",
        code: `
class Codec:
    def encode(self, strs):
        """Encodes a list of strings to a single string"""
        if not strs:
            return chr(258)
        
        # Join using character outside ASCII range
        return chr(257).join(s.replace(chr(257), chr(257) + chr(257)) for s in strs)
        
    def decode(self, s):
        """Decodes a single string to a list of strings"""
        if s == chr(258):
            return []
        
        # Split and restore original strings
        return [t.replace(chr(257) + chr(257), chr(257)) for t in s.split(chr(257))]
        `
      }
    ],
    testingStrategy: [
      "Test with various data types and structures",
      "Check edge cases (empty input, maximum size, special characters)",
      "Verify round-trip accuracy (serialize then deserialize)",
      "Test performance with large inputs",
      "Validate error handling and recovery mechanisms"
    ]
  }
};

