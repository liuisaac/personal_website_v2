import Image from "next/image";
import React from "react";

const Testimonial = ({ body, name, qualifier, src }) => {
    return (
        <div className="col w-[30em] bg-black p-4 rounded-xl border-1 border-white bg-opacity-40 backdrop-blur-lg">
            <div className="row justify-between">
                <Image src="/testimonials/quote.svg" width={60} height={60} />
                <figure className="p-1 bg-slate rounded-full">
                    <Image
                        src={src}
                        width={60}
                        height={60}
                        className="rounded-full"
                    />
                </figure>
            </div>
            <p className="mt-2 text-slate">
                Isaac is extremely talented in Full Stack development. His
                impact in leading the website for Canada&apos;s largest robotics
                tournament is something I would&apos;ve expected from a full CS
                graduate. His work is beyond satisfactory, and his time
                management and response time is excellent. As a result of his
                work, we have been able to bring in more attention and present
                Mecha Mayhem to the world at a professional quality. I highly
                recommend Isaac for any full stack development.
            </p>
            <span className="text-lg font-semibold mt-4"> -- Justin Zhou</span>
            <span className="text-md text-slate italic mt-4">Founder of Western Mechatronics Robotics, Event Organizer for Mecha Mayhem</span>
        </div>
    );
};

export default Testimonial;
