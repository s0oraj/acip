import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface GalaxyLoadingVisualsProps {
  isLoading: boolean;
}

const GalaxyLoadingVisuals = ({ isLoading }: GalaxyLoadingVisualsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<{
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    geometry: THREE.IcosahedronGeometry;
    material: THREE.MeshPhongMaterial;
    glowGeometry: THREE.IcosahedronGeometry;
    glowMaterial: THREE.MeshPhongMaterial;
    sphere: THREE.Mesh;
    glowSphere: THREE.Mesh;
    lights: THREE.PointLight[];
    ambientLight: THREE.AmbientLight;
    animationFrameId?: number;
  }>();

  useEffect(() => {
    if (!containerRef.current || !isLoading) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.IcosahedronGeometry(2, 3);
    const material = new THREE.MeshPhongMaterial({
      color: 0x2D5B8E,
      emissive: 0x6B3FA0,
      emissiveIntensity: 0.4,
      shininess: 60,
      wireframe: true,
      transparent: true,
      opacity: 0.85,
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const glowGeometry = new THREE.IcosahedronGeometry(2.2, 3);
    const glowMaterial = new THREE.MeshPhongMaterial({
      color: 0xFFB454,
      transparent: true,
      opacity: 0.12,
    });
    const glowSphere = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glowSphere);

    const ambientLight = new THREE.AmbientLight(0x404040, 2.5);
    scene.add(ambientLight);

    const lights = [
      new THREE.PointLight(0xFFB454, 1.4, 100),
      new THREE.PointLight(0x6B3FA0, 1.4, 100),
      new THREE.PointLight(0xFF6B4A, 1.4, 100)
    ];

    lights[0].position.set(5, 5, 5);
    lights[1].position.set(-5, -5, -5);
    lights[2].position.set(0, 5, -5);
    lights.forEach(light => scene.add(light));

    camera.position.z = 5;

    // Store everything in the ref for cleanup
    sceneRef.current = {
      scene,
      camera,
      renderer,
      geometry,
      material,
      glowGeometry,
      glowMaterial,
      sphere,
      glowSphere,
      lights,
      ambientLight
    };

    let time = 0;

    const animate = () => {
      if (!isLoading) return;
      
      time += 0.01;
      
      sphere.rotation.x = Math.sin(time * 0.5) * 0.2 + time * 0.2;
      sphere.rotation.y = Math.cos(time * 0.3) * 0.1 + time * 0.1;
      
      glowSphere.rotation.x = sphere.rotation.x;
      glowSphere.rotation.y = sphere.rotation.y;
      
      renderer.render(scene, camera);
      sceneRef.current!.animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current || !sceneRef.current) return;
      
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isLoading]);

  // Separate cleanup effect
  useEffect(() => {
    return () => {
      if (sceneRef.current) {
        if (sceneRef.current.animationFrameId) {
          cancelAnimationFrame(sceneRef.current.animationFrameId);
        }
        
        sceneRef.current.geometry.dispose();
        sceneRef.current.material.dispose();
        sceneRef.current.glowGeometry.dispose();
        sceneRef.current.glowMaterial.dispose();
        
        sceneRef.current.lights.forEach(light => {
          sceneRef.current!.scene.remove(light);
          light.dispose();
        });
        
        sceneRef.current.scene.remove(sceneRef.current.sphere);
        sceneRef.current.scene.remove(sceneRef.current.glowSphere);
        sceneRef.current.scene.remove(sceneRef.current.ambientLight);
        
        sceneRef.current.renderer.dispose();
        
        if (containerRef.current?.contains(sceneRef.current.renderer.domElement)) {
          containerRef.current.removeChild(sceneRef.current.renderer.domElement);
        }
      }
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.5, // Reduced from 1s to 0.5s for faster transition
        ease: "easeInOut"
      }}
      className="fixed inset-0 bg-loading-black flex items-center justify-center"
    >
      <div ref={containerRef} className="absolute inset-0" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }} // Reduced from 0.5s to 0.3s
        className="absolute z-10 flex flex-col items-center space-y-4"
      >
        <motion.div 
          className="text-loading-gold text-3xl font-light tracking-[0.2em] uppercase"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Initializing Galaxy
        </motion.div>
        <div className="flex space-x-2">
          {[0, 0.3, 0.6].map((delay, i) => (
            <motion.div 
              key={i}
              className="w-2 h-2 bg-loading-gold rounded-full"
              animate={{ opacity: [1, 0.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, delay }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GalaxyLoadingVisuals;