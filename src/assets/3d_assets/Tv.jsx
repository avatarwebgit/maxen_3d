import React, { useEffect, useRef, useState } from 'react';
import { Environment, useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring } from 'react-spring';
import { calculateRotation } from '../../utils/calculateRotation';
import * as THREE from 'three';

import tv from '../3d_assets/tv_final.glb';

export const TV = props => {
  const meshRef = useRef();
  const pointLightRef = useRef();
  const { camera } = useThree();

  const { nodes, materials } = useGLTF(tv);

  const { rotationX, rotationY, zoom, CX, CY, meshPositionX, frontLightValue } =
    calculateRotation(props.scroll);

  const springProps = useSpring({
    rotationX: rotationX * (Math.PI / 180),
    rotationY: rotationY * (Math.PI / 180),
    CX,
    CY,
    zoom,
    meshPositionX,
    frontLightValue,
    config: { tension: 120, friction: 28 },
  });

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = springProps.rotationX.get();
      meshRef.current.rotation.y = springProps.rotationY.get();
      meshRef.current.position.lerp(
        new THREE.Vector3(
          meshPositionX,
          meshRef.current.position.y,
          meshRef.current.position.z,
          camera.position.x,
          camera.position.y,
          camera.position.z,
        ),
        delta * 1,
      );
      camera.position.x = 5 / springProps.CX.get();
      camera.position.y = 5 / springProps.CY.get();
      camera.position.z = 5 / springProps.zoom.get();
    }
    if (pointLightRef.current) {
      pointLightRef.current.intensity = springProps.frontLightValue.get();
    }
  });

  return (
    <group {...props} dispose={null} ref={meshRef}>
      <group
        position={[39, 0, 0]}
        rotation={[1.551, 0.006, -3.138]}
        scale={0.07}
      >
        <pointLight position={[0, 2, -500]} intensity={10000} decay={6} />
        <pointLight position={[0, 2, 500]} intensity={10000} decay={6} />
        <directionalLight
          position={[-100, -100, 100]}
          ref={pointLightRef}
          color={'#555555'}
        />
        <Environment preset='warehouse' />
        <mesh
          geometry={nodes.BCD2_86001_1.geometry}
          material={materials.mat5}
        />
        <mesh
          geometry={nodes.BCD2_86001_2.geometry}
          material={materials.mat4}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/tv.glb');
