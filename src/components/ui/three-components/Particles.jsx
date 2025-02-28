"use client";

import * as THREE from "three";
import React, { useEffect, useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { fragmentShader, vertexShader } from "../../../constants/shaders";
import {
    MAX_DISTANCE,
    DAMPING,
    DT,
    PARTICLE_COUNT,
    ESTIMATED_MAX_SPEED,
} from "../../../constants/sim_params";

const Particles = React.memo(({ G, mouseInfluenceRadius, mouseGMultiplier }) => {
    const particlesRef = useRef();
    const velocitiesRef = useRef();
    const { camera, size } = useThree();

    const { positions, velocities } = useMemo(() => {
        const pos = new Float32Array(PARTICLE_COUNT * 3);
        const vel = new Float32Array(PARTICLE_COUNT * 3);

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx = i * 3;
            pos[idx] = (Math.random() - 0.5) * 0.4;
            pos[idx + 1] = (Math.random() - 0.5) * 0.4;
            pos[idx + 2] = (Math.random() - 0.5) * 0.4;

            let vx = 0;
            let vy = 0;
            let vz = 0;

            vel[idx] = vx;
            vel[idx + 1] = vy;
            vel[idx + 2] = vz;
        }

        return { positions: pos, velocities: vel };
    }, []);

    useEffect(() => {
        velocitiesRef.current = velocities;
    }, [velocities]);

    const raycasterRef = useRef(new THREE.Raycaster());
    const mouseRef = useRef(new THREE.Vector2(0, 0));

    const onMouseMove = (e) => {
        mouseRef.current.x = (e.clientX / size.width) * 2 - 1;
        mouseRef.current.y = -(e.clientY / size.height) * 2 + 1;
    };

    const onTouchMove = (e) => {
        if (e.touches.length > 0) {
            mouseRef.current.x = (e.touches[0].clientX / size.width) * 2 - 1;
            mouseRef.current.y = -(e.touches[0].clientY / size.height) * 2 + 1;
        }
    };

    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove, false);
        window.addEventListener("touchmove", onTouchMove, false);
        return () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("touchmove", onTouchMove);
        };
    }, [size]);

    useFrame(() => {
        const geom = particlesRef.current.geometry;
        if (!geom) return;

        const posArray = geom.attributes.position.array;
        const velArray = velocitiesRef.current;

        let particlesInOrbit = 0;

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx = i * 3;
            const x = posArray[idx];
            const y = posArray[idx + 1];
            const z = posArray[idx + 2];

            const particlePos = new THREE.Vector3(x, y, z);

            const centerDist = particlePos.length();
            if (centerDist > 0 && (centerDist < 0.2 || G > 0)) {
                const centerForce = G / (centerDist * centerDist);
                const centerAccel = centerForce * DT;

                const directionToCenter = particlePos.clone().normalize();
                const orbitAxis = new THREE.Vector3(0, 0, 1);
                const tangential = directionToCenter
                    .clone()
                    .cross(orbitAxis)
                    .normalize();

                velArray[idx] -= directionToCenter.x * centerAccel * 0.6;
                velArray[idx + 1] -= directionToCenter.y * centerAccel * 0.6;
                velArray[idx + 2] -= directionToCenter.z * centerAccel * 0.6;

                velArray[idx] += tangential.x * centerAccel * 0.4;
                velArray[idx + 1] += tangential.y * centerAccel * 0.4;
                velArray[idx + 2] += tangential.z * centerAccel * 0.4;
            }

            raycasterRef.current.setFromCamera(mouseRef.current, camera);
            const mouseIntersectPoint = new THREE.Vector3();
            raycasterRef.current.ray.at(camera.position.z, mouseIntersectPoint);

            const mouseDist = particlePos
                .clone()
                .sub(mouseIntersectPoint)
                .length();
            if (mouseDist < mouseInfluenceRadius) {
                particlesInOrbit += 1;
                const force = (G * mouseGMultiplier) / (mouseDist * mouseDist);
                const acceleration = force * DT;

                const directionToMouse = particlePos
                    .clone()
                    .sub(mouseIntersectPoint)
                    .normalize();

                velArray[idx] -= directionToMouse.x * acceleration * 0.3;
                velArray[idx + 1] -= directionToMouse.y * acceleration * 0.3;
                velArray[idx + 2] -= directionToMouse.z * acceleration * 0.3;
            }
        }

        for (let i = 0; i < PARTICLE_COUNT; i++) {
            const idx = i * 3;
            posArray[idx] += velArray[idx] * DT * 0.05;
            posArray[idx + 1] += velArray[idx + 1] * DT * 0.05;
            posArray[idx + 2] += velArray[idx + 2] * DT * 0.05;

            velArray[idx] *= DAMPING;
            velArray[idx + 1] *= DAMPING;
            velArray[idx + 2] *= DAMPING;

            const newDist = Math.sqrt(
                posArray[idx] ** 2 +
                    posArray[idx + 1] ** 2 +
                    posArray[idx + 2] ** 2
            );
            if (newDist > MAX_DISTANCE) {
                const scale = MAX_DISTANCE / newDist;
                posArray[idx] *= scale;
                posArray[idx + 1] *= scale;
                posArray[idx + 2] *= scale;
            }
        }

        geom.attributes.position.needsUpdate = true;
        geom.attributes.velocity.needsUpdate = true;
    });

    return (
        <points ref={particlesRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={PARTICLE_COUNT}
                    array={positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-velocity"
                    count={PARTICLE_COUNT}
                    array={velocities}
                    itemSize={3}
                />
            </bufferGeometry>
            <shaderMaterial
                vertexShader={vertexShader}
                fragmentShader={fragmentShader}
                uniforms={{
                    uMaxSpeed: { value: ESTIMATED_MAX_SPEED },
                }}
                transparent={true}
                depthWrite={false}
            />
        </points>
    );
});

export default Particles;
