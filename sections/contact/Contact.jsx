import React from "react";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
    return (
        <section
            id="contact"
            className="h-fit min-h-screen bg-transparent py-5 flex flex-col items-center"
        >
            <h2 className="text-center text-slate-100 font-black text-sm underline">
                contact form
            </h2>
            <ContactForm />
        </section>
    );
};

export default Contact;
