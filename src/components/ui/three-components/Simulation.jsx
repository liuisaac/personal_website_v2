"use client";

import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import Particles from "./Particles";
import {
    ZOOM,
    INITIAL_G,
    INITIAL_ESCAPE_VELOCITY,
    INITIAL_MOUSE_INFLUENCE_RADIUS,
} from "../../../constants/sim_params";
import Controls from "../Controls";

const Simulation = ({ children }) => {
    const positiveG = INITIAL_G;
    const negativeG = -0.15;
    const [gravity, setGravity] = useState(positiveG);
    const [gravityToggle, setGravityToggle] = useState(true);
    const [mouseGravity, setMouseGravity] = useState(-0.2);

    const toggleGravity = () => {
        if (gravity === positiveG) {
            setGravity(negativeG);
            setGravityToggle(false);
            setMouseGravity(0.2);
        } else {
            setGravity(positiveG);
            setGravityToggle(true);
            setMouseGravity(-0.2);
        }
    };

    return (
        <section className="dim-screen">
            <div className="fixed dim-screen z-50 pointer-events-none">
                <Controls gravity={gravityToggle} toggleGravity={toggleGravity}/>
            </div>
            <main className="fixed top-0 left-0 w-screen h-screen bg-black z-10">
                <div className="absolute inset-0">
                    <Canvas
                        className="w-full h-full"
                        camera={{ fov: 30, position: [0, 0, 1], zoom: ZOOM }}
                        style={{ height: "100%", width: "100%" }}
                    >
                        <ambientLight />
                        <Particles
                            G={gravity}
                            escapeVelocity={INITIAL_ESCAPE_VELOCITY}
                            mouseInfluenceRadius={
                                INITIAL_MOUSE_INFLUENCE_RADIUS
                            }
                            mouseGMultiplier={mouseGravity}
                            ringSize={1.0}
                        />
                    </Canvas>
                </div>
            </main>

            <article className="absolute top-0 inset-x-0 z-20 flex items-center justify-center">
                {children}
            </article>
        </section>
    );
};

export default Simulation;
