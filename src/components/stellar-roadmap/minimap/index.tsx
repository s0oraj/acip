// components/stellar-roadmap/minimap/index.tsx
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MinimapProps } from './types';
import { setup2DCanvas, render2D } from './2d';
import { setup3DScene, update3DScene } from './3d';

const Minimap: React.FC<MinimapProps> = ({ 
  nodes, 
  edges, 
  nodePositions, 
  activeNode, 
  camera, 
  controls,
  mode = '2d'
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const minimapCameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const minimapControlsRef = useRef<OrbitControls | null>(null);
  const [is3D, setIs3D] = useState(mode === '3d');
  const [isDragging, setIsDragging] = useState(false);

  // Initialize 3D scene
  useEffect(() => {
    if (!containerRef.current || !is3D) return;

    const { scene, renderer, camera, controls, cleanup } = setup3DScene(
      containerRef.current,
      (controls) => {
        minimapControlsRef.current = controls;
      }
    );

    sceneRef.current = scene;
    rendererRef.current = renderer;
    minimapCameraRef.current = camera;

    return cleanup;
  }, [is3D]);

  // Setup 2D canvas
  useEffect(() => {
    if (!canvasRef.current || is3D) return;
    setup2DCanvas(canvasRef.current);
  }, [is3D]);

  // Update 3D scene content
  useEffect(() => {
    if (!sceneRef.current || !is3D) return;
    return update3DScene(
      sceneRef.current,
      nodes,
      edges,
      nodePositions,
      activeNode,
      camera,
      controls
    );
  }, [nodes, edges, nodePositions, activeNode, camera, controls, is3D]);

  // Animation loop
  useEffect(() => {
    let animationFrame: number;

    const animate = () => {
      if (is3D) {
        if (minimapControlsRef.current) {
          minimapControlsRef.current.update();
        }
        if (rendererRef.current && sceneRef.current && minimapCameraRef.current) {
          rendererRef.current.render(sceneRef.current, minimapCameraRef.current);
        }
      } else {
        if (canvasRef.current) {
          render2D(canvasRef.current, nodes, edges, nodePositions, activeNode, camera);
        }
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [is3D, nodes, edges, nodePositions, activeNode, camera]);

  // Handle camera movement
  useEffect(() => {
    if (!camera || !controls) return;

    const handleCameraChange = () => {
      if (!is3D && canvasRef.current) {
        render2D(canvasRef.current, nodes, edges, nodePositions, activeNode, camera);
      }
    };

    controls.addEventListener('change', handleCameraChange);
    return () => controls.removeEventListener('change', handleCameraChange);
  }, [camera, controls, is3D, nodes, edges, nodePositions, activeNode]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 0.95, scale: 1, y: 0 }}
      transition={{ duration: 0.3, type: "spring", stiffness: 260, damping: 20 }}
      className="absolute bottom-4 right-4 z-50"
    >
      <Card className="w-48 h-36 overflow-hidden shadow-xl">
        <div className="relative w-full h-full bg-gray-900/90 backdrop-blur-md">
          {is3D ? (
            <div 
              ref={containerRef} 
              className="w-full h-full"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            />
          ) : (
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
            />
          )}
          <button
            onClick={() => setIs3D(!is3D)}
            className="absolute top-2 right-2 p-1 rounded-md bg-gray-800/80 hover:bg-gray-700/80 transition-colors text-white text-sm"
          >
            {is3D ? 'View 2D' : 'View 3D'}
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

export default Minimap;
