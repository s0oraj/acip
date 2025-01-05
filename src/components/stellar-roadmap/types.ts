// components/stellar-roadmap/types.ts
export interface NodeType {
  id: string
  data: { label: string }
  position: { x: number; y: number }
  className?: string
}

export interface EdgeType {
  id: string
  source: string
  target: string
  animated?: boolean
}
