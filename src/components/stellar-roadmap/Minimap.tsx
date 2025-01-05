import React, { useEffect, useRef, useMemo, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';

interface Node {
  id: string;
  className?: string;
}

interface Edge {
  source: string;
  target: string;
}

interface MinimapProps {
  nodes: Node[];
  edges: Edge[];
  nodePositions: Map<string, [number, number, number]>;
  activeNode: string | null;
  camera?: THREE.Camera;
  controls?: any;
  mode?: '2d' | '3d';
}

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

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#0f172a');
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(192, 144);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const minimapCamera = new THREE.PerspectiveCamera(75, 192/144, 0.1, 1000);
    minimapCamera.position.set(0, 15, 15);
    minimapCamera.lookAt(0, 0, 0);
    minimapCameraRef.current = minimapCamera;

    const minimapControls = new OrbitControls(minimapCamera, renderer.domElement);
    minimapControls.enableDamping = true;
    minimapControls.dampingFactor = 0.05;
    minimapControls.rotateSpeed = 0.5;
    minimapControls.zoomSpeed = 0.5;
    minimapControlsRef.current = minimapControls;

    return () => {
      minimapControls.dispose();
      renderer.dispose();
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, [is3D]);

  // Setup 2D canvas
  useEffect(() => {
    if (!canvasRef.current || is3D) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = canvas.offsetWidth * dpr;
    canvas.height = canvas.offsetHeight * dpr;
    ctx.scale(dpr, dpr);
  }, [is3D]);

  // Update 3D scene content
  useEffect(() => {
    if (!sceneRef.current || !is3D) return;

    while(sceneRef.current.children.length > 0) {
      sceneRef.current.remove(sceneRef.current.children[0]);
    }

    // Add nodes
    nodes.forEach(node => {
      const position = nodePositions.get(node.id);
      if (!position) return;

      const geometry = new THREE.SphereGeometry(0.3, 16, 16);
      const material = new THREE.MeshBasicMaterial({ 
        color: getNodeColor(node, activeNode)
      });
      const sphere = new THREE.Mesh(geometry, material);
      sphere.position.set(...position);
      
      if (node.id === activeNode) {
        const glowGeometry = new THREE.SphereGeometry(0.4, 16, 16);
        const glowMaterial = new THREE.MeshBasicMaterial({
          color: '#ffffff',
          transparent: true,
          opacity: 0.3
        });
        const glow = new THREE.Mesh(glowGeometry, glowMaterial);
        sphere.add(glow);
      }
      
      sceneRef.current.add(sphere);
    });

    // Add edges with glow effect
    edges.forEach(edge => {
      const startPos = nodePositions.get(edge.source);
      const endPos = nodePositions.get(edge.target);
      
      if (!startPos || !endPos) return;

      const points = [
        new THREE.Vector3(...startPos),
        new THREE.Vector3(...endPos)
      ];
      
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      
      const material = new THREE.LineBasicMaterial({ 
        color: '#4b5563',
        transparent: true,
        opacity: 0.6
      });
      const line = new THREE.Line(geometry, material);
      sceneRef.current.add(line);

      const glowMaterial = new THREE.LineBasicMaterial({
        color: '#6b7280',
        transparent: true,
        opacity: 0.2,
        linewidth: 2
      });
      const glowLine = new THREE.Line(geometry, glowMaterial);
      sceneRef.current.add(glowLine);
    });

    if (camera) {
      const frustumGeometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({
        color: '#ffffff',
        opacity: 0.2,
        transparent: true,
        wireframe: true
      });
      
      const frustumMesh = new THREE.Mesh(frustumGeometry, material);
      sceneRef.current.add(frustumMesh);

      const updateFrustum = () => {
        const frustum = new THREE.Frustum();
        const projScreenMatrix = new THREE.Matrix4();
        projScreenMatrix.multiplyMatrices(
          camera.projectionMatrix,
          camera.matrixWorldInverse
        );
        frustum.setFromProjectionMatrix(projScreenMatrix);

        frustumMesh.position.copy(camera.position);
        frustumMesh.quaternion.copy(camera.quaternion);
        
        const scale = camera.position.length() * 0.2;
        frustumMesh.scale.set(scale, scale, scale);
      };

      if (controls) {
        controls.addEventListener('change', updateFrustum);
        return () => controls.removeEventListener('change', updateFrustum);
      }
    }
  }, [nodes, edges, nodePositions, activeNode, camera, controls, is3D]);

  // Calculate viewport points for 2D projection
  // Replace the existing getViewportPoints function with this:
const getViewportPoints = (camera: THREE.Camera): THREE.Vector3[] => {
  const frustum = new THREE.Frustum();
  const projScreenMatrix = new THREE.Matrix4();
  projScreenMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(projScreenMatrix);

  // Get the visible height at the target distance
  const fov = (camera.fov * Math.PI) / 180;
  const targetDistance = camera.position.length();
  const visibleHeight = 2 * Math.tan(fov / 2) * targetDistance;
  const visibleWidth = visibleHeight * camera.aspect;

  // Create viewport corners in world space
  const position = new THREE.Vector3();
  camera.getWorldPosition(position);
  const direction = new THREE.Vector3(0, 0, -1);
  direction.applyQuaternion(camera.quaternion);

  const right = new THREE.Vector3(1, 0, 0);
  right.applyQuaternion(camera.quaternion);
  const up = new THREE.Vector3(0, 1, 0);
  up.applyQuaternion(camera.quaternion);

  const halfWidth = visibleWidth / 2;
  const halfHeight = visibleHeight / 2;

  // Calculate the four corners of the viewport
  return [
    position.clone().add(direction.clone().multiplyScalar(targetDistance))
      .add(right.clone().multiplyScalar(-halfWidth))
      .add(up.clone().multiplyScalar(-halfHeight)),
    position.clone().add(direction.clone().multiplyScalar(targetDistance))
      .add(right.clone().multiplyScalar(halfWidth))
      .add(up.clone().multiplyScalar(-halfHeight)),
    position.clone().add(direction.clone().multiplyScalar(targetDistance))
      .add(right.clone().multiplyScalar(halfWidth))
      .add(up.clone().multiplyScalar(halfHeight)),
    position.clone().add(direction.clone().multiplyScalar(targetDistance))
      .add(right.clone().multiplyScalar(-halfWidth))
      .add(up.clone().multiplyScalar(halfHeight))
  ];
};


  
  // Render 2D view
  const render2D = useMemo(() => {
    return () => {
      if (!canvasRef.current || is3D) return;
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Calculate bounds
      const positions = Array.from(nodePositions.values());
      const bounds = positions.reduce(
        (acc, pos) => ({
          minX: Math.min(acc.minX, pos[0]),
          maxX: Math.max(acc.maxX, pos[0]),
          minY: Math.min(acc.minY, pos[1]),
          maxY: Math.max(acc.maxY, pos[1])
        }),
        { minX: Infinity, maxX: -Infinity, minY: Infinity, maxY: -Infinity }
      );

      // Project 3D to 2D
      const project = (pos: [number, number, number]): [number, number] => {
        const padding = 20;
        const width = canvas.width - 2 * padding;
        const height = canvas.height - 2 * padding;
        
        const x = padding + ((pos[0] - bounds.minX) / (bounds.maxX - bounds.minX)) * width;
        const y = canvas.height - (padding + ((pos[1] - bounds.minY) / (bounds.maxY - bounds.minY)) * height);
        
        return [x, y];
      };

      // Draw edges
      ctx.lineWidth = 1;
      edges.forEach(edge => {
        const startPos = nodePositions.get(edge.source);
        const endPos = nodePositions.get(edge.target);
        
        if (startPos && endPos) {
          const [x1, y1] = project(startPos);
          const [x2, y2] = project(endPos);
          
          ctx.shadowColor = 'rgba(71, 85, 105, 0.5)';
          ctx.shadowBlur = 4;
          ctx.strokeStyle = '#475569';
          
          ctx.beginPath();
          ctx.moveTo(x1, y1);
          ctx.lineTo(x2, y2);
          ctx.stroke();
        }
      });

      // Draw nodes
      nodes.forEach(node => {
        const position = nodePositions.get(node.id);
        if (!position) return;

        const [x, y] = project(position);
        
        ctx.shadowColor = node.id === activeNode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(0, 0, 0, 0.3)';
        ctx.shadowBlur = 6;
        
        ctx.beginPath();
        ctx.arc(x, y, node.id === activeNode ? 6 : 4, 0, Math.PI * 2);
        
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, node.id === activeNode ? 6 : 4);
        const colors = getNodeColors(node);
        gradient.addColorStop(0, colors[0]);
        gradient.addColorStop(1, colors[1]);
        
        ctx.fillStyle = gradient;
        ctx.fill();
        
        if (node.id === activeNode) {
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 2;
          ctx.stroke();
        }
      });

      // Draw camera viewport
// In the render2D function, replace the camera viewport drawing section with:
if (camera) {
  const viewportPoints = getViewportPoints(camera);
  const projectedPoints = viewportPoints.map(point => 
    project([point.x, point.y, point.z])
  );

  // Draw filled rectangle with semi-transparent background
  ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.beginPath();
  ctx.moveTo(projectedPoints[0][0], projectedPoints[0][1]);
  projectedPoints.forEach(([x, y]) => {
    ctx.lineTo(x, y);
  });
  ctx.closePath();
  ctx.fill();

  // Draw dashed border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
  ctx.lineWidth = 1.5;
  ctx.setLineDash([4, 4]);
  ctx.lineDashOffset = (Date.now() / 50) % 8;
  ctx.stroke();
  
  // Reset line dash
  ctx.setLineDash([]);
}



      
    };
  }, [nodes, edges, nodePositions, activeNode, camera, is3D]);

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
        render2D();
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, [is3D, render2D]);


  // Add the new camera movement effect here
  useEffect(() => {
  if (!camera || !controls) return;

  const handleCameraChange = () => {
    if (!is3D) {
      render2D();
    }
  };

  controls.addEventListener('change', handleCameraChange);
  return () => controls.removeEventListener('change', handleCameraChange);
  }, [camera, controls, is3D, render2D]);

  
  // Utility functions for node colors
  const getNodeColor = (node: Node, activeNode: string | null): string => {
    if (node.id === activeNode) return '#fbbf24';
    if (node.id === 'start') return '#fbbf24';
    if (node.className?.includes('pattern')) return '#818cf8';
    return '#22d3ee';
  };

  const getNodeColors = (node: Node): [string, string] => {
    if (node.id === 'start') return ['#fef3c7', '#fbbf24'];
    if (node.className?.includes('pattern')) return ['#e0e7ff', '#818cf8'];
    return ['#cffafe', '#22d3ee'];
  };

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
            {is3D ? 'Switch to 2D' : 'Switch to 3D'}
          </button>
        </div>
      </Card>
    </motion.div>
  );
};

export default Minimap;
