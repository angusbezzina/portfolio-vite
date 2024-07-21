/* eslint-disable react/no-unknown-property */
import React from "react";

import * as THREE from "three";
import { useFrame, ThreeElements, Canvas } from "@react-three/fiber";

const BRAND_COLOR = "#FB3F42";
const SHADOW_COLOR = "#0F172A";

function CubeMesh(props: ThreeElements["mesh"]) {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => (meshRef.current.rotation.x += delta));

  return (
    <mesh {...props} ref={meshRef}>
      <boxGeometry args={[3, 3, 3, 50, 50]} />
      <meshStandardMaterial color={BRAND_COLOR} />
    </mesh>
  );
}

function TorusKnotMesh(props: ThreeElements["mesh"]) {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
    meshRef.current.rotation.y += delta;
    meshRef.current.rotation.z += delta;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.55, 100, 200]} />
      <meshStandardMaterial color={SHADOW_COLOR} />
    </mesh>
  );
}

function CylinderMesh(props: ThreeElements["mesh"]) {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <cylinderGeometry args={[1.5, 1.5, 4, 200, 200]} />
      <meshStandardMaterial color={BRAND_COLOR} />
    </mesh>
  );
}

function TorusMesh(props: ThreeElements["mesh"]) {
  const meshRef = React.useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta;
  });

  return (
    <mesh {...props} ref={meshRef}>
      <torusGeometry args={[1.75, 0.65, 100, 200]} />
      <meshStandardMaterial color={SHADOW_COLOR} />
    </mesh>
  );
}

function ShapeCanvas({ children }: { children: React.ReactNode }) {
  return (
    <Canvas>
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
      {children}
    </Canvas>
  );
}

export function Cube({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ShapeCanvas>
        <CubeMesh />
      </ShapeCanvas>
    </div>
  );
}

export function Cylinder({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ShapeCanvas>
        <CylinderMesh />
      </ShapeCanvas>
    </div>
  );
}

export function Torus({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ShapeCanvas>
        <TorusMesh />
      </ShapeCanvas>
    </div>
  );
}

export function TorusKnot({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ShapeCanvas>
        <TorusKnotMesh />
      </ShapeCanvas>
    </div>
  );
}
