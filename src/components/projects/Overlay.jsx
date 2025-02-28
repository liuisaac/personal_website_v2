import Button from "../ui/Button";
import Grid from "../ui/Grid";
import Img from "../ui/Img";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import LaptopScene from "./three/LaptopScene";
import data from "../../constants/projects_grid";

const ShamelessPlug = () => {
    return (
        <div className="text-3xl text-white w-full col mt-36 gap-2">
            <div className="row">
                <span>featured_projects</span>
                <div className="absolute ml-72 -mt-24 rotate-12">
                    <Img
                        src={"/icons/excaliarrow.svg"}
                        className={"w-56 h-56 ml-2"}
                    />
                </div>
            </div>

            <span className="text-5xl font-bold">Mecha Mayhem App</span>
            <p className="text-slate text-2xl mb-6">8.2k visitors / y</p>
            <Button
                icon={"/icons/external-link.svg"}
                primary={"#FF4D4D"}
                label={"view_project"}
                textStyles={"text-lg tracking-wide"}
                href={"/projects/mecha-mayhem"}
            />
        </div>
    );
};

const Overlay = () => {
    return (
        <PageContainer>
            <div className="w-full col items-start justify-start">
                <LaptopScene />
                <PageHeader>
                    <ShamelessPlug />
                </PageHeader>
            </div>
            <Grid data={data} />
        </PageContainer>
    );
};

export default Overlay;
