import FadeWrapper from "@/components/ui/FadeWrapper";
import Overlay from "@/components/projects/Overlay";
import { Suspense, React} from "react";

const page = () => {
    return (
        <FadeWrapper>
            <Suspense fallback={<div>Loading...</div>}>
                <Overlay />
            </Suspense>
        </FadeWrapper>
    );
};

export default page;
