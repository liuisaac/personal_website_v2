import FadeWrapper from "@/components/ui/FadeWrapper";
import Overlay from "@/components/contact/Overlay";
import React from "react";

const page = () => {
    return (
        <FadeWrapper>
            <div className="min-h-screen w-screen flex items-center justify-center">
                <Overlay />
            </div>
        </FadeWrapper>
    );
};

export default page;
