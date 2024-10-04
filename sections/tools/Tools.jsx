import React from "react";
import ToolsCard from "@/components/tools-card/ToolsCard";
import { toolsData } from "@/data/Tools";

const Tools = () => {
    return (
        <section
            id="tools"
            className="h-fit min-h-screen bg-transparent py-5 px-10 flex flex-col items-center"
        >
            <h2 className="text-center text-slate-100 font-black text-sm mb-10 underline">
                tools
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 max-w-[1020px] gap-5">
                {toolsData.map((tool) => (
                    <ToolsCard
                        key={tool.name}
                        name={tool.name}
                        image={tool.image}
                    />
                ))}
            </div>
        </section>
    );
};

export default Tools;
