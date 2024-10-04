import React from "react";

const Navbar = () => {
    return (
        <nav className="grid md:grid-cols-2 fixed inset-x-0 top-0 p-[2rem] z-[20]">
            <div></div>
            <ul className="max-w-md flex flex-row justify-between">
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#home"
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#services"
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#skills"
                    >
                        Skills
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#tools"
                    >
                        Tools
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#work"
                    >
                        Work Experience
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-50 hover:text-blue-400"
                        href="#contact"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
