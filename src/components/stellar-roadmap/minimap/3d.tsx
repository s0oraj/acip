// components/stellar-roadmap/minimap/3d.tsx
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { MinimapProps } from './types';
import { getNodeColor } from './utils';

export const setup3DScene = (
  container: HTMLDivElement,
  onControlsRef: (controls: OrbitControls) => void
) => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#0f172a');

  const renderer = new THREE.WebGLRenderer({ 
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(192, 144);
  container.appendChild(renderer.domElement);

  const minimapCamera = new THREE.PerspectiveCamera(75, 192/144, 0.1, 1000);
  minimapCamera.position.set(0, 15, 15);
  minimapCamera.lookAt(0, 0, 0);

  const minimapControls = new OrbitControls(minimapCamera, renderer.domElement);
  minimapControls.enableDamping = true;
  minimapControls.dampingFactor = 0.05;
  minimapControls.rotateSpeed = 0.5;
  minimapControls.zoomSpeed = 0.5;
  onControlsRef(minimapControls);

  return {
    scene,
    renderer,
    camera: minimapCamera,
    controls: minimapControls,
    cleanup: () => {
      minimapControls.dispose();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    }
  };
};

export const update3DScene = (
  scene: THREE.Scene,
  nodes: MinimapProps['nodes'],
  edges: MinimapProps['edges'],
  nodePositions: MinimapProps['nodePositions'],
  activeNode: MinimapProps['activeNode'],
  camera?: THREE.Camera,
  controls?: OrbitControls
) => {
  while(scene.children.length > 0) {
    scene.remove(scene.children[0]);
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
    
    scene.add(sphere);
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
    scene.add(line);

    const glowMaterial = new THREE.LineBasicMaterial({
      color: '#6b7280',
      transparent: true,
      opacity: 0.2,
      linewidth: 2
    });
    const glowLine = new THREE.Line(geometry, glowMaterial);
    scene.add(glowLine);
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
    scene.add(frustumMesh);

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
};
