"use client";

import dynamic from "next/dynamic";

const SimulationBackdrop = dynamic(
    () => import("@/components/ui/three-components/SimulationBackdrop"),
    { ssr: false }
);

export default function ClientSimulation() {
    return <SimulationBackdrop />;
}

