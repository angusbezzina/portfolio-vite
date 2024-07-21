/* eslint-disable react/no-unknown-property */
import React from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { useIsDarkMode } from "@utils/hooks/useIsDarkMode";

const DEFAULT_FIELD_ELEMENT_SIZE = 36;
const NUMBER_OF_FIELD_ELEMENTS = 8000;
const RANDOM_FLOAT_SPREAD = 2000;

function drawStar(context: CanvasRenderingContext2D, size: number, color: string) {
  const cx = size / 2;
  const cy = size / 2;
  const spikes = 5;
  const outerRadius = size / 2;
  const innerRadius = size / 4;
  let rot = (Math.PI / 2) * 3;
  let x = cx;
  let y = cy;
  const step = Math.PI / spikes;

  context.beginPath();
  context.moveTo(cx, cy - outerRadius);

  for (let i = 0; i < spikes; i++) {
    x = cx + Math.cos(rot) * outerRadius;
    y = cy + Math.sin(rot) * outerRadius;
    context.lineTo(x, y);
    rot += step;

    x = cx + Math.cos(rot) * innerRadius;
    y = cy + Math.sin(rot) * innerRadius;
    context.lineTo(x, y);
    rot += step;
  }
  context.lineTo(cx, cy - outerRadius);
  context.closePath();
  context.fillStyle = color;
  context.fill();
}

function createFieldElementTexture(color: string, size: number = DEFAULT_FIELD_ELEMENT_SIZE) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) return null;

  drawStar(context, size, color);

  return new THREE.CanvasTexture(canvas);
}

function StarFieldMesh({ dark }: { dark: boolean }) {
  const groupRef = React.useRef<THREE.Points>(null);
  const color = dark ? "white" : "black";

  const starTexture = React.useMemo(() => createFieldElementTexture(color), []);
  const [mouseX, setMouseX] = React.useState(0);
  const [mouseY, setMouseY] = React.useState(0);

  React.useEffect(() => {
    if (!groupRef.current) return;

    const stars: THREE.Vector3[] = [];
    for (let i = 0; i < NUMBER_OF_FIELD_ELEMENTS; i++) {
      const star = new THREE.Vector3(
        THREE.MathUtils.randFloatSpread(RANDOM_FLOAT_SPREAD),
        THREE.MathUtils.randFloatSpread(RANDOM_FLOAT_SPREAD),
        THREE.MathUtils.randFloatSpread(RANDOM_FLOAT_SPREAD),
      );
      stars.push(star);
    }

    const geometry = new THREE.BufferGeometry().setFromPoints(stars);
    groupRef.current.geometry = geometry;
  }, []);

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001 * mouseX;
      groupRef.current.rotation.x += 0.001 * mouseY;
    }
  });

  return (
    <points ref={groupRef}>
      <bufferGeometry attach="geometry" />
      <pointsMaterial
        attach="material"
        color="white"
        size={2}
        sizeAttenuation
        map={starTexture}
        alphaTest={0.5}
        transparent
      />
    </points>
  );
}

export function StarField({ className }: { className?: string }) {
  const isDarkMode = useIsDarkMode();

  return (
    <div className={className}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <StarFieldMesh dark={isDarkMode} />
      </Canvas>
    </div>
  );
}
