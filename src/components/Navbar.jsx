import React, { useState } from "react";

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="fixed top-0 left-0 w-full z-50 bg-[#050B1E]/90 backdrop-blur-md border-b border-blue-500/20 px-4 md:px-10 py-3 text-white">

            {/* MAIN NAVBAR */}
            <div className="flex items-center justify-between">

                {/* LEFT LOGO */}
                <div className="flex items-center">
                    <a
                        href="/"
                        onClick={(e) => {
                            e.preventDefault();
                            window.location.reload();
                        }}
                        className="flex items-center cursor-pointer"
                    >

                        <div className="relative w-12 h-12 flex items-center justify-center">
                            <svg viewBox="0 0 100 100" className="absolute w-full h-full">
                                <polygon
                                    points="50,8 88,28 88,72 50,92 12,72 12,28"
                                    fill="none"
                                    stroke="#3B82F6"
                                    strokeWidth="3"
                                />
                            </svg>

                            <span className="text-blue-500 font-bold text-sm tracking-[4px]">
                                SN
                            </span>
                        </div>

                    </a>
                </div>

                {/* DESKTOP MENU */}
                <div className="hidden lg:flex items-center gap-8 text-sm">

                    <a href="#about" className="hover:text-blue-400">About</a>
                    <a href="#experience" className="hover:text-blue-400">Experience</a>
                    <a href="#achievements" className="hover:text-blue-400">Achievements</a>
                    <a href="#contact" className="hover:text-blue-400">Contact</a>

                    <a
                        href="https://www.linkedin.com/in/sakshi-nadankar-54a781282/"
                        className="btn bg-transparent border border-blue-500 text-blue-400 hover:bg-[#050B1E]/90 hover:text-white rounded-md  py-2 px-3"
                    >
                        Resume
                    </a>
                </div>

                {/* MOBILE BUTTON */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setOpen(true)}
                        className="text-blue-400"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-7 w-7"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>

            </div>

            {/* MOBILE SIDEBAR OVERLAY */}
            {open && (
                <div className="fixed inset-0 z-50">

                    {/* DARK BACKDROP */}
                    <div
                        className="absolute inset-0 bg-black/60 "
                        onClick={() => setOpen(false)}
                    />

                    {/* SIDE MENU */}
                    <div className="absolute right-0 top-0 h-screen w-72 bg-[#050B1E] border-l border-blue-500/20 p-6 flex flex-col text-white z-50">
                        <button
                            onClick={() => setOpen(false)}
                            className="self-end text-white text-xl mb-4"
                        >
                            ✕
                        </button>

                        <div className="flex flex-col gap-2">

                            <a
                                onClick={() => setOpen(false)}
                                href="#about"
                                className="px-4 py-2 rounded-md hover:bg-blue-500/20 transition"
                            >
                                About
                            </a>

                            <a
                                onClick={() => setOpen(false)}
                                href="#experience"
                                className="px-4 py-2 rounded-md hover:bg-blue-500/20  transition"
                            >
                                Experience
                            </a>

                            <a
                                onClick={() => setOpen(false)}
                                href="#achievements"
                                className="px-4 py-2 rounded-md hover:bg-blue-500/20 transition"
                            >
                                Achievements
                            </a>

                            <a
                                onClick={() => setOpen(false)}
                                href="#contact"
                                className="px-4 py-2 rounded-md hover:bg-blue-500/20  transition"
                            >
                                Contact
                            </a>
                        </div>

                        <a
                            href="https://www.linkedin.com/in/sakshi-nadankar-54a781282"
                            className="mt-5 btn bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white py-2 px-3 rounded-md"
                        >
                            Resume
                        </a>
                    </div>
                </div>
            )}

        </div>
    );
}

export default Navbar;

