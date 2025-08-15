import React from "react";
import PageContainer from "../ui/page/PageContainer";
import PageHeader from "../ui/page/PageHeader";
import Link from "next/link";
import Testimonial from "./Testimonial";

const Overlay = () => {
    return (
        <PageContainer>
            <div className="w-full col items-start justify-start">
                <PageHeader
                    title={"_contact"}
                    description={
                        "interested? reach out to me via any of the following channels"
                    }
                ></PageHeader>
            </div>
            <div className="row mt-24 gap-8">
                <div className="col xl:text-3xl text-2xl tracking-widest gap-8">
                    <Link
                        className="underline font-bold"
                        href="mailto:liuisaac05@gmail.com"
                    >
                        liuisaac05@gmail.com
                    </Link>
                    <Link
                        className=""
                        href="https://www.linkedin.com/in/liuisaac05/"
                    >
                        _linkedin
                    </Link>
                    <Link
                        className=""
                        href="https://github.com/liuisaac"
                    >
                        _github
                    </Link>
                    <Link
                        className=""
                        href="https://www.instagram.com/liuisaac05/?hl=en"
                    >
                        _instagram
                    </Link>
                </div>
                <figure className="w-[1px] h-96 bg-slate xl:flex hidden" />
                <Testimonial src="/testimonials/justin.jpeg" />
            </div>
        </PageContainer>
    );
};

export default Overlay;
