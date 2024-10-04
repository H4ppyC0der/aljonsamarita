import React from "react";

const SkillsRange = ({ name, rate }) => {
    return (
        <>
            <p className="text-slate-100">{name}</p>
            <li className="w-[100%] bg-slate-300 rounded-md mb-5">
                <p
                    style={{ width: `${rate}%` }}
                    className="bg-teal-300 text-right text-slate-950 rounded-md"
                >
                    {rate}%
                </p>
            </li>
        </>
    );
};

export default SkillsRange;
