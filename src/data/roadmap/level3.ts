import { Node, Edge } from '@xyflow/react'

export const initialNodes: Node[] = [
  { 
    id: 'start',
    data: { label: 'Level 3: Advanced' },
    position: { x: 0, y: 240 },
    className: 'start-node'
  },
  { 
    id: 'p1',
    data: { label: '5. Meet in Middle Pattern' },
    position: { x: -160, y: 160 },
    className: 'pattern-node'
  },
  { 
    id: 'p2',
    data: { label: "6. Mo's Algorithm Pattern" },
    position: { x: 160, y: 160 },
    className: 'pattern-node'
  },
  // Meet in Middle Pattern subpatterns
  { 
    id: 'mm1',
    data: { label: '5A.1 Sum Partition' },
    position: { x: -320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'mm2',
    data: { label: '5A.2 Subset Generation' },
    position: { x: -360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'mm3',
    data: { label: '5A.3 Array Division' },
    position: { x: -320, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'sd1',
    data: { label: '5B.1 Two Arrays Problem' },
    position: { x: -160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'sd2',
    data: { label: '5B.2 Subset XOR' },
    position: { x: -240, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'sd3',
    data: { label: '5B.3 Sequence Division' },
    position: { x: -200, y: -80 },
    className: 'subpattern-node'
  },
  // Mo's Algorithm Pattern subpatterns
  { 
    id: 'mo1',
    data: { label: '6A.1 Range Sum Query' },
    position: { x: 160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'mo2',
    data: { label: '6A.2 XOR Queries' },
    position: { x: 120, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'mo3',
    data: { label: '6A.3 Count Nice Pairs' },
    position: { x: 80, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'fq1',
    data: { label: '6B.1 Most Frequent Element' },
    position: { x: 320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'fq2',
    data: { label: '6B.2 K-Most Frequent' },
    position: { x: 360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'fq3',
    data: { label: '6B.3 Count Pairs with Sum' },
    position: { x: 320, y: -80 },
    className: 'subpattern-node'
  }
]

export const initialEdges: Edge[] = [
  { id: 'e-start-p1', source: 'start', target: 'p1', animated: true },
  { id: 'e-start-p2', source: 'start', target: 'p2', animated: true },
  { id: 'e-p1-mm1', source: 'p1', target: 'mm1' },
  { id: 'e-p1-sd1', source: 'p1', target: 'sd1' },
  { id: 'mm1-mm2', source: 'mm1', target: 'mm2' },
  { id: 'mm2-mm3', source: 'mm2', target: 'mm3' },
  { id: 'sd1-sd2', source: 'sd1', target: 'sd2' },
  { id: 'sd2-sd3', source: 'sd2', target: 'sd3' },
  { id: 'e-p2-mo1', source: 'p2', target: 'mo1' },
  { id: 'e-p2-fq1', source: 'p2', target: 'fq1' },
  { id: 'mo1-mo2', source: 'mo1', target: 'mo2' },
  { id: 'mo2-mo3', source: 'mo2', target: 'mo3' },
  { id: 'fq1-fq2', source: 'fq1', target: 'fq2' },
  { id: 'fq2-fq3', source: 'fq2', target: 'fq3' },
  // Cross pattern connections
  { id: 'sd2-mo1', source: 'sd2', target: 'mo1' },
  { id: 'mm2-sd2', source: 'mm2', target: 'sd2' },
  { id: 'mm3-fq1', source: 'mm3', target: 'fq1' },
  { id: 'sd3-fq2', source: 'sd3', target: 'fq2' }
]