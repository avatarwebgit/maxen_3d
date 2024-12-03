import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Star({ count, color }) {
  const mesh = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 200; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 200; // z
    }
    return positions;
  }, [count]);

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));

  const material = new THREE.PointsMaterial({
    color: color,
    size: 0.01,
    sizeAttenuation: true,
  });

  useFrame(() => {
    const positions = geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const index = i * 3;
      positions[index] += (Math.random() - 0.5) * 0.010; // x movement
      positions[index + 1] += (Math.random() - 0.5) * 0.010; // y movement
      positions[index + 2] += (Math.random() - 0.5) * 0.010; // z movement

      if (
        positions[index] > 100 ||
        positions[index] < -100 ||
        positions[index + 1] > 100 ||
        positions[index + 1] < -100 ||
        positions[index + 2] > 100 ||
        positions[index + 2] < -100
      ) {
        positions[index] = (Math.random() - 0.5) * 200;
        positions[index + 1] = (Math.random() - 0.5) * 200;
        positions[index + 2] = (Math.random() - 0.5) * 200;
      }
    }

    geometry.attributes.position.needsUpdate = true;
  });

  return <points ref={mesh} args={[geometry, material]} />;
}

export default Star;
