import { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useNavigate } from 'react-router-dom';
import { useNavigationStore } from '../../store/navigationStore';
import GalaxyParticles from './GalaxyParticles';
import Background from './Background';
import CameraController from './CameraController';

const targetPoints = [
  {
    position: new THREE.Vector3(6.67, 0.2, 4), // Level 1 - Outer arm
    label: "Level 1"
  },
  {
    position: new THREE.Vector3(-5.5, 0.2, -4), // Level 2 - Opposite arm
    label: "Level 2"
  },
  {
    position: new THREE.Vector3(-2, 0.2, 7), // Level 3 - Third arm
    label: "Level 3"
  },
  {
    position: new THREE.Vector3(4, 0.2, -6), // Level 4 - Fourth arm
    label: "Level 4"
  }
];

const Scene = () => {
  const navigate = useNavigate();
  const [selectedTargetIndex, setSelectedTargetIndex] = useState<number | null>(null);
  const { 
    isTransitioning, 
    setIsTransitioning, 
    setCursorStyle,
    setCurrentScene, 
    setSelectedLevel
  } = useNavigationStore();

  useEffect(() => {
    setCurrentScene('galaxy');
    setCursorStyle('default');

    return () => {
      setIsTransitioning(false);
      setCursorStyle('default');
    };
  }, [setCurrentScene, setCursorStyle, setIsTransitioning]);

  const handleStarClick = (index: number) => {
    setSelectedTargetIndex(index);
    setIsTransitioning(true);
    const level = (index + 1) as LevelNumber;
    setSelectedLevel(level);
  };

  const handleTransitionComplete = () => {
    setIsTransitioning(false);
    navigate('/roadmap');
    setCurrentScene('roadmap');
    
  };

  return (
    <div className="h-screen w-full bg-black">
      <Canvas
        camera={{
          position: [0, 3, 10],
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          preserveDrawingBuffer: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.0
        }}
      >
        <CameraController
          targetPosition={selectedTargetIndex !== null 
            ? targetPoints[selectedTargetIndex].position 
            : targetPoints[0].position}
          isTransitioning={isTransitioning}
          onTransitionComplete={handleTransitionComplete}
        />

        <OrbitControls
          enabled={!isTransitioning}
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.5}
          panSpeed={0.5}
          rotateSpeed={0.5}
          minPolarAngle={Math.PI * 0.25}
          maxPolarAngle={Math.PI * 0.75}
        />
        
        <Background />

        <GalaxyParticles
          targets={targetPoints}
          onTargetClick={handleStarClick}
        />
      </Canvas>
    </div>
  );
};

export default Scene;