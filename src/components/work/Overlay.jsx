import React from "react";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import Button from "../ui/Button";
import Timeline from "./Timeline";
import data from "../../constants/timeline_contents";

const Overlay = () => {
    return (
        <PageContainer>
            <div className="w-full col items-start justify-start">
                <PageHeader
                    title={"_work"}
                    description={
                        "hands-on professional experience building, deploying, and scaling apps for businesses"
                    }
                ></PageHeader>
            </div>
            <div className="mt-16">
                 <Button href="https://drive.google.com/file/d/1o0PurEvkQ6T88OiXqJq-Dg21YZfTGwNp/view?usp=sharing" icon="/icons/paper.svg" primary="#172147" label="view_my_resume" textStyles="text-lg" />
            </div>

            <Timeline data={data}/>
           
        </PageContainer>
    );
};

export default Overlay;
