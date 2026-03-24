"use client";

import React, { useCallback, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { usePathname } from "next/navigation";
import Controls from "../Controls";
import Particles from "./Particles";
import {
    INITIAL_ESCAPE_VELOCITY,
    INITIAL_G,
    INITIAL_MOUSE_INFLUENCE_RADIUS,
    ZOOM,
} from "../../../constants/sim_params";

const SimulationBackdrop = () => {
    const positiveG = INITIAL_G;
    const negativeG = -0.15;
    const [gravity, setGravity] = useState(positiveG);
    const [gravityToggle, setGravityToggle] = useState(true);
    const [mouseGravity, setMouseGravity] = useState(-0.2);
    const route = usePathname();

    const toggleGravity = useCallback(() => {
        setGravityToggle((prev) => {
            const next = !prev;
            setGravity(next ? positiveG : negativeG);
            setMouseGravity(next ? -0.2 : 0.2);
            return next;
        });
    }, [negativeG, positiveG]);

    useEffect(() => {
        const isHome = route === "/";
        const nextToggle = isHome;
        setGravityToggle(nextToggle);
        setGravity(nextToggle ? positiveG : negativeG);
        setMouseGravity(nextToggle ? -0.2 : 0.2);
    }, [route, positiveG, negativeG]);

    return (
        <>
            <div className="fixed inset-0 z-50 pointer-events-none">
                <Controls gravity={gravityToggle} toggleGravity={toggleGravity} />
            </div>

            <div className="fixed inset-0 bg-black z-10">
                <Canvas
                    className="w-full h-full"
                    camera={{ fov: 30, position: [0, 0, 1], zoom: ZOOM }}
                    style={{ height: "100%", width: "100%" }}
                >
                    <ambientLight />
                    <Particles
                        G={gravity}
                        escapeVelocity={INITIAL_ESCAPE_VELOCITY}
                        mouseInfluenceRadius={INITIAL_MOUSE_INFLUENCE_RADIUS}
                        mouseGMultiplier={mouseGravity}
                        ringSize={1.0}
                    />
                </Canvas>
            </div>
        </>
    );
};

export default SimulationBackdrop;

