import React from "react";

function Achievements() {
    return (
        <div
            id="achievements"
            className="bg-[#050B1E] text-white px-6 md:px-20 py-24"
        >
            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <div className="mb-20">
                    <p className="text-blue-400 tracking-[4px] uppercase text-sm mb-3">
                        My Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Education & Achievements
                    </h2>
                </div>

                {/* TIMELINE CONTAINER */}
                <div className="relative">

                    {/* CENTER LINE */}
                    <div className="absolute left-1/2 top-0 h-full w-[2px] bg-blue-500/20 -translate-x-1/2 hidden md:block"></div>

                    {/* ITEM 1 */}
                    <div className="relative grid md:grid-cols-2 gap-10 mb-20 items-center">

                        {/* LEFT */}
                        <div className="md:text-right">

                            <p className="text-blue-400 font-medium mb-2">
                                2020
                            </p>

                            <h3 className="text-2xl font-bold mb-3">
                                SSC - 10th Grade
                            </h3>

                            <p className="text-gray-300">
                                Smt. U.M.S.P.M. Vidyalay, Wadavali
                            </p>

                            <p className="text-blue-400 mt-2 font-semibold">
                                Scored 91%
                            </p>

                        </div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        {/* RIGHT EMPTY */}
                        <div></div>

                    </div>

                    {/* ITEM 2 */}
                    <div className="relative grid md:grid-cols-2 gap-10 mb-20 items-center">

                        <div></div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        {/* RIGHT */}
                        <div>

                            <p className="text-blue-400 font-medium mb-2">
                                2022
                            </p>

                            <h3 className="text-2xl font-bold mb-3">
                                HSC - 12th Grade
                            </h3>

                            <p className="text-gray-300">
                                Saraswati Vidya Mandir & Junior College, Pachal
                            </p>

                            <p className="text-blue-400 mt-2 font-semibold">
                                Scored 76%
                            </p>

                        </div>

                    </div>

                    {/* ITEM 3 */}
                    <div className="relative grid md:grid-cols-2 gap-10 mb-20 items-center">

                        {/* LEFT */}
                        <div className="md:text-right">

                            <p className="text-blue-400 font-medium mb-2">
                                2023-2026
                            </p>

                            <h3 className="text-2xl font-bold mb-3">
                                Bachelor of Engineering
                            </h3>

                            <p className="text-gray-300">
                                Rizvi College of Engineering, Mumbai
                            </p>

                            <p className="text-blue-400 mt-2 font-semibold">
                                Electronics & Computer Science
                            </p>

                            <p className="text-gray-400 mt-2">
                                TFWS Student
                            </p>

                        </div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        <div></div>

                    </div>

                    {/* ITEM 4 */}
                    <div className="relative grid md:grid-cols-2 gap-10 mb-20 items-center">

                        <div></div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        {/* RIGHT */}
                        <div className="bg-[#0B1228] border border-blue-500/20 rounded-3xl p-6">

                            <p className="text-blue-400 font-medium mb-2">
                                2024
                            </p>

                            <h3 className="text-2xl font-bold mb-4">
                                Full Stack Web Development Course
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Successfully completed a Full Stack Web Development
                                course covering frontend and backend technologies.
                            </p>

                           

                            <img
                                src="/course.png"
                                alt="Certificate"
                                className="mt-6 rounded-2xl border border-blue-500/20"
                            />

                        </div>

                    </div>

                    {/* ITEM 5 */}
                    <div className="relative grid md:grid-cols-2 gap-10 mb-20 items-center">

                        {/* LEFT */}
                        <div className="bg-[#0B1228] border border-blue-500/20 rounded-3xl p-6 md:text-right">

                            <p className="text-blue-400 font-medium mb-2">
                                2024
                            </p>

                            <h3 className="text-2xl font-bold mb-4">
                                Persist Ventures Internship
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Worked as a Content Creator Intern and improved
                                creativity, communication, and UI understanding.
                            </p>

                            <img
                                src="/persist.png"
                                alt="Persist Ventures"
                                className="mt-6 rounded-2xl border border-blue-500/20"
                            />

                        </div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        <div></div>

                    </div>

                    {/* ITEM 6 */}
                    <div className="relative grid md:grid-cols-2 gap-10 items-center">

                        <div></div>

                        {/* DOT */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-blue-500 shadow-[0_0_20px_#3B82F6]"></div>

                        {/* RIGHT */}
                        <div className="bg-[#0B1228] border border-blue-500/20 rounded-3xl p-6">

                            <p className="text-blue-400 font-medium mb-2">
                                2025
                            </p>

                            <h3 className="text-2xl font-bold mb-4">
                                Renu Sharma Foundation Internship
                            </h3>

                            <p className="text-gray-300 leading-relaxed">
                                Worked as a Web Development Intern using React.js,
                                Tailwind CSS, and JavaScript.
                            </p>

                            <img
                                src="/renu.jpg"
                                alt="Renu Sharma Foundation"
                                className="mt-6 rounded-2xl border border-blue-500/20"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default Achievements;