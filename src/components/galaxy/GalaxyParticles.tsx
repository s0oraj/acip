import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion-3d';
import * as THREE from 'three';
import { Text } from '@react-three/drei';
import { generateGalaxyGeometry } from './utils/galaxyGeometry';
import { createParticleTexture } from './utils/particleTexture';

interface TargetPoint {
  position: THREE.Vector3;
  label: string;
}

interface Props {
  targets: TargetPoint[];
  onTargetClick: (index: number) => void;
}

const GalaxyParticles = ({ targets, onTargetClick }: Props) => {
  const galaxyRef = useRef<THREE.Points>(null);
  const detailsRefs = useRef<Array<THREE.Group | null>>([]);
  const { positions, colors, sizes } = generateGalaxyGeometry();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const particleTexture = useMemo(() => createParticleTexture(), []);
  
  const linePoints = [
    new THREE.Vector3(0, 0, 0),
    new THREE.Vector3(0, 1.2, 0)
  ];

  // Create a reusable quaternion for consistent upward orientation
  const upwardRotation = useMemo(() => {
    return new THREE.Quaternion();
  }, []);

  useFrame((state) => {
    if (galaxyRef.current) {
      galaxyRef.current.rotation.y += 0.0005;
    }
    
    detailsRefs.current.forEach((ref, index) => {
      if (ref) {
        // Only rotate the base group with galaxy
        ref.rotation.y = galaxyRef.current?.rotation.y || 0;
        
        const progress = Math.min(1, (state.clock.elapsedTime - 2) * 0.5);
        ref.scale.setScalar(progress);
        
        if (progress === 1) {
          // Apply floating animation only to y position
          ref.position.y = Math.sin(state.clock.elapsedTime + index * Math.PI * 0.5) * 0.02;
        }

        // Ensure text always faces up
        const textElement = ref.children[ref.children.length - 1];
        if (textElement) {
          textElement.quaternion.copy(upwardRotation);
        }
      }
    });
  });

  return (
    <group>
      <motion.points
        ref={galaxyRef}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 2, 
          ease: "easeOut",
          type: "spring",
          damping: 20 
        }}
      >
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={positions.length / 3}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={colors.length / 3}
            array={colors}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-size"
            count={sizes.length}
            array={sizes}
            itemSize={1}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          vertexColors={true}
          blending={THREE.AdditiveBlending}
          map={particleTexture}
          opacity={1.2}
          transparent={true}
          vertexSizes={true}
        />
      </motion.points>

      {/* Target Stars */}
      {targets.map((target, index) => {
        // Create position with consistent height
        const normalizedPosition = new THREE.Vector3(
          target.position.x,
          0.2, // Consistent height for all targets
          target.position.z
        );

        return (
          <group key={index} position={normalizedPosition}>
            <points>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={1}
                  array={new Float32Array([0, 0, 0])}
                  itemSize={3}
                />
              </bufferGeometry>
              <pointsMaterial
                size={0.01}
                sizeAttenuation={true}
                depthWrite={false}
                color="#ffffff"
                opacity={hoveredIndex === index ? 1.2 : 1}
                transparent={true}
                blending={THREE.AdditiveBlending}
                map={particleTexture}
              />
            </points>

            <mesh
              onPointerOver={() => setHoveredIndex(index)}
              onPointerOut={() => setHoveredIndex(null)}
              onClick={() => onTargetClick(index)}
            >
              <sphereGeometry args={[0.05, 8, 8]} />
              <meshBasicMaterial transparent opacity={0} />
            </mesh>

            <group 
              ref={el => detailsRefs.current[index] = el} 
              position={[0, 0, 0]} 
              scale={0}
            >
              <line geometry={new THREE.BufferGeometry().setFromPoints(linePoints)}>
                <lineBasicMaterial
                  color="#ffffff"
                  transparent
                  opacity={0.4}
                  blending={THREE.AdditiveBlending}
                />
              </line>

              <Text
                position={[0, 1.5, 0]}
                color="white"
                fontSize={0.2}
                anchorX="center"
                anchorY="middle"
                opacity={hoveredIndex === index ? 0.9 : 0.8}
                onPointerOver={() => setHoveredIndex(index)}
                onPointerOut={() => setHoveredIndex(null)}
                onClick={() => onTargetClick(index)}
                quaternion={upwardRotation} // Apply consistent upward orientation
              >
                {target.label}
              </Text>
            </group>
          </group>
        );
      })}
    </group>
  );
};

export default GalaxyParticles;