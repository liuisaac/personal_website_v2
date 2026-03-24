import FadeWrapper from "@/components/ui/FadeWrapper";
import Overlay from "@/components/work/Overlay";
import React from "react";

const page = () => {
    return (
        <FadeWrapper>
            <div className="min-h-screen w-screen flex items-start justify-center">
                <Overlay />
            </div>
        </FadeWrapper>
    );
};

export default page;
