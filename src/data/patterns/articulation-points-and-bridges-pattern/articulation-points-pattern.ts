import { Pattern } from '../types'

export const articulationPointsPattern: Pattern = {
  id: 9,
  title: "Articulation Points and Bridges Pattern",
  description: "Master techniques for identifying critical components in graph structures across multiple complexity levels",
  subpatterns: [
    {
      title: "Basic Graph Cutting",
      questions: [
        {
          id: 1,
          title: "Number of Connected Components",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
          description: "Base Pattern: DFS/Union-Find",
          details: {
            keyDifference: "count_components() - Base case for component counting",
            commonError: "Count initialization",
            optimization: "Path compression"
          }
        },
        {
          id: 2,
          title: "Critical Connections",
          difficulty: "hard",
          link: "https://leetcode.com/problems/critical-connections-in-a-network/",
          description: "Builds on #1: Bridge detection",
          details: {
            keyDifference: "Track low values - Identifying bridges",
            commonError: "Back edge handling",
            optimization: "Early termination"
          }
        },
        {
          id: 3,
          title: "Articulation Points",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/1722/E",
          description: "Builds on #2: Vertex detection",
          details: {
            keyDifference: "Modified bridge logic - Identifying critical vertices",
            commonError: "Root case handling",
            optimization: "State caching"
          }
        },
        {
          id: 4,
          title: "Critical MST Edges",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
          description: "Builds on #3: Weight impact",
          details: {
            keyDifference: "Edge importance sorting - Assessing edge criticality",
            commonError: "Weight ordering",
            optimization: "Skip redundant checks"
          }
        }
      ]
    },
    {
      title: "Grid Connectivity",
      questions: [
        {
          id: 5,
          title: "Number of Islands",
          difficulty: "medium",
          link: "https://leetcode.com/problems/number-of-islands/",
          description: "Base Pattern: Grid DFS/BFS",
          details: {
            keyDifference: "flood_fill() - Identifying connected regions",
            commonError: "Boundary checking",
            optimization: "Direction array"
          }
        },
        {
          id: 6,
          title: "Minimum Days to Disconnect",
          difficulty: "hard",
          link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/",
          description: "Builds on #5: Cut minimization",
          details: {
            keyDifference: "Optimization goal - Minimizing disconnection time",
            commonError: "Two-cell property",
            optimization: "Early termination"
          }
        },
        {
          id: 7,
          title: "Shortest Bridge",
          difficulty: "hard",
          link: "https://leetcode.com/problems/shortest-bridge/",
          description: "Builds on #6: Distance tracking",
          details: {
            keyDifference: "Component distance - Finding shortest connection",
            commonError: "BFS initialization",
            optimization: "Multi-source BFS"
          }
        },
        {
          id: 8,
          title: "Making A Large Island",
          difficulty: "hard",
          link: "https://leetcode.com/problems/making-a-large-island/",
          description: "Builds on #7: Size impact",
          details: {
            keyDifference: "Component merging - Maximizing island size",
            commonError: "Border cells",
            optimization: "Size caching"
          }
        }
      ]
    },
    {
      title: "Directed Components",
      questions: [
        {
          id: 9,
          title: "Find Eventual Safe States",
          difficulty: "medium",
          link: "https://leetcode.com/problems/find-eventual-safe-states/",
          description: "Base Pattern: Cycle detection",
          details: {
            keyDifference: "is_safe_state() - Identifying safe nodes",
            commonError: "State tracking",
            optimization: "Memoization"
          }
        },
        {
          id: 10,
          title: "Strong Bridges",
          difficulty: "hard",
          link: "https://codeforces.com/problemset/problem/1000/E",
          description: "Builds on #9: Directed bridges",
          details: {
            keyDifference: "Direction handling - Identifying critical directed edges",
            commonError: "Edge classification",
            optimization: "Component condensation"
          }
        },
        {
          id: 11,
          title: "Minimize Malware Spread",
          difficulty: "hard",
          link: "https://leetcode.com/problems/minimize-malware-spread/",
          description: "Builds on #10: Impact scores",
          details: {
            keyDifference: "Component importance - Assessing node removal impact",
            commonError: "Multiple sources",
            optimization: "Size tracking"
          }
        },
        {
          id: 12,
          title: "Component Bridges",
          difficulty: "hard",
          link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/",
          description: "Builds on #11: Meta-graph",
          details: {
            keyDifference: "Component-level disconnection - Higher-level bridge analysis",
            commonError: "Minimum days calculation",
            optimization: "Two-cell property"
          }
        }
      ]
    },
    {
      title: "Component Analysis",
      questions: [
        {
          id: 13,
          title: "Unreachable Pairs",
          difficulty: "medium",
          link: "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/",
          description: "Base Pattern: Component counting",
          details: {
            keyDifference: "count_pairs() - Calculating unreachable node pairs",
            commonError: "Size combinations",
            optimization: "Running sum"
          }
        },
        {
          id: 14,
          title: "Maximum Score Sequence",
          difficulty: "hard",
          link: "https://leetcode.com/problems/maximum-score-of-a-node-sequence/",
          description: "Builds on #13: Path values",
          details: {
            keyDifference: "Score tracking - Maximizing path scores",
            commonError: "Path validation",
            optimization: "Priority queue"
          }
        },
        {
          id: 15,
          title: "Strongly Connected Components",
          difficulty: "hard",
          link: "https://leetcode.com/problems/critical-connections-in-a-network/",
          description: "Builds on #14: Strong components",
          details: {
            keyDifference: "Two-pass algorithm - Identifying strongly connected components",
            commonError: "Stack ordering",
            optimization: "Visit tracking"
          }
        },
        {
          id: 16,
          title: "Remove Max Edges",
          difficulty: "hard",
          link: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
          description: "Builds on #15: Edge removal",
          details: {
            keyDifference: "Type handling - Maximizing edge removal",
            commonError: "Connectivity check",
            optimization: "Type prioritization"
          }
        }
      ]
    },
    {
      title: "Advanced Patterns",
      questions: [
        {
          id: 17,
          title: "Reachable with Restrictions",
          difficulty: "medium",
          link: "https://leetcode.com/problems/reachable-nodes-with-restrictions/",
          description: "Base Pattern: Restricted DFS",
          details: {
            keyDifference: "check_forbidden() - Navigating with restrictions",
            commonError: "Visit tracking",
            optimization: "Set lookup"
          }
        },
        {
          id: 18,
          title: "Critical MST Classification",
          difficulty: "hard",
          link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
          description: "Builds on #17: Edge types",
          details: {
            keyDifference: "MST variations - Classifying edges in MST",
            commonError: "Edge ordering",
            optimization: "Skip redundant"
          }
        },
        {
          id: 19,
          title: "Hierarchical Components",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/",
          description: "Builds on #18: Tree structure",
          details: {
            keyDifference: "Hierarchy analysis - Analyzing component hierarchies",
            commonError: "Distance calculation",
            optimization: "Bit manipulation"
          }
        },
        {
          id: 20,
          title: "Network Layer Optimization",
          difficulty: "hard",
          link: "https://leetcode.com/problems/count-pairs-of-nodes/",
          description: "Builds on #19: Multi-criteria",
          details: {
            keyDifference: "Layer constraints - Optimizing across network layers",
            commonError: "Weight handling",
            optimization: "Two pointers"
          }
        }
      ]
    }
  ],
  summary: {
    progressionElements: [
      "Basic graph cutting → Advanced network optimization",
      "Undirected graphs → Directed and weighted graphs",
      "Single component analysis → Multi-component interactions",
      "Static structures → Dynamic and hierarchical structures"
    ],
    coreTechniques: [
      "Depth-First Search (DFS)",
      "Tarjan's algorithm",
      "Union-Find data structure",
      "Strongly Connected Components (SCC)",
      "Minimum Spanning Tree (MST) analysis"
    ],
    implementationGuidelines: [
      {
        title: "Basic Articulation Points Template",
        code: `
def find_articulation_points(graph):
    n = len(graph)
    disc = [-1] * n
    low = [-1] * n
    articulation = [False] * n
    time = [0]  # Mutable time reference
    
    def dfs(u, parent):
        children = 0
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        for v in graph[u]:
            if disc[v] == -1:  # Unvisited
                children += 1
                dfs(v, u)
                low[u] = min(low[u], low[v])
                
                # Articulation point conditions
                if parent == -1 and children > 1:
                    articulation[u] = True
                if parent != -1 and low[v] >= disc[u]:
                    articulation[u] = True
            elif v != parent:  # Back edge
                low[u] = min(low[u], disc[v])
    
    for u in range(n):
        if disc[u] == -1:
            dfs(u, -1)
            
    return articulation
        `
      },
      {
        title: "Bridge Finding Template",
        code: `
def find_bridges(n, edges):
    graph = [[] for _ in range(n)]
    for u, v in edges:
        graph[u].append(v)
        graph[v].append(u)
        
    disc = [-1] * n
    low = [-1] * n
    time = [0]
    bridges = []
    
    def dfs(u, parent):
        disc[u] = low[u] = time[0]
        time[0] += 1
        
        for v in graph[u]:
            if disc[v] == -1:
                dfs(v, u)
                low[u] = min(low[u], low[v])
                if low[v] > disc[u]:
                    bridges.append([u, v])
            elif v != parent:
                low[u] = min(low[u], disc[v])
    
    for u in range(n):
        if disc[u] == -1:
            dfs(u, -1)
            
    return bridges
        `
      },
      {
        title: "Component Size Template",
        code: `
class UnionFind:
    def __init__(self, n):
        self.parent = list(range(n))
        self.size = [1] * n
        self.count = n
    
    def find(self, x):
        if self.parent[x] != x:
            self.parent[x] = self.find(self.parent[x])
        return self.parent[x]
    
    def union(self, x, y):
        px, py = self.find(x), self.find(y)
        if px == py:
            return False
        if self.size[px] < self.size[py]:
            px, py = py, px
        self.parent[py] = px
        self.size[px] += self.size[py]
        self.count -= 1
        return True
        `
      }
    ],
    testingStrategy: [
      "Test with various graph sizes and structures",
      "Include edge cases (single node, fully connected, disconnected)",
      "Verify correctness of articulation point and bridge detection",
      "Test with cyclic and acyclic graphs",
      "Benchmark performance with large graphs"
    ],
    commonPitfalls: [
      "Incorrect handling of root nodes in articulation point detection",
      "Failing to reset visited states between multiple runs",
      "Incorrect update of low values in bridge detection",
      "Not considering disconnected components",
      "Inefficient implementation leading to TLE for large graphs"
    ]
  }
}

