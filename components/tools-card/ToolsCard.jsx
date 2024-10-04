import React from "react";

const ToolsCard = ({ name, image }) => {
    return (
        <section className="w-full h-full p-5 rounded-md bg-slate-950 bg-opacity-60 flex flex-col justify-center items-center gap-4">
            <div
                key={image}
                className="w-20 h-20"
                dangerouslySetInnerHTML={{ __html: image }}
            />
            <h3 className="text-slate-100 text-sm font-bold">{name}</h3>
        </section>
    );
};

export default ToolsCard;
