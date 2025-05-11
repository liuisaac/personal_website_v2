"use client";

import React, { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import ComputerMesh from "./ComputerMesh";

const LaptopScene = () => {
    const [open, setOpen] = useState(false);
    const [width, setWidth] = useState(1000);

    useEffect(() => {
        console.log("LaptopScene mounted");
        console.log("Initial width:", window.innerWidth);
        setWidth(Math.min(window.innerWidth * 2/3, 1000));

        const handleResize = () => {
            setWidth(Math.min(window.innerWidth * 2/3, 1000));
            console.log("Resized width:", window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setOpen(true);
        }, 1000);
    }, []);

    return (
        <div className="absolute top-0 right-0">
            <Canvas
                style={{
                    backgroundColor: "transparent",
                    height: "100vh",
                    marginTop: "10em",
                    width: "60vw",
                }}
                camera={{ fov: 70, position: [12, 10, 20], zoom: 1.3 }}
            >
                <ComputerMesh
                    scale={{ height: width, width: width }}
                    open={open}
                />
                <pointLight position={[0, 100, 100]} intensity={1000} />
                <pointLight position={[-10, 100, 0]} intensity={30000} />
            </Canvas>
        </div>
    );
};

export default LaptopScene;