import React from "react";
import {
    FaGithub,
    FaLinkedin,
    FaInstagram,
    FaTwitter,
    FaFacebookF
} from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#050B1E] text-white pt-20 pb-5">

            <div className="max-w-6xl mx-auto flex flex-col items-center justify-center gap-5">

                {/* SOCIAL ICONS */}
                <div className="flex items-center gap-4">

                    <a
                        href="https://github.com/Nadankar"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0B1228] border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <FaGithub />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sakshi-nadankar-54a781282/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0B1228] border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <FaLinkedin />
                    </a>

                    <a
                        href="https://www.instagram.com/stories/sakshi_nadankar/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0B1228] border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <FaInstagram />
                    </a>

                    <a
                        href="https://x.com/nadankar_sakshi"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0B1228] border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <FaTwitter />
                    </a>

                    <a
                        href="https://www.facebook.com/share/1BaQkYh6Bf/"
                        target="_blank"
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-[#0B1228] border border-blue-500/20 flex items-center justify-center hover:bg-blue-500 hover:text-white transition duration-300"
                    >
                        <FaFacebookF />
                    </a>

                </div>

                {/* COPYRIGHT */}
                <div className="text-center">
                    <p className="text-gray-500 text-sm">
                        © 2026 Sakshi Nadankar
                    </p>

                    <p className="text-gray-400 text-sm mt-1">
                        Made 💙 with code.
                    </p>
                </div>

            </div>

        </footer>
    );
}

export default Footer;