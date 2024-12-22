import { Pattern } from '@/types';
import { basicArticulationPoints } from './basic-articulation-points';
import { bridgeIdentification } from './bridge-identification';
import { graphConnectivity } from './graph-connectivity';
import { networkReliability } from './network-reliability';
import { advancedApplications } from './advanced-applications';

export const articulationPointsBridgesPattern: Pattern = {
  id: 9,
  title: "Articulation Points and Bridges Pattern",
  description: "Master techniques for identifying critical nodes and edges in graphs to analyze network vulnerabilities and connectivity.",
  subpatterns: [
    basicArticulationPoints,
    bridgeIdentification,
    graphConnectivity,
    networkReliability,
    advancedApplications
  ],
  questions: [], // All questions are now in subpatterns
  summary: {
    progressionElements: [
      "Basic DFS → Tarjan's algorithm",
      "Undirected graphs → Directed graphs",
      "Single articulation point → Multiple critical nodes",
      "Bridge identification → Component analysis"
    ],
    coreTechniques: [
      "Depth-First Search (DFS)",
      "Low-link values calculation",
      "Tarjan's algorithm",
      "Biconnected components"
    ],
    implementationGuidelines: [
      {
        title: "Tarjan's Algorithm Template",
        code: `
class Graph:
    def __init__(self, vertices):
        self.V = vertices
        self.graph = [[] for _ in range(vertices)]
        self.time = 0

    def add_edge(self, u, v):
        self.graph[u].append(v)
        self.graph[v].append(u)

    def articulation_points(self):
        disc = [-1] * self.V
        low = [-1] * self.V
        parent = [-1] * self.V
        ap = [False] * self.V
        
        for i in range(self.V):
            if disc[i] == -1:
                self.dfs(i, disc, low, parent, ap)
        
        return [i for i in range(self.V) if ap[i]]

    def dfs(self, u, disc, low, parent, ap):
        children = 0
        disc[u] = self.time
        low[u] = self.time
        self.time += 1

        for v in self.graph[u]:
            if disc[v] == -1:
                children += 1
                parent[v] = u
                self.dfs(v, disc, low, parent, ap)
                low[u] = min(low[u], low[v])

                if parent[u] == -1 and children > 1:
                    ap[u] = True
                if parent[u] != -1 and low[v] >= disc[u]:
                    ap[u] = True
            elif v != parent[u]:
                low[u] = min(low[u], disc[v])
        `
      }
    ],
    testingStrategy: [
      "Test with various graph structures (trees, cycles, complete graphs)",
      "Verify correctness with known articulation points and bridges",
      "Check edge cases (single node, disconnected components)",
      "Test performance with large graphs",
      "Validate robustness against different input formats"
    ]
  }
};

