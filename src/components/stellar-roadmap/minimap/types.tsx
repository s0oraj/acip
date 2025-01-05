// components/stellar-roadmap/minimap/types.ts
import * as THREE from 'three';

export interface Node {
  id: string;
  className?: string;
}

export interface Edge {
  source: string;
  target: string;
}

export interface MinimapProps {
  nodes: Node[];
  edges: Edge[];
  nodePositions: Map<string, [number, number, number]>;
  activeNode: string | null;
  camera?: THREE.Camera;
  controls?: any;
  mode?: '2d' | '3d';
}
