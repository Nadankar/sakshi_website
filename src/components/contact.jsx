import React from "react";
import { FaEnvelope } from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="bg-[#050B1E] text-white px-6 md:px-20 py-24"
        >
            <div className="max-w-5xl mx-auto text-center">

                {/* HEADING */}
                <p className="text-blue-400 tracking-[4px] uppercase text-sm mb-3">
                    Get In Touch
                </p>

                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Contact Me
                </h2>

                {/* SUBTEXT */}
                <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
                    I’m currently open to jobs, collaborations, and
                    exciting opportunities in web development.
                </p>

                {/* CONTACT CARD */}
                <div className="flex justify-center mt-14">

                    <a
                        href="mailto:sakshinadankar5@gmail.com"
                        className=" border-5 border-blue-500/60 rounded-2xl px-8 py-6 hover:border-blue-500 hover:-translate-y-1 transition duration-300 group flex flex-col items-center"
                    >
                        <FaEnvelope className="text-3xl text-blue-400 group-hover:scale-110 transition" />

                        <p className="text-sm mt-3 text-gray-300">
                            Email Me
                        </p>
                    </a>

                </div>

            </div>
        </section>
    );
}

export default Contact;