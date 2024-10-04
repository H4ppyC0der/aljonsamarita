"use client";
import React, { useState } from "react";
import SuccessAlert from "../alerts/SuccessAlert";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [alertView, setAlertView] = useState("hidden");
    const [sending, setSending] = useState(false);
    const sendMail = async (e) => {
        e.preventDefault();
        setSending(true);
        const response = await fetch("/api/email", {
            method: "POST",
            headers: new Headers({
                "Content-Type": "application/json",
                Accept: "application/json",
            }),
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                subject,
                message,
            }),
        });
        if (response.status === 200) {
            setSending(false);
            setAlertView("flex");
            setTimeout(() => {
                setAlertView("hidden");
            }, 3000);
            setFirstName("");
            setLastName("");
            setEmail("");
            setSubject("");
            setMessage("");
        } else {
            setSending(false);
        }
    };
    return (
        <>
            <SuccessAlert
                heading="Email sent!"
                text="I'll get back to you the soonest!"
                alertView={alertView}
            />
            <form
                onSubmit={sendMail}
                className="flex flex-col w-full max-w-lg self-center bg-dark-950 px-[2%] md:px-[4%] mt-20 py-20 gap-2 shadow-[0_0px_60px_20px_rgba(0,0,0,0.3)]"
            >
                <h2 className="text-blue-400 text-4xl w-full font-bold mb-10 flex flex-row justify-center gap-5">
                    Let's Connect <FaPaperPlane />
                </h2>
                <fieldset className="flex flex-col md:flex-row gap-2 w-full">
                    <fieldset className="flex flex-col">
                        <label className="text-blue-500" htmlFor="first-name">
                            First name
                        </label>
                        <input
                            className="w-full rounded-md text-dark p-4 border-2 bg-white border-white focus:outline-none hover:border-blue-500 focus:border-blue-500"
                            id="first-name"
                            type="text"
                            placeholder="Juan"
                            required
                            value={firstName}
                            onChange={(val) => setFirstName(val.target.value)}
                            title="Your First Name."
                            onInvalid={(e) =>
                                e.target.setCustomValidity(
                                    "Please tell me your first name."
                                )
                            }
                            onInput={(e) => e.target.setCustomValidity("")}
                        />
                    </fieldset>
                    <fieldset className="flex flex-col">
                        <label className="text-blue-500" htmlFor="last-name">
                            Last name
                        </label>
                        <input
                            className="w-full rounded-md text-dark p-4 border-2 bg-white border-white focus:outline-none hover:border-blue-500 focus:border-blue-500"
                            id="last-name"
                            type="text"
                            placeholder="Dela Cruz"
                            value={lastName}
                            onChange={(val) => setLastName(val.target.value)}
                        />
                    </fieldset>
                </fieldset>
                <fieldset className="flex flex-col">
                    <label className="text-blue-500" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="rounded-md text-dark p-4 border-2 bg-white border-white focus:outline-none hover:border-blue-500 focus:border-blue-500"
                        id="email"
                        type="email"
                        required
                        placeholder="youremail@gmail.com"
                        value={email}
                        onChange={(val) => setEmail(val.target.value)}
                        title="Your valid email address."
                        onInvalid={(e) =>
                            e.target.setCustomValidity(
                                "Please input your valid email address."
                            )
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label className="text-blue-500" htmlFor="subject">
                        Subject line
                    </label>
                    <input
                        className="rounded-md text-dark p-4 border-2 bg-white border-white focus:outline-none hover:border-blue-500 focus:border-blue-500"
                        id="subject"
                        type="text"
                        required
                        placeholder="Your main concern."
                        value={subject}
                        onChange={(val) => setSubject(val.target.value)}
                        onInvalid={(e) =>
                            e.target.setCustomValidity(
                                "Please tell me the main purpose of your contact."
                            )
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                    />
                </fieldset>
                <fieldset className="flex flex-col">
                    <label className="text-blue-500" htmlFor="message">
                        Message
                    </label>
                    <textarea
                        className="rounded-md text-dark p-4 border-2 bg-white border-white focus:outline-none hover:border-blue-500 focus:border-blue-500"
                        required
                        placeholder="Please elaborate your concern."
                        value={message}
                        onChange={(val) => setMessage(val.target.value)}
                        title="Details of your contact."
                        onInvalid={(e) =>
                            e.target.setCustomValidity(
                                "Tell me more details of your contact."
                            )
                        }
                        onInput={(e) => e.target.setCustomValidity("")}
                    />
                </fieldset>
                <button
                    className="text-dark-950 bg-blue-600 font-bold rounded-md mt-5 py-4 hover:bg-blue-400"
                    type="submit"
                    disabled={sending}
                >
                    {sending ? "Sending" : "Send"}
                </button>
            </form>
        </>
    );
};
export default ContactForm;
