import React from "react";
import Timeline from "@/components/timeline/Timeline";
import { workData } from "@/data/workData";

const Work = () => {
    return (
        <section
            id="work"
            className="h-fit min-h-screen bg-transparent py-5 flex flex-col items-center"
        >
            <h2 className="text-center text-slate-100 font-black text-sm underline">
                work experience
            </h2>
            <div className="py-20 max-w-[1020px] pl-14 lg:pl-[10%]">
                {workData.map((datus) => (
                    <Timeline key={datus.sequence} data={datus} />
                ))}
            </div>
        </section>
    );
};

export default Work;
