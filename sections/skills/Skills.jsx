import React from "react";
import { skillsData } from "@/data/Skills";
import SkillsRange from "@/components/skills-range/SkillsRange";

const Skills = () => {
    return (
        <section
            id="skills"
            className="h-fit min-h-screen w-screen bg-transparent py-5 flex flex-col items-center px-2 md:px-10"
        >
            <h2 className="text-center text-slate-100 font-black text-sm mb-10 underline">
                skills
            </h2>
            <ul className="w-full rounded-lg bg-slate-950 p-3 md:p-10 max-w-[720px] flex flex-col bg-opacity-15">
                {skillsData.map((skill) => (
                    <SkillsRange
                        key={skill.name}
                        name={skill.name}
                        rate={skill.rate}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Skills;
