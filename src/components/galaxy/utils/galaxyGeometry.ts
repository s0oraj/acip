import * as THREE from 'three';
import { GalaxyConfig } from '../types';

const DEFAULT_CONFIG: GalaxyConfig = {
  particlesCount: 200000, // Tripled for more detail
  radius: 14,
  branches: 5, // More branches for realism
  spin: 1.5, // Reduced for more natural spiral
  randomnessPower: 2.8,
  bulgeSize: 0.3, // New: controls central bulge size
  armWidth: 0.4, // New: controls spiral arm width
  dustLanes: true, // New: enable dust lanes
  coreIntensity: 2.5, // New: brightness of the core
  // Enhanced colors for more realistic appearance
  insideColor: '#ffab4d', // Warmer core color
  outsideColor: '#3b7bcc', // Bluer spiral arms
  dustColor: '#4a2d05' // Dark dust lane color
};

export const generateGalaxyGeometry = (config: Partial<GalaxyConfig> = {}) => {
  const finalConfig = { ...DEFAULT_CONFIG, ...config };
  const {
    particlesCount,
    radius,
    branches,
    spin,
    randomnessPower,
    bulgeSize,
    armWidth,
    dustLanes,
    coreIntensity,
    insideColor,
    outsideColor,
    dustColor
  } = finalConfig;

  const positions = new Float32Array(particlesCount * 3);
  const colors = new Float32Array(particlesCount * 3);
  const sizes = new Float32Array(particlesCount);
  const centerColor = new THREE.Color(insideColor);
  const outerColor = new THREE.Color(outsideColor);
  const dustLaneColor = new THREE.Color(dustColor);

  // Create central bulge particles (30% of total)
  const bulgeCount = Math.floor(particlesCount * 0.35);
  let currentIndex = 0;

  for (let i = 0; i < bulgeCount; i++) {
    const i3 = currentIndex * 3;
    // Gaussian distribution for bulge
    const r = Math.pow(Math.random(), 2) * radius * bulgeSize;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;

    positions[i3] = r * Math.sin(theta) * Math.cos(phi);
    positions[i3 + 1] = r * Math.sin(theta) * Math.sin(phi);
    positions[i3 + 2] = r * Math.cos(theta);

    // Brighter core
    const intensity = (1 - r / (radius * bulgeSize)) * coreIntensity;
    const mixedColor = new THREE.Color(insideColor);
    mixedColor.multiplyScalar(intensity);

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    sizes[currentIndex] = Math.random() * 0.5 + 0.5;
    currentIndex++;
  }

  // Create spiral arm particles
  for (let i = currentIndex; i < particlesCount; i++) {
    const i3 = i * 3;
    const armRadius = (Math.random() * (radius - radius * bulgeSize)) + radius * bulgeSize;
    const branchAngle = ((i % branches) / branches) * Math.PI * 2;
    const spinAngle = armRadius * spin;

    // Logarithmic spiral formula
    const rotationAngle = branchAngle + spinAngle;
    const armOffset = Math.random() * armWidth - armWidth / 2;

    // Add structured randomness
    const randomX = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
    const randomY = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);
    const randomZ = Math.pow(Math.random(), randomnessPower) * (Math.random() < 0.5 ? 1 : -1);

    positions[i3] = (Math.cos(rotationAngle) * armRadius + randomX) + Math.cos(rotationAngle + Math.PI/2) * armOffset;
    positions[i3 + 1] = randomY * (armRadius / radius);
    positions[i3 + 2] = (Math.sin(rotationAngle) * armRadius + randomZ) + Math.sin(rotationAngle + Math.PI/2) * armOffset;

    // Color mixing with dust lanes
    const mixedColor = new THREE.Color();
    const radiusPercent = armRadius / radius;
    
    if (dustLanes && Math.abs(armOffset) < armWidth * 0.3 && Math.random() < 0.3) {
      mixedColor.copy(dustLaneColor);
    } else {
      mixedColor.lerpColors(centerColor, outerColor, radiusPercent);
      // Add slight color variation
      const variation = 0.1;
      mixedColor.r += (Math.random() - 0.5) * variation;
      mixedColor.g += (Math.random() - 0.5) * variation;
      mixedColor.b += (Math.random() - 0.5) * variation;
    }

    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;

    // Vary particle sizes based on position
    sizes[i] = Math.random() * 0.5 + 0.25;
  }

  return { positions, colors, sizes };
};
