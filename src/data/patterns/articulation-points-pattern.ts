import { Pattern } from '../types';

export const articulationPointsPattern: Pattern = {
  id: 9,
  title: "Articulation Points and Bridges Pattern",
  description: "Learn to identify critical nodes and bridges in graphs whose removal would disconnect the graph, crucial for network reliability analysis.",
  questions: [
    {
      id: 1,
      title: "Number of Connected Components in an Undirected Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-connected-components-in-an-undirected-graph/",
      description: "Base Pattern: DFS/Union-Find. Key Operation: count -= 1 on union",
      details: {
        keyDifference: "DFS/Union-Find",
        commonError: "Count initialization",
        optimization: "Path compression"
      }
    },
    {
      id: 2,
      title: "Redundant Connection",
      difficulty: "medium",
      link: "https://leetcode.com/problems/redundant-connection/",
      description: "Builds on #1: Cycle detection",
      details: {
        keyDifference: "Edge identification",
        commonError: "Multiple answers",
        optimization: "Union by rank"
      }
    },
    {
      id: 3,
      title: "Critical Connections in a Network",
      difficulty: "hard",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      description: "Builds on #2: Articulation points",
      details: {
        keyDifference: "Vertex importance",
        commonError: "Root case",
        optimization: "Early termination"
      }
    },
    {
      id: 4,
      title: "Number of Islands",
      difficulty: "medium",
      link: "https://leetcode.com/problems/number-of-islands/",
      description: "Base Pattern: Grid DFS/BFS. Key Operation: flood_fill(grid, i, j)",
      details: {
        keyDifference: "Grid DFS/BFS",
        commonError: "Boundary checking",
        optimization: "Direction array"
      }
    },
    {
      id: 5,
      title: "Number of Islands II",
      difficulty: "hard",
      link: "https://leetcode.com/problems/number-of-islands-ii/",
      description: "Builds on #4: Dynamic changes",
      details: {
        keyDifference: "Online updates",
        commonError: "Count tracking",
        optimization: "Path compression"
      }
    },
    {
      id: 6,
      title: "Making A Large Island",
      difficulty: "hard",
      link: "https://leetcode.com/problems/making-a-large-island/",
      description: "Builds on #5: Size optimization",
      details: {
        keyDifference: "Component merging",
        commonError: "Border cells",
        optimization: "Size caching"
      }
    },
    {
      id: 7,
      title: "Minimum Number of Days to Disconnect Island",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimum-number-of-days-to-disconnect-island/",
      description: "Builds on #6: Minimal cuts",
      details: {
        keyDifference: "Optimization goal",
        commonError: "Two-cell property",
        optimization: "Early termination"
      }
    },
    {
      id: 8,
      title: "Find Eventual Safe States",
      difficulty: "medium",
      link: "https://leetcode.com/problems/find-eventual-safe-states/",
      description: "Base Pattern: Cycle detection. Key Operation: state[node] = UNSAFE",
      details: {
        keyDifference: "Cycle detection",
        commonError: "State tracking",
        optimization: "Memoization"
      }
    },
    {
      id: 9,
      title: "Redundant Connection II",
      difficulty: "hard",
      link: "https://leetcode.com/problems/redundant-connection-ii/",
      description: "Builds on #8: In-degree handling",
      details: {
        keyDifference: "Parent constraints",
        commonError: "Case separation",
        optimization: "Early detection"
      }
    },
    {
      id: 10,
      title: "Find Critical and Pseudo-Critical Edges in Minimum Spanning Tree",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-critical-and-pseudo-critical-edges-in-minimum-spanning-tree/",
      description: "Builds on #9: Weight consideration",
      details: {
        keyDifference: "MST properties",
        commonError: "Edge classification",
        optimization: "Kruskal's modified"
      }
    },
    {
      id: 11,
      title: "Minimize Malware Spread",
      difficulty: "hard",
      link: "https://leetcode.com/problems/minimize-malware-spread/",
      description: "Builds on #10: Component importance",
      details: {
        keyDifference: "Size impact",
        commonError: "Multiple sources",
        optimization: "Component tracking"
      }
    },
    {
      id: 12,
      title: "Count Unreachable Pairs of Nodes in an Undirected Graph",
      difficulty: "medium",
      link: "https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/",
      description: "Builds on #11: Component pairs",
      details: {
        keyDifference: "Pair counting",
        commonError: "Size combinations",
        optimization: "Running sum"
      }
    },
    {
      id: 13,
      title: "Maximum Score of a Node Sequence",
      difficulty: "hard",
      link: "https://leetcode.com/problems/maximum-score-of-a-node-sequence/",
      description: "Builds on #12: Path scoring",
      details: {
        keyDifference: "Value optimization",
        commonError: "Path validation",
        optimization: "Priority-based selection"
      }
    },
    {
      id: 14,
      title: "Critical Connections in a Network",
      difficulty: "hard",
      link: "https://leetcode.com/problems/critical-connections-in-a-network/",
      description: "Builds on #13: Directed components",
      details: {
        keyDifference: "Two-pass algorithm",
        commonError: "Component tracking",
        optimization: "Stack usage"
      }
    },
    {
      id: 15,
      title: "Remove Max Number of Edges to Keep Graph Fully Traversable",
      difficulty: "hard",
      link: "https://leetcode.com/problems/remove-max-number-of-edges-to-keep-graph-fully-traversable/",
      description: "Base Pattern: Edge removal. Key Operation: redundant_edge_check()",
      details: {
        keyDifference: "Edge removal",
        commonError: "Connectivity preservation",
        optimization: "Type prioritization"
      }
    },
    {
      id: 16,
      title: "Reachable Nodes With Restrictions",
      difficulty: "medium",
      link: "https://leetcode.com/problems/reachable-nodes-with-restrictions/",
      description: "Builds on #15: Node restrictions",
      details: {
        keyDifference: "Forbidden nodes",
        commonError: "Visit tracking",
        optimization: "Set-based checking"
      }
    },
    {
      id: 17,
      title: "Count Subtrees With Max Distance Between Cities",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/",
      description: "Base Pattern: Tree components. Key Operation: max_distance_in_subtree()",
      details: {
        keyDifference: "Tree components",
        commonError: "Distance calculation",
        optimization: "Bit manipulation"
      }
    },
    {
      id: 18,
      title: "Count Pairs Of Nodes",
      difficulty: "hard",
      link: "https://leetcode.com/problems/count-pairs-of-nodes/",
      description: "Builds on #17: Layer constraints",
      details: {
        keyDifference: "Multi-criteria",
        commonError: "Edge weight handling",
        optimization: "Two-pointer technique"
      }
    },
    {
      id: 19,
      title: "Network Delay Time",
      difficulty: "medium",
      link: "https://leetcode.com/problems/network-delay-time/",
      description: "Calculate the minimum time for all nodes to receive a signal",
      details: {
        keyDifference: "Signal propagation",
        commonError: "Unreachable nodes",
        optimization: "Priority queue"
      }
    },
    {
      id: 20,
      title: "Find Cut Vertices",
      difficulty: "hard",
      link: "https://leetcode.com/problems/find-cut-vertices/",
      description: "Identify all articulation points in an undirected graph",
      details: {
        keyDifference: "Articulation point detection",
        commonError: "Root node handling",
        optimization: "DFS with low-link values"
      }
    },
  ],
  summary: {
    progressionElements: [
      "Basic connectivity → Complex network analysis",
      "Static graphs → Dynamic graph modifications",
      "Undirected graphs → Directed graph extensions",
      "Single-layer analysis → Multi-layer network optimization"
    ],
    coreTechniques: [
      "Depth-First Search (DFS)",
      "Union-Find data structure",
      "Tarjan's algorithm for bridges and articulation points",
      "Component size tracking",
      "Low-link value calculation"
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
      }
    ],
    testingStrategy: [
      "Test with various graph sizes and structures",
      "Check edge cases (single node, fully connected, tree-like)",
      "Verify correct identification of articulation points and bridges",
      "Test performance with large graphs",
      "Validate handling of disconnected components"
    ]
  }
};

