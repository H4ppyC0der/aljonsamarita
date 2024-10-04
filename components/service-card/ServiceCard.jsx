import React from "react";
import Image from "next/image";

const ServiceCard = ({ name, description, image }) => {
    return (
        <div className=" h-fit bg-slate-200 rounded-[4px] py-[3rem] px-[2rem] flex flex-col items-center gap-[1rem] shadow-lg">
            <div
                key={image}
                className="w-10 h-10"
                dangerouslySetInnerHTML={{ __html: image }}
            />
            <h1 className="font-bold text-blue-950">{name}</h1>
            <p className="text-center text-sm text-slate-700">{description}</p>
        </div>
    );
};

export default ServiceCard;
