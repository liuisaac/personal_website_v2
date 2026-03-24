import FadeWrapper from "@/components/ui/FadeWrapper";
import Overlay from "@/components/projects/Overlay";

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
