import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const Timeline = ({ data }) => {
    return (
        <div className="w-full relative border-l-[2px] border-teal-400 h-fit lg:pr-20">
            <div
                key={data.sequence}
                className="absolute left-0 w-10 h-10 bg-teal-400 rounded-full flex justify-center items-center -ml-[24px] font-bold text-xl text-teal-700"
            >
                {data.sequence}
            </div>
            <div className="p-10 w-full">
                <div className="w-full flex flex-col md:flex-row md:justify-between">
                    <h2
                        key={data.role}
                        className="text-teal-400 font-bold text-2xl"
                    >
                        {data.role}
                    </h2>
                    <h3
                        key={data.duration}
                        className="text-slate-50 md:flex justify-center items-center"
                    >
                        {data.duration}
                    </h3>
                </div>
                <h2 key={data.company} className="text-slate-50 text-xl italic">
                    {data.company}
                </h2>
                <div className="mt-5">
                    {data.details.map((data) => (
                        <p
                            key={data}
                            className="text-slate-200 flex flex-row gap-2"
                        >
                            <span>
                                <FaCheckCircle className="text-teal-400" />
                            </span>
                            {data}
                        </p>
                    ))}
                </div>
                {data.technology && (
                    <p key={data.technology} className="text-slate-100">
                        Technologies: {data.technology}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Timeline;
