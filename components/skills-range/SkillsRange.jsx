import React from "react";

const SkillsRange = ({ name, rate }) => {
    return (
        <>
            <p className="text-slate-200">{name}</p>
            <li className="w-[100%] bg-slate-500 rounded-md mb-5">
                <p
                    style={{ width: `${rate}%` }}
                    className="bg-green-700 text-right text-slate-100 rounded-md"
                >
                    {rate}%
                </p>
            </li>
        </>
    );
};

export default SkillsRange;
