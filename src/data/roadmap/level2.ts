import { Node, Edge } from '@xyflow/react'

export const initialNodes: Node[] = [
  { 
    id: 'start',
    data: { label: 'Level 2: Intermediate' },
    position: { x: 0, y: 240 },
    className: 'start-node'
  },
  { 
    id: 'p1',
    data: { label: '3. Simulation Pattern' },
    position: { x: -160, y: 160 },
    className: 'pattern-node'
  },
  { 
    id: 'p2',
    data: { label: '4. Linear Sorting Pattern' },
    position: { x: 160, y: 160 },
    className: 'pattern-node'
  },
  // Simulation Pattern subpatterns
  { 
    id: 's1',
    data: { label: '3A.1 Command Processor' },
    position: { x: -320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 's2',
    data: { label: '3A.2 Vending Machine States' },
    position: { x: -360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 's3',
    data: { label: '3A.3 Text Editor States' },
    position: { x: -320, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'r1',
    data: { label: '3B.1 Basic Robot Movement' },
    position: { x: -160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'r2',
    data: { label: '3B.2 Robot Circle Pattern' },
    position: { x: -240, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'r3',
    data: { label: '3B.3 Grid Path Simulation' },
    position: { x: -200, y: -80 },
    className: 'subpattern-node'
  },
  // Linear Sorting Pattern subpatterns
  { 
    id: 'cs1',
    data: { label: '4A.1 Basic Counting Sort' },
    position: { x: 160, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'cs2',
    data: { label: '4A.2 Sort Array By Parity' },
    position: { x: 120, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'cs3',
    data: { label: '4A.3 Wiggle Sort' },
    position: { x: 80, y: -80 },
    className: 'subpattern-node'
  },
  { 
    id: 'bs1',
    data: { label: '4B.1 Range Addition' },
    position: { x: 320, y: 80 },
    className: 'subpattern-node'
  },
  { 
    id: 'bs2',
    data: { label: '4B.2 Car Fleet' },
    position: { x: 360, y: 0 },
    className: 'subpattern-node'
  },
  { 
    id: 'bs3',
    data: { label: '4B.3 Maximum Height Cuboids' },
    position: { x: 320, y: -80 },
    className: 'subpattern-node'
  }
]

export const initialEdges: Edge[] = [
  { id: 'e-start-p1', source: 'start', target: 'p1', animated: true },
  { id: 'e-start-p2', source: 'start', target: 'p2', animated: true },
  { id: 'e-p1-s1', source: 'p1', target: 's1' },
  { id: 'e-p1-r1', source: 'p1', target: 'r1' },
  { id: 's1-s2', source: 's1', target: 's2' },
  { id: 's2-s3', source: 's2', target: 's3' },
  { id: 'r1-r2', source: 'r1', target: 'r2' },
  { id: 'r2-r3', source: 'r2', target: 'r3' },
  { id: 'e-p2-cs1', source: 'p2', target: 'cs1' },
  { id: 'e-p2-bs1', source: 'p2', target: 'bs1' },
  { id: 'cs1-cs2', source: 'cs1', target: 'cs2' },
  { id: 'cs2-cs3', source: 'cs2', target: 'cs3' },
  { id: 'bs1-bs2', source: 'bs1', target: 'bs2' },
  { id: 'bs2-bs3', source: 'bs2', target: 'bs3' },
  // Cross pattern connections
  { id: 'r2-cs1', source: 'r2', target: 'cs1' },
  { id: 's2-r2', source: 's2', target: 'r2' },
  { id: 's3-bs1', source: 's3', target: 'bs1' },
  { id: 'r3-bs2', source: 'r3', target: 'bs2' }
]