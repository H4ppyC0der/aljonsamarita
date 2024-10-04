import React from "react";
import { skillsData } from "@/data/Skills";

const Skills = () => {
    return (
        <section
            id="skills"
            className="h-fit min-h-screen bg-transparent py-5 px-10"
        >
            <h2 className="text-center text-slate-100 font-black text-sm mb-10 underline">
                skills
            </h2>
            <ul className="w-full rounded-lg bg-slate-200 p-10 flex flex-col bg-opacity-5">
                {skillsData.map((skill) => {
                    return (
                        <>
                            <p className="text-slate-200">{skill.name}</p>
                            <li className="w-full bg-slate-500 rounded-md mb-5">
                                <p
                                    className={`w-[${skill.rate}] bg-green-700 text-right text-slate-100 rounded-md`}
                                >
                                    {skill.rate}
                                </p>
                            </li>
                        </>
                    );
                })}
            </ul>
        </section>
    );
};

export default Skills;
