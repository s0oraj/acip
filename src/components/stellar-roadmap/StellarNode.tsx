import React, { useRef, useCallback, useEffect } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import * as THREE from 'three'
import { NodeType } from './types'

interface StellarNodeProps {
  node: NodeType
  position: [number, number, number]
  isActive: boolean
  onClick: () => void
  onDrag: (position: [number, number, number]) => void
  isLocked: boolean
  onSelect: () => void
}

export const StellarNode = React.memo(({ 
  node,
  position,
  isActive,
  onClick,
  onDrag,
  isLocked,
  onSelect,
}: StellarNodeProps) =>  {
  const meshRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()
  const isPrimary = node.className === 'start-node'
  const isPattern = node.className === 'pattern-node'
  const dragging = useRef(false)
  const previousPosition = useRef([0, 0])
  
  useFrame(() => {
    if (meshRef.current && !isLocked) {
      meshRef.current.rotation.y += 0.01
    }
  })

  const nodeScale = isPrimary ? 1.2 : isPattern ? 1 : 0.8
  const nodeColor = isPrimary ? "#FFD700" : isPattern ? "#6366F1" : "#4B5563"

  const handlePointerDown = useCallback((e: THREE.Event<PointerEvent>) => {
    e.stopPropagation()
    dragging.current = true
    previousPosition.current = [e.clientX, e.clientY]
  }, [])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragging.current) return

    const dx = (e.clientX - previousPosition.current[0]) / 50
    const dy = -(e.clientY - previousPosition.current[1]) / 50

    const newPosition: [number, number, number] = [
      position[0] + dx,
      position[1] + dy,
      position[2]
    ]

    onDrag(newPosition)
    previousPosition.current = [e.clientX, e.clientY]
  }, [position, onDrag])

  const handlePointerUp = useCallback(() => {
    dragging.current = false
  }, [])

  useEffect(() => {
    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerup', handlePointerUp)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', handlePointerUp)
    }
  }, [handlePointerMove, handlePointerUp])
  
  return (
    <group
      position={position}
      onClick={(e) => {
        e.stopPropagation()
        if (!isLocked) {
          onClick()
          onSelect()
        }
      }}
      onPointerDown={handlePointerDown}
    >
      <mesh 
        ref={meshRef}
        scale={isActive ? 1.2 : 1}
      >
        <sphereGeometry args={[nodeScale, 32, 32]} />
        <meshStandardMaterial 
          color={isActive ? "#60A5FA" : nodeColor}
          metalness={0.8}
          roughness={0.2}
          emissive={isPrimary || isPattern ? nodeColor : "#000000"}
          emissiveIntensity={isPrimary ? 0.5 : isPattern ? 0.3 : 0}
        />
      </mesh>
      <Html 
        center 
        distanceFactor={15}
        style={{ 
          pointerEvents: 'none',
          userSelect: 'none'
        }}
      >
        <div className={`
          px-3 py-1.5 rounded-lg text-sm whitespace-nowrap
          ${node.className === 'start-node' 
            ? 'bg-yellow-500/20 text-yellow-200' 
            : node.className === 'pattern-node'
            ? 'bg-indigo-500/20 text-indigo-200'
            : 'bg-gray-800/90 text-white'}
        `}>
          {node.data.label}
        </div>
      </Html>
    </group>
  )
})

export default StellarNode
