import React from "react";
import { FaSkype } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className=" mt-10">
            <section className="border-t-2 border-t-teal-900 grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
                <ul className="flex flex-col items-center md:items-end">
                    <h2 className="font-bold text-teal-400">Quick Links</h2>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#home"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#services"
                        >
                            Services Offered
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#skills"
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#tools"
                        >
                            Tools Used
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#work"
                        >
                            Work Experience
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="#contact"
                        >
                            Contact Me
                        </a>
                    </li>
                </ul>
                <ul className="flex flex-col items-center md:items-start">
                    <h2 className="font-bold text-teal-400">
                        Personal Details
                    </h2>
                    <li>
                        <p className="text-slate-100 text-sm">
                            Education: UP Los Banos
                        </p>
                    </li>
                    <li className="text-slate-100 text-sm">
                        Email address
                        <a
                            className="hover:underline"
                            href="mailto:arsamarita2@gmail.com"
                        >
                            : arsamarita2@gmail.com
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="HTTPS://WWW.FACEBOOK.COM/SAMROSS07/"
                        >
                            Facebook
                        </a>
                    </li>
                    <li>
                        <a
                            className="text-slate-100 hover:underline text-sm"
                            href="skype:cid.E84453F27E336796"
                        >
                            Skype
                        </a>
                    </li>
                </ul>
            </section>
            <section className="border-t-[1px] border-t-teal-900 text-slate-300 text-center p-2 text-sm">
                All rights reserved @2024 | Designed and Created for Aljon
                Samarita
            </section>
        </footer>
    );
};

export default Footer;
