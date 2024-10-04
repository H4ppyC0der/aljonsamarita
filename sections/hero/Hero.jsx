import React from "react";
import Image from "next/image";
import profile from "../../public/assets/profile.png";
import { Dancing_Script } from "next/font/google";
import Buttons from "@/components/hero-button/Buttons";
import Navbar from "@/components/navbar/Navbar";

const dancingScript = Dancing_Script({ subsets: ["latin"] });

const Hero = () => {
    return (
        <>
            <Navbar />
            <section id="home">
                <ul className="h-fit min-h-screen w-screen bg-gradient-to-r from-[#000000] to-[#0000001A] grid sm:grid-cols-1 lg:grid-cols-2 px-8 pb-[2rem] pt-[4rem]">
                    <li className="flex flex-col justify-center items-center order-last md:order-last lg:order-first">
                        <h1 className="text-blue-600 text-5xl md:text-7xl lg:text-7xl leading-[115%] tracking-[0.72px] border-b-[1px] border-blue-600">
                            Aljon Samarita
                        </h1>
                        <h4 className="text-blue-300">
                            Virtual Assistant | Account Manager
                        </h4>
                        <p className="text-slate-300 leading-[170%] pt-[1rem] py-[2rem] text-center">
                            I commit to personal and professional development,
                            strive continually for excellence. A Virtual
                            Assistant with excellent talent, attention to
                            detail, and expertise advocating for customers, who
                            also ensures projects are finished on schedule and
                            with the utmost discretion
                        </p>
                        <Buttons />
                    </li>
                    <li className="flex justify-center items-center ">
                        <Image
                            className="rounded-full drop-shadow-lg"
                            src={profile}
                            width={400}
                            height={400}
                            alt="Profile Picture"
                        />
                    </li>
                </ul>
            </section>
        </>
    );
};

export default Hero;
