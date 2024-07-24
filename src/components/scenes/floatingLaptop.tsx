/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, useGLTF, ContactShadows } from "@react-three/drei";
import { useSpring } from "@react-spring/core";
import { a as three } from "@react-spring/three";
import { a as web } from "@react-spring/web";

interface ModelProps {
  open: boolean;
  hinge: any;
  [key: string]: any;
}

function Model({ open, hinge, ...props }: ModelProps) {
  const group = React.useRef<THREE.Group>(null!);
  const { nodes, materials } = useGLTF("/mac-draco.glb");
  const [hovered, setHovered] = React.useState(false);
  React.useEffect(
    () => void (document.body.style.cursor = hovered ? "pointer" : "auto"),
    [hovered],
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      open ? Math.cos(t / 10) / 10 + 0.25 : 0,
      0.1,
    );
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      open ? Math.sin(t / 10) / 4 : 0,
      0.1,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      open ? Math.sin(t / 10) / 10 : 0,
      0.1,
    );
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      open ? (-2 + Math.sin(t)) / 3 : -4.3,
      0.1,
    );
  });

  return (
    <group
      ref={group}
      {...props}
      onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
      onPointerOut={(_event) => setHovered(false)}
      dispose={null}
    >
      <three.group rotation-x={hinge} position={[0, -0.04, 0.41]}>
        <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.aluminium}
            geometry={(nodes["Cube008"] as THREE.Mesh).geometry}
          />
          <mesh
            material={materials["matte.001"]}
            geometry={(nodes["Cube008_1"] as THREE.Mesh).geometry}
          />
          <mesh
            material={materials["screen.001"]}
            geometry={(nodes["Cube008_2"] as THREE.Mesh).geometry}
          />
        </group>
      </three.group>
      <mesh
        material={materials.keys}
        geometry={(nodes.keyboard as THREE.Mesh).geometry}
        position={[1.79, 0, 3.45]}
      />
      <group position={[0, -0.1, 3.39]}>
        <mesh material={materials.aluminium} geometry={(nodes["Cube002"] as THREE.Mesh).geometry} />
        <mesh
          material={materials.trackpad}
          geometry={(nodes["Cube002_1"] as THREE.Mesh).geometry}
        />
      </group>
      <mesh
        material={materials.touchbar}
        geometry={(nodes.touchbar as THREE.Mesh).geometry}
        position={[0, -0.03, 1.2]}
      />
    </group>
  );
}

export function FloatingLaptop({ text }: { text: string }) {
  const [open, setOpen] = React.useState(true);
  const springProps = useSpring({ open: Number(open) });

  return (
    <web.div className="w-full h-full max-h-[70svh] md:max-h-[100svh] md:pt-20 flex flex-col items-center justify-center">
      <web.h1 className="text-xl md:text-jumbo text-heading mt-24">
        {text}
        <web.span className="text-brand">.</web.span>
      </web.h1>
      <Canvas dpr={[1, 2]} camera={{ position: [0, 0, -30], fov: 35 }}>
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <React.Suspense fallback={null}>
          <group rotation={[0, Math.PI, 0]} onClick={(e) => (e.stopPropagation(), setOpen(!open))}>
            <Model open={open} hinge={springProps.open.to([0, 1], [1.575, -0.425])} />
          </group>
          <Environment preset="city" />
        </React.Suspense>
        <ContactShadows position={[0, -4.5, 0]} opacity={0.4} scale={20} blur={1.75} far={4.5} />
      </Canvas>
    </web.div>
  );
}
