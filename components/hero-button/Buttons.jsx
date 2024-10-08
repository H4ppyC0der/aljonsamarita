"use client";
import Link from "next/link";
import React from "react";

const Buttons = () => {
    function downloadCV() {
        window.open("/aljonsamarita.pdf");
    }
    return (
        <div className="flex flex-row gap-5 justify-center md:justify-start lg:justify-start">
            <button
                onClick={downloadCV}
                className="border border-1 border-teal-400 font-semibold rounded-lg px-4 py-2 text-teal-400 hover:bg-teal-300 hover:text-slate-950 transition-all duration-200 hover:shadow-outer"
            >
                Download CV
            </button>
            <Link
                href="#contact"
                className="border border-1 border-teal-500 rounded-lg font-semibold px-4 py-2 bg-teal-400 hover:bg-teal-300 text-dark-950 hover:shadow-outer transition-all duration-200"
            >
                Contact Me
            </Link>
        </div>
    );
};

export default Buttons;
