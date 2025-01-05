import React, { useRef, useCallback, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ConstellationEdgeProps {
  start: [number, number, number]
  end: [number, number, number]
  animated?: boolean
  isLocked: boolean
  onDrag: (startDelta: [number, number, number]) => void
}

export const ConstellationEdge = React.memo(({ 
  start, 
  end,
  animated,
  isLocked,
  onDrag,
}: ConstellationEdgeProps) => {
  const ref = useRef<THREE.Line>(null)
  const dragging = useRef(false)
  const previousPosition = useRef([0, 0])
  
  useFrame(({ clock }) => {
    if (animated && ref.current?.material) {
      (ref.current.material as THREE.Material).opacity = Math.sin(clock.getElapsedTime() * 2) * 0.5 + 0.5
    }
  })

  const handlePointerDown = useCallback((e: THREE.Event<PointerEvent>) => {
    if (isLocked) {
      e.stopPropagation()
      dragging.current = true
      previousPosition.current = [e.clientX, e.clientY]
    }
  }, [isLocked])

  const handlePointerMove = useCallback((e: PointerEvent) => {
    if (!dragging.current) return

    const dx = (e.clientX - previousPosition.current[0]) / 50
    const dy = -(e.clientY - previousPosition.current[1]) / 50

    onDrag([dx, dy, 0])
    previousPosition.current = [e.clientX, e.clientY]
  }, [onDrag])

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

  const direction = new THREE.Vector3(
    end[0] - start[0],
    end[1] - start[1],
    end[2] - start[2]
  )
  
  const curve = new THREE.QuadraticBezierCurve3(
    new THREE.Vector3(...start),
    new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2,
      ((start[2] + end[2]) / 2) + direction.length() * 0.2
    ),
    new THREE.Vector3(...end)
  )

  const points = curve.getPoints(50)
  const geometry = new THREE.BufferGeometry().setFromPoints(points)

  return (
    <line 
      ref={ref} 
      geometry={geometry}
      onPointerDown={handlePointerDown}
    >
      <lineBasicMaterial 
        color={animated ? "#6366F1" : "#4B5563"}
        transparent={animated}
        opacity={animated ? 0.5 : 1}
        linewidth={1}
      />
    </line>
  )
})

export default ConstellationEdge
