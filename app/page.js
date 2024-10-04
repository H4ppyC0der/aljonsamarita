import Image from "next/image";
import Hero from "@/sections/hero/Hero";
import Services from "@/sections/services/Services";
import Skills from "@/sections/skills/Skills";
import Tools from "@/sections/tools/Tools";
import Work from "@/sections/work/Work";
import Contact from "@/sections/contact/Contact";
import Footer from "@/sections/footer/Footer";

export default function Home() {
    return (
        <main className="h-fit overflow-x-hidden">
            <Hero />
            <Services />
            <Skills />
            <Tools />
            <Work />
            <Contact />
            <Footer />
        </main>
    );
}
