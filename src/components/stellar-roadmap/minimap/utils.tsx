// components/stellar-roadmap/minimap/utils.ts
import * as THREE from 'three';
import { Node } from './types';

export const getNodeColor = (node: Node, activeNode: string | null): string => {
  if (node.id === activeNode) return '#fbbf24';
  if (node.id === 'start') return '#fbbf24';
  if (node.className?.includes('pattern')) return '#818cf8';
  return '#22d3ee';
};

export const getNodeColors = (node: Node): [string, string] => {
  if (node.id === 'start') return ['#fef3c7', '#fbbf24'];
  if (node.className?.includes('pattern')) return ['#e0e7ff', '#818cf8'];
  return ['#cffafe', '#22d3ee'];
};

export const getViewportPoints = (camera: THREE.Camera): THREE.Vector3[] => {
  const frustum = new THREE.Frustum();
  const projScreenMatrix = new THREE.Matrix4();
  projScreenMatrix.multiplyMatrices(
    camera.projectionMatrix,
    camera.matrixWorldInverse
  );
  frustum.setFromProjectionMatrix(projScreenMatrix);

  const fov = (camera.fov * Math.PI) / 180;
  const targetDistance = camera.position.length();
  const visibleHeight = 2 * Math.tan(fov / 2) * targetDistance;
  const visibleWidth = visibleHeight * camera.aspect;

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
