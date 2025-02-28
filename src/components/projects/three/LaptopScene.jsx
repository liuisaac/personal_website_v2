"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ComputerMesh from "./ComputerMesh";

const LaptopScene = () => {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 1000);
    }, []);

    return (
        <div className="absolute top-0 right-0">
            <Canvas
                style={{
                    width: "60vw",
                    height: "100vh",
                    backgroundColor: "transparent",
                    marginTop: "5em",
                }}
                camera={{ position: [12, 10, 20], fov: 70, zoom: 1.3 }}
            >
                <ComputerMesh
                    scale={{ width: 1000, height: 1000 }}
                    open={open}
                />
                <pointLight position={[0, 100, 100]} intensity={1000} />
                <pointLight position={[-10, 100, 0]} intensity={30000} />
            </Canvas>
        </div>
    );
};

export default LaptopScene;