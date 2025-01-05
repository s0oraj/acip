// src/components/stellar-roadmap/utils.ts
import * as THREE from 'three'
import { NodeType } from './types'

export const CAMERA_SETTINGS = {
  INITIAL_POSITION: [0, 2, 10] as const,
  MIN_DISTANCE: 5,
  MAX_DISTANCE: 100,
  ZOOM_IN_FACTOR: 0.75,
  ZOOM_OUT_FACTOR: 1.25
}

export const MINIMAP_CONFIG = {
  WIDTH: 800,
  HEIGHT: 800,
  SCALE_FACTOR: 50,
  OFFSET_X: 400
}

export const NODE_TRANSFORM = {
  SCALE_FACTOR: 25,
  OFFSET_X: 0,  
  OFFSET_Y: 0
}

export const calculateNodePositions = (nodes: NodeType[]) => {
  // First calculate all positions
  const positions = new Map(nodes.map(node => [
    node.id,
    [
      node.position.x / NODE_TRANSFORM.SCALE_FACTOR - NODE_TRANSFORM.OFFSET_X,
      node.position.y / NODE_TRANSFORM.SCALE_FACTOR - NODE_TRANSFORM.OFFSET_Y,
      0
    ] as [number, number, number]
  ]))

  // Calculate center of all nodes
  let centerX = 0, centerY = 0
  positions.forEach(pos => {
    centerX += pos[0]
    centerY += pos[1]
  })
  centerX /= positions.size
  centerY /= positions.size

  // Adjust all positions relative to center
  positions.forEach((pos, id) => {
    positions.set(id, [
      pos[0] - centerX,
      pos[1] - centerY,
      pos[2]
    ] as [number, number, number])
  })

  return positions
}

export const updateMinimapPosition = (node: NodeType, position: { x: number, y: number }) => ({
  ...node,
  position: {
    x: position.x * MINIMAP_CONFIG.SCALE_FACTOR + MINIMAP_CONFIG.OFFSET_X,
    y: -position.y * MINIMAP_CONFIG.SCALE_FACTOR + MINIMAP_CONFIG.OFFSET_X
  }
})

export const calculateNewCameraPosition = (
  camera: THREE.Camera,
  targetPosition: [number, number, number],
  controlsTarget: THREE.Vector3,
  distance: number
) => {
  const direction = camera.position.clone().sub(controlsTarget).normalize()
  return controlsTarget.clone().add(direction.multiplyScalar(distance))
}
