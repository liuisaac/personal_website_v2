"use client";

import React, { useEffect, useState, useRef } from "react";
import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function ComputerMesh({ open, scale }) {
    const [videoTexture, setVideoTexture] = useState(null);
    const [screenMaterial, setScreenMaterial] = useState(null);
    const [animatedOpen, setAnimatedOpen] = useState(0);

    useEffect(() => {
        const video = document.createElement("video");
        video.src = "/laptop.mp4";
        video.crossOrigin = "Anonymous";
        video.loop = true;
        video.muted = true;
        video.play();

        const texture = new THREE.VideoTexture(video);
        texture.minFilter = THREE.LinearFilter;
        texture.magFilter = THREE.LinearFilter;
        texture.format = THREE.RGBAFormat;
        
        setVideoTexture(texture);
    }, []);

    // Smooth animation using useFrame
    useFrame(() => {
        const targetOpen = Number(open);
        const diff = targetOpen - animatedOpen;
        const delta = diff * 0.1; // Smoothing factor
        
        if (Math.abs(diff) > 0.001) {
            setAnimatedOpen(prev => prev + delta);
        }
    });

    // Interpolation functions
    const interpolate = (value, inputRange, outputRange) => {
        for (let i = 0; i < inputRange.length - 1; i++) {
            if (value >= inputRange[i] && value <= inputRange[i + 1]) {
                const t = (value - inputRange[i]) / (inputRange[i + 1] - inputRange[i]);
                return outputRange[i] + t * (outputRange[i + 1] - outputRange[i]);
            }
        }
        return value <= inputRange[0] ? outputRange[0] : outputRange[outputRange.length - 1];
    };

    const hinge = interpolate(animatedOpen, [0, 0.3, 0.7, 1.0], [1.575, 0.7, 0.2, -0.3]);
    const opphinge = interpolate(animatedOpen, [0, 0.3, 0.7, 1.0], [0, 0, 0.05, 0.1]);

    const computer = useRef(null);

    const { materials, nodes } = useGLTF("/mac-draco.glb");

    const isModelLoading = !nodes || !materials;

    useEffect(() => {
        if (materials && videoTexture) {
            const clonedMaterial = materials["screen.001"].clone();
            clonedMaterial.map = videoTexture;
            clonedMaterial.emissive = new THREE.Color(0xffffff);
            clonedMaterial.emissiveIntensity = 1;
            clonedMaterial.emissiveMap = videoTexture;

            const saturationShader = {
                fragmentShader: `
                    uniform sampler2D tDiffuse;
                    uniform float amount;
                    varying vec2 vUv;
                
                    void main() {
                        vec4 color = texture2D(tDiffuse, vUv);
                        float average = (color.r + color.g + color.b) / 3.0;
                        color.rgb += (color.rgb - vec3(average)) * amount;
                        gl_FragColor = color;
                    }
                `,
                uniforms: {
                    amount: { value: 1 },
                    tDiffuse: { value: videoTexture },
                },
                vertexShader: `
                    varying vec2 vUv;
                    void main() {
                        vUv = uv;
                        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                    }
                `,
            };

            const saturationPass = new THREE.ShaderMaterial(saturationShader);
            saturationPass.uniforms.tDiffuse.value = videoTexture;

            clonedMaterial.onBeforeCompile = (shader) => {
                Object.assign(shader.uniforms, saturationShader.uniforms);
                shader.fragmentShader = saturationShader.fragmentShader;
                shader.vertexShader = saturationShader.vertexShader;
                shader.vertexShader = shader.vertexShader.replace(
                    "vUv = uv;",
                    "vUv = vec2(1.0 - uv.x, uv.y);"
                );
            };

            clonedMaterial.needsUpdate = true;
            setScreenMaterial(clonedMaterial);
        }
    }, [materials, videoTexture]);

    if (isModelLoading || !screenMaterial) {
        return <></>;
    }

    const size = Math.min(scale.width, scale.height);

    return (
        <group dispose={null} rotation={[-0.1, 0.1, 0]}>
            <group ref={computer} scale={size * 0.0015} dispose={null}>
                <group rotation-x={hinge} position={[0, -0.04, 0.41]}>
                    <group
                        position={[0, 2.96, -0.13]}
                        rotation={[Math.PI / 2, 0, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cube008"].geometry}
                            material={materials.aluminium}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cube008_1"].geometry}
                            material={materials["matte.001"]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes["Cube008_2"]?.geometry}
                            rotation={[0, Math.PI, 0]}
                            material={screenMaterial}
                        />
                    </group>
                </group>
                <group rotation-x={opphinge}>
                    <mesh
                        geometry={nodes.keyboard.geometry}
                        material={materials.keys}
                        position={[1.79, 0, 3.45]}
                    />
                    <group position={[0, -0.1, 3.39]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube002.geometry}
                            material={materials.aluminium}
                        />
                        <mesh
                            geometry={nodes["Cube002_1"].geometry}
                            material={materials.trackpad}
                        />
                    </group>
                    <mesh
                        geometry={nodes.touchbar.geometry}
                        material={materials.touchbar}
                        position={[0, -0.03, 1.2]}
                    />
                </group>
            </group>
        </group>
    );
}