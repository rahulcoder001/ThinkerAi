"use client";
import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const Galaxy = () => {
  const pointsRef = useRef();
  const [geometry, setGeometry] = useState(null);
  const [originalPositions, setOriginalPositions] = useState(null);
  const [currentPositions, setCurrentPositions] = useState(null);
  const entryDuration = 3; 

  const parameters = {
    count: 10000,
    size: 0.15,
    radius: 16.5,
    branches: 3,
    spin: 1,
    randomness: 0.09,
    randomnessPower: 3,
    insideColor: '#FFFFFF', // White
    outsideColor: '#570987', // Purple
  };

  // Function to generate the galaxy points
  const generateGalaxy = () => {
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);

    for (let i = 0; i < parameters.count; i++) {
      const i3 = i * 3;
      const radius = Math.random() * parameters.radius;

      
      const innerRadiusLimit = 8;
      if (radius < innerRadiusLimit) continue;

      const angle = (i / parameters.count) * Math.PI * 2;
      const randomX = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), parameters.randomnessPower) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;

      positions[i3 + 0] = randomX;
      positions[i3 + 1] = Math.sin(angle) * radius + randomY;
      positions[i3 + 2] = Math.cos(angle) * radius + randomZ;

      const mixedColor = colorInside.clone();

      // Adjust the color mix factor to favor the outside color (purple)
      const colorMixFactor = Math.random() * 0.5 + 0.5; // Generates values between 0.5 and 1 (favoring purple)
      mixedColor.lerp(colorOutside, colorMixFactor);

      colors[i3 + 0] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }

    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    setGeometry(geo);
    setOriginalPositions(positions.slice()); // Store the original positions

    // Set initial positions far from the camera for the entry animation
    const initialPositions = new Float32Array(parameters.count * 3);
    for (let i = 0; i < parameters.count * 3; i += 3) {
      initialPositions[i + 0] = Math.random() * 100 - 50; // Random X starting position far from camera
      initialPositions[i + 1] = Math.random() * 100 - 50; // Random Y starting position far from camera
      initialPositions[i + 2] = Math.random() * 100 - 50; // Random Z starting position far from camera
    }
    setCurrentPositions(initialPositions);
  };

  useEffect(() => {
    generateGalaxy();
  }, []);

  // Add movement function for particles
  const moveParticles = (positions, elapsedTime) => {
    const speed = 0.01;
    const frequency = 0.2; // Controls the frequency of the movement
    for (let i = 0; i < parameters.count * 3; i += 3) {
      positions[i + 0] += Math.sin(elapsedTime * frequency) * speed;
      positions[i + 1] += Math.cos(elapsedTime * frequency) * speed;
      positions[i + 2] += Math.sin(elapsedTime * frequency) * speed;
    }
  };

  
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
  
    if (geometry && originalPositions && currentPositions && pointsRef.current) {
      const positions = geometry.attributes.position.array;
  
      // Progress between 0 and 1 for the entry animation
      const entryProgress = Math.min(elapsedTime / entryDuration, 1);
  
      // Gradually increase randomness over time
      const timeRandomness = Math.sin(elapsedTime * 0.3) * 0.05; // Multiplier for randomness, evolves over time
  
      for (let i = 0; i < parameters.count * 3; i += 3) {
        const originalX = originalPositions[i + 0];
        const originalY = originalPositions[i + 1];
        const originalZ = originalPositions[i + 2];
  

        positions[i + 0] = THREE.MathUtils.lerp(currentPositions[i + 0], originalX, entryProgress) + (Math.random() - 0.5) * timeRandomness;
        positions[i + 1] = THREE.MathUtils.lerp(currentPositions[i + 1], originalY, entryProgress) + Math.sin(elapsedTime + originalY * 1.5) * 0.4 + (Math.random() - 0.5) * timeRandomness;
        positions[i + 2] = THREE.MathUtils.lerp(currentPositions[i + 2], originalZ, entryProgress) + Math.sin(elapsedTime + originalZ) * 0.4 + (Math.random() - 0.5) * timeRandomness;
      }
  

      geometry.attributes.position.needsUpdate = true;
    }
  });
  

  return (
    geometry && (
      <points ref={pointsRef} geometry={geometry}>
        <pointsMaterial size={parameters.size} vertexColors depthWrite={false} blending={THREE.AdditiveBlending} />
      </points>
    )
  );
};

const GalaxyCanvas = () => {
  return (
    <Canvas camera={{ position: [24, 0, 0], fov: 75 }} style={{position:'fixed'}}
    
    >
      
      <Galaxy />
      
    </Canvas>
  );
};

export default GalaxyCanvas;
