import React from "react";

const ToolsCard = ({ name, image }) => {
    return (
        <section className="w-full h-full p-5 rounded-md bg-slate-100 bg-opacity-5 flex flex-col justify-center items-center">
            <div
                key={image}
                className="w-20 h-20"
                dangerouslySetInnerHTML={{ __html: image }}
            />
            <h3 className="text-slate-300">{name}</h3>
        </section>
    );
};

export default ToolsCard;
