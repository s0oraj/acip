import { Pattern } from '../types'

export const serializeDeserializePattern: Pattern = {
  id: 7,
  title: "Serialize/Deserialize Pattern",
  description: "Master techniques for efficiently serializing and deserializing various data structures across multiple complexity levels",
  subpatterns: [
    {
      title: "String Serialization",
      questions: [
        {
          id: 1,
          title: "Basic String Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/encode-and-decode-strings/",
          description: "Base Pattern: Length prefix encoding",
          details: {
            keyDifference: "encoded += f\"{len(s)}#{s}\" - Basic length-prefixed encoding",
            commonError: "Delimiter collision",
            optimization: "Fixed-width length field"
          }
        },
        {
          id: 2,
          title: "Character Run Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/string-compression/",
          description: "Builds on #1: Consecutive element counting",
          details: {
            keyDifference: "encoded += f\"{char}{count}\" - Added run-length counting",
            commonError: "Single character cases",
            optimization: "In-place modification"
          }
        },
        {
          id: 3,
          title: "Delimited String Encoding",
          difficulty: "easy",
          link: "https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-characters/",
          description: "Builds on #2: Custom delimiter handling",
          details: {
            keyDifference: "encoded += char + delimiter - Added delimiter escaping",
            commonError: "Escape sequence handling",
            optimization: "Delimiter selection"
          }
        },
        {
          id: 4,
          title: "Variable Width Encoding",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/628/B",
          description: "Builds on #3: Dynamic field width",
          details: {
            keyDifference: "encoded += varint(len) + data - Added variable width fields",
            commonError: "Width overflow",
            optimization: "Minimum width selection"
          }
        }
      ]
    },
    {
      title: "Array/List Serialization",
      questions: [
        {
          id: 5,
          title: "Array Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
          description: "Base Pattern: Array serialization",
          details: {
            keyDifference: "\",\".join(map(str, arr)) - Basic array encoding",
            commonError: "Data type handling",
            optimization: "Type-specific encoding"
          }
        },
        {
          id: 6,
          title: "Nested Array Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/mini-parser/",
          description: "Builds on #5: Recursive structure",
          details: {
            keyDifference: "encode(arr) + \"[\" + encode(subarr) + \"]\" - Added nesting depth",
            commonError: "Balanced brackets",
            optimization: "Stack-based parsing"
          }
        },
        {
          id: 7,
          title: "Sparse Array Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/subrectangle-queries/",
          description: "Builds on #6: Index-value pairs",
          details: {
            keyDifference: "encoded += f\"{idx}:{val}\" - Added sparse representation",
            commonError: "Range handling",
            optimization: "Range compression"
          }
        },
        {
          id: 8,
          title: "Dynamic Array Encoding",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1114/B",
          description: "Builds on #7: Resizable arrays",
          details: {
            keyDifference: "encoded += size_header + data - Added dynamic sizing",
            commonError: "Size synchronization",
            optimization: "Block-based growth"
          }
        }
      ]
    },
    {
      title: "Tree Serialization",
      questions: [
        {
          id: 9,
          title: "Binary Tree Encoding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/serialize-and-deserialize-binary-tree/",
          description: "Base Pattern: Tree traversal encoding",
          details: {
            keyDifference: "preorder(root, result) - Basic tree traversal",
            commonError: "Null handling",
            optimization: "Level-order for balance"
          }
        },
        {
          id: 10,
          title: "BST Optimized Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/serialize-and-deserialize-bst/",
          description: "Builds on #9: BST properties",
          details: {
            keyDifference: "encode_bounds(node, min, max) - Added value bounds",
            commonError: "Duplicate values",
            optimization: "Range-based pruning"
          }
        },
        {
          id: 11,
          title: "N-ary Tree Encoding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/serialize-and-deserialize-n-ary-tree/",
          description: "Builds on #10: Variable children",
          details: {
            keyDifference: "encode_children(node.children) - Added child count",
            commonError: "Children tracking",
            optimization: "Child list compression"
          }
        },
        {
          id: 12,
          title: "Complete Tree Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/maximum-width-of-binary-tree/",
          description: "Builds on #11: Level properties",
          details: {
            keyDifference: "encode_level(level) - Added completeness check",
            commonError: "Level alignment",
            optimization: "Implicit indexing"
          }
        }
      ]
    },
    {
      title: "Graph Serialization",
      questions: [
        {
          id: 13,
          title: "Basic Graph Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/clone-graph/",
          description: "Base Pattern: Adjacency encoding",
          details: {
            keyDifference: "encode_edges(node) - Basic edge encoding",
            commonError: "Cycle detection",
            optimization: "Edge list format"
          }
        },
        {
          id: 14,
          title: "Directed Graph Encoding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/reconstruct-itinerary/",
          description: "Builds on #13: Edge direction",
          details: {
            keyDifference: "encode_directed_edge(from, to) - Added direction tracking",
            commonError: "Back edge handling",
            optimization: "Adjacency matrix"
          }
        },
        {
          id: 15,
          title: "Weighted Graph Encoding",
          difficulty: "medium",
          link: "https://codeforces.com/problemset/problem/1167/C",
          description: "Builds on #14: Edge weights",
          details: {
            keyDifference: "encode_weight(edge, weight) - Added weight encoding",
            commonError: "Weight precision",
            optimization: "Weight compression"
          }
        },
        {
          id: 16,
          title: "Multi-Graph Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/most-stones-removed-with-same-row-or-column/",
          description: "Builds on #15: Multiple components",
          details: {
            keyDifference: "encode_component(subgraph) - Added graph separation",
            commonError: "Component links",
            optimization: "Shared vertex pool"
          }
        }
      ]
    },
    {
      title: "Data Structure Transformations",
      questions: [
        {
          id: 17,
          title: "Tree to List Encoding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/encode-n-ary-tree-to-binary-tree/",
          description: "Base Pattern: Structure conversion",
          details: {
            keyDifference: "encode_as_list(tree) - Basic transformation",
            commonError: "Structure preservation",
            optimization: "Memory layout"
          }
        },
        {
          id: 18,
          title: "Graph to Tree Encoding",
          difficulty: "hard",
          link: "https://leetcode.com/problems/redundant-connection-ii/",
          description: "Builds on #17: Cycle removal",
          details: {
            keyDifference: "make_tree(graph) - Added cycle elimination",
            commonError: "Root selection",
            optimization: "Union-find method"
          }
        },
        {
          id: 19,
          title: "Matrix to Graph Encoding",
          difficulty: "medium",
          link: "https://leetcode.com/problems/regions-cut-by-slashes/",
          description: "Builds on #18: Grid conversion",
          details: {
            keyDifference: "grid_to_graph(matrix) - Added spatial encoding",
            commonError: "Border handling",
            optimization: "Implicit edges"
          }
        },
        {
          id: 20,
          title: "Structure Versioning",
          difficulty: "hard",
          link: "https://leetcode.com/problems/basic-calculator-iii/",
          description: "Builds on #19: Version control",
          details: {
            keyDifference: "encode_version(structure) - Added version tracking",
            commonError: "Backward compatibility",
            optimization: "Delta encoding"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic string encoding → Complex structure serialization",
      "Single data type → Multiple data type handling",
      "Static structures → Dynamic and versioned structures",
      "Simple data structures → Complex graph and tree serialization"
    ],
    coreTechniques: [
      "Length-prefix encoding",
      "Delimiter-based serialization",
      "Tree traversal serialization",
      "Graph adjacency encoding",
      "Structure transformation techniques"
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
      },
      {
        title: "Binary Tree Serialization Template",
        code: `
class Codec:
    def serialize(self, root):
        """Serialize a binary tree to a string"""
        if not root:
            return "null"
        return f"{root.val},{self.serialize(root.left)},{self.serialize(root.right)}"
    
    def deserialize(self, data):
        """Deserialize a string to a binary tree"""
        def dfs():
            val = next(vals)
            if val == "null":
                return None
            node = TreeNode(int(val))
            node.left = dfs()
            node.right = dfs()
            return node
        
        vals = iter(data.split(","))
        return dfs()
        `
      },
      {
        title: "Graph Serialization Template",
        code: `
class Codec:
    def encode(self, graph):
        """Encode a graph to a string"""
        if not graph:
            return ""
        
        # Format: nodes_count#node1,adj1|node2,adj2|...
        encoded = [str(len(graph))]
        for node, adj in graph.items():
            encoded.append(f"{node}:{','.join(map(str, adj))}")
        return "#".join(encoded)
    
    def decode(self, data):
        """Decode a string to a graph"""
        if not data:
            return {}
        
        parts = data.split("#")
        nodes_count = int(parts[0])
        graph = {}
        
        for i in range(1, len(parts)):
            node, adj = parts[i].split(":")
            graph[int(node)] = [int(x) for x in adj.split(",") if x]
        
        return graph
        `
      }
    ],
    testingStrategy: [
      "Test with various input sizes and types",
      "Include edge cases (empty structures, single elements)",
      "Verify correctness of serialization and deserialization",
      "Test with cyclic structures (graphs)",
      "Benchmark performance with large inputs"
    ],
    commonPitfalls: [
      "Not handling special characters in strings",
      "Incorrect cycle detection in graphs",
      "Memory leaks in recursive serialization",
      "Loss of precision in floating-point values",
      "Incorrect handling of empty/null values"
    ]
  }
}

