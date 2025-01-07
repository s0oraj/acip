import { Node, Edge } from '@xyflow/react'

export const initialNodes: Node[] = [
  { 
    id: 'start',
    data: { label: 'Level 4: Expert' },
    position: { x: 0, y: 240 },
    className: 'start-node'
  },
  { 
    id: 'p1',
    data: { label: '10. Segment Tree Pattern' },
    position: { x: -160, y: 160 },
    className: 'pattern-node'
  },
  { 
    id: 'p2',
    data: { label: '11. Binary Indexed Tree Pattern' },
    position: { x: 160, y: 160 },
    className: 'pattern-node'
  },
  // Segment Tree Pattern subpatterns
  { 
    id: 'st1',
    data: { label: '10A.1 Range Sum Query' },
    position: { x: -320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'st2',
    data: { label: '10A.2 Range Maximum Query' },
    position: { x: -360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'st3',
    data: { label: '10A.3 Range XOR Query' },
    position: { x: -320, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'lp1',
    data: { label: '10B.1 Range Update Operation' },
    position: { x: -160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'lp2',
    data: { label: '10B.2 Range Addition Query' },
    position: { x: -240, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'lp3',
    data: { label: '10B.3 Range Set Query' },
    position: { x: -200, y: -80 },
    className: 'subpattern-node'
  },
  // Binary Indexed Tree Pattern subpatterns
  { 
    id: 'bit1',
    data: { label: '11A.1 Range Sum Query' },
    position: { x: 160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'bit2',
    data: { label: '11A.2 Count of Smaller Numbers' },
    position: { x: 120, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'bit3',
    data: { label: '11A.3 Range Frequency Query' },
    position: { x: 80, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'os1',
    data: { label: '11B.1 Kth Smallest Element' },
    position: { x: 320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'os2',
    data: { label: '11B.2 Counting Inversions' },
    position: { x: 360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'os3',
    data: { label: '11B.3 Next Greater Element' },
    position: { x: 320, y: -80 },
    className: 'subpattern-node'
  }
]

export const initialEdges: Edge[] = [
  { id: 'e-start-p1', source: 'start', target: 'p1', animated: true },
  { id: 'e-start-p2', source: 'start', target: 'p2', animated: true },
  { id: 'e-p1-st1', source: 'p1', target: 'st1' },
  { id: 'e-p1-lp1', source: 'p1', target: 'lp1' },
  { id: 'st1-st2', source: 'st1', target: 'st2' },
  { id: 'st2-st3', source: 'st2', target: 'st3' },
  { id: 'lp1-lp2', source: 'lp1', target: 'lp2' },
  { id: 'lp2-lp3', source: 'lp2', target: 'lp3' },
  { id: 'e-p2-bit1', source: 'p2', target: 'bit1' },
  { id: 'e-p2-os1', source: 'p2', target: 'os1' },
  { id: 'bit1-bit2', source: 'bit1', target: 'bit2' },
  { id: 'bit2-bit3', source: 'bit2', target: 'bit3' },
  { id: 'os1-os2', source: 'os1', target: 'os2' },
  { id: 'os2-os3', source: 'os2', target: 'os3' },
  // Cross pattern connections
  { id: 'lp2-bit1', source: 'lp2', target: 'bit1' },
  { id: 'st2-lp2', source: 'st2', target: 'lp2' },
  { id: 'st3-os1', source: 'st3', target: 'os1' },
  { id: 'lp3-os2', source: 'lp3', target: 'os2' }
]