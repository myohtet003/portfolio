import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
// import * as THREE from "three";
import CanvasLoader from "../Loader";

const Computers = () => {
  const { scene } = useGLTF("./desktop_pc/scene.gltf");

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('max-width: 500px');

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  },[])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true; // Make sure meshes cast shadows
        child.receiveShadow = true; // Make sure meshes receive shadows
      }
    });
  }, [scene]);

  return (
    <mesh>
      {/* Lighting */}
      <hemisphereLight intensity={0.35} groundColor="black" /> {/* General ambient light */}
      <ambientLight intensity={1.5} /> {/* Basic ambient light */}
      <pointLight position={[10, 60, 10]} intensity={1.5} /> {/* Main light */}
      <spotLight
        position={[-20, 50, 10]} // Position of the spot light
        angle={0.3} // Angle of the light cone
        penumbra={1} // Softness of the light's edge
        intensity={1.5} // Brightness of the light
        castShadow
        shadow-mapSize={1024} // Shadow resolution
      />
      {/* Render model */}
      <primitive
        object={scene}
        scale={isMobile ? 0.65 : 0.7}
        position={isMobile ? [0, -3, -2.2] : [-1, -3.9, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
