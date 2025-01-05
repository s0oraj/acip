import { Node, Edge } from '@xyflow/react'

export const initialNodes: Node[] = [
  { 
    id: 'start',
    data: { label: 'Level 1: Foundation' },
    position: { x: 0, y: 240 },
    className: 'start-node'
  },
  { 
    id: 'p1',
    data: { label: '1. Counting Pattern' },
    position: { x: -160, y: 160 },
    className: 'pattern-node'
  },
  { 
    id: 'p2',
    data: { label: '2. Monotonic Stack/Queue' },
    position: { x: 160, y: 160 },
    className: 'pattern-node'
  },
  { 
    id: 'c1',
    data: { label: '1A.1 Single Value Counter' },
    position: { x: -320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'c2',
    data: { label: '1A.2 Conditional Counter' },
    position: { x: -360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'c3',
    data: { label: '1A.3 Multi-Value Counter' },
    position: { x: -320, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'f1',
    data: { label: '1B.1 Frequency Map' },
    position: { x: -160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'f2',
    data: { label: '1B.2 Group Frequency' },
    position: { x: -240, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'f3',
    data: { label: '1B.3 Freq of Frequencies' },
    position: { x: -200, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'w1',
    data: { label: '1C.1 Fixed Window' },
    position: { x: 0, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'w2',
    data: { label: '1C.2 Dynamic Window' },
    position: { x: -120, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'w3',
    data: { label: '1C.3 Multi-Condition' },
    position: { x: -80, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'n1',
    data: { label: '2A.1 Next Greater Element' },
    position: { x: 160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'n2',
    data: { label: '2A.2 Previous Greater' },
    position: { x: 120, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'n3',
    data: { label: '2A.3 Circular Array' },
    position: { x: 80, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'm1',
    data: { label: '2B.1 Sliding Window Max' },
    position: { x: 320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'm2',
    data: { label: '2B.2 Window Difference' },
    position: { x: 360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'm3',
    data: { label: '2B.3 Dynamic Window Sum' },
    position: { x: 320, y: -80 },
    className: 'subpattern-node'
  },
]

// Edges remain the same as they reference the node IDs which haven't changed
export const initialEdges: Edge[] = [
  { id: 'e-start-p1', source: 'start', target: 'p1', animated: true },
  { id: 'e-start-p2', source: 'start', target: 'p2', animated: true },
  { id: 'e-p1-c1', source: 'p1', target: 'c1' },
  { id: 'e-p1-f1', source: 'p1', target: 'f1' },
  { id: 'e-p1-w1', source: 'p1', target: 'w1' },
  { id: 'e-c1-c2', source: 'c1', target: 'c2' },
  { id: 'e-c2-c3', source: 'c2', target: 'c3' },
  { id: 'e-f1-f2', source: 'f1', target: 'f2' },
  { id: 'e-f2-f3', source: 'f2', target: 'f3' },
  { id: 'e-w1-w2', source: 'w1', target: 'w2' },
  { id: 'e-w2-w3', source: 'w2', target: 'w3' },
  { id: 'e-p2-n1', source: 'p2', target: 'n1' },
  { id: 'e-p2-m1', source: 'p2', target: 'm1' },
  { id: 'e-n1-n2', source: 'n1', target: 'n2' },
  { id: 'e-n2-n3', source: 'n2', target: 'n3' },
  { id: 'e-m1-m2', source: 'm1', target: 'm2' },
  { id: 'e-m2-m3', source: 'm2', target: 'm3' },
  { id: 'e-w2-m1', source: 'w2', target: 'm1' },
  { id: 'e-f2-n1', source: 'f2', target: 'n1' },
  { id: 'e-c2-f2', source: 'c2', target: 'f2' },
  { id: 'e-w2-f3', source: 'w2', target: 'f3' },
]
