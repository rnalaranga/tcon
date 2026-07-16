"use client";
import { useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";
import { useTheme } from "next-themes";

function ParticleField({ theme }: { theme: string | undefined }) {
  const ref = useRef<THREE.Points>(null!);
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(18000), { radius: 1.6 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 18;
    }
  });

  const isLight = theme === "light";

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere as Float32Array}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color={isLight ? "#0284c7" : "#38bdf8"}
          size={0.004}
          sizeAttenuation
          depthWrite={false}
          opacity={isLight ? 0.3 : 0.8}
        />
      </Points>
    </group>
  );
}

function Grid3D({ theme }: { theme: string | undefined }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(clock.elapsedTime * 0.1) * 0.1;
    }
  });
  
  const isLight = theme === "light";

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2.5, 0, 0]} position={[0, -1.5, 0]}>
      <planeGeometry args={[20, 20, 30, 30]} />
      <meshBasicMaterial
        color={isLight ? "#0ea5e9" : "#0ea5e9"}
        wireframe
        transparent
        opacity={isLight ? 0.15 : 0.06}
      />
    </mesh>
  );
}

export function ParticleGlobeCanvas() {
  const { theme } = useTheme();
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 2.8], fov: 65 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ParticleField theme={theme} />
          <Grid3D theme={theme} />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
