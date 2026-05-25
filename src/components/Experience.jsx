import React from "react";

function Experience() {
    return (
        <section
            id="experience"
            className="min-h-screen bg-[#050B1E] text-white px-6 md:px-20 py-20"
        >
            <div className="max-w-5xl mx-auto">

                {/* HEADING */}
                <div className="mb-14">
                    <p className="text-blue-400 text-sm tracking-[4px] uppercase mb-3">
                        My Journey
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        Where I've Worked
                    </h2>
                </div>

                {/* EXPERIENCE LIST */}
                <div className="space-y-6">

                    {/* EXPERIENCE 1 */}
                    <details className="group bg-[#0B1228] border border-blue-500/20 rounded-2xl overflow-hidden">

                        <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Web Developer
                                </h3>

                                <p className="text-blue-400 mt-1">
                                    Renu Sharma Foundation · Internship
                                </p>

                                <p className="text-sm text-gray-400 mt-1">
                                    Feb 2025 - May 2025 · 4 mos · Remote
                                </p>
                            </div>

                            {/* ARROW */}
                            <span className="text-2xl transition group-open:rotate-180">
                                ⌄
                            </span>

                        </summary>

                        {/* CONTENT */}
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed space-y-4 border-t border-blue-500/10">

                            <p>
                                Worked on developing and enhancing the
                                foundation’s web platform to improve user
                                engagement and user experience.
                            </p>

                            <p>
                                Used React.js, Tailwind CSS, and JavaScript for
                                frontend development while collaborating with
                                the team to integrate features and optimize
                                performance.
                            </p>

                            {/* SKILLS */}
                            <div className="flex flex-wrap gap-3 pt-2">

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    React.js
                                </span>

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    Tailwind CSS
                                </span>

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    JavaScript
                                </span>

                            </div>

                        </div>

                    </details>

                    {/* EXPERIENCE 2 */}
                    <details className="group bg-[#0B1228] border border-blue-500/20 rounded-2xl overflow-hidden">

                        <summary className="flex items-center justify-between cursor-pointer list-none p-6">

                            <div>
                                <h3 className="text-xl md:text-2xl font-semibold">
                                    Content Creator
                                </h3>

                                <p className="text-blue-400 mt-1">
                                    Persist Ventures · Internship
                                </p>

                                <p className="text-sm text-gray-400 mt-1">
                                    Jul 2024 - Sep 2024 · 3 mos · Remote
                                </p>
                            </div>

                            {/* ARROW */}
                            <span className="text-2xl transition group-open:rotate-180">
                                ⌄
                            </span>

                        </summary>

                        {/* CONTENT */}
                        <div className="px-6 pb-6 text-gray-300 leading-relaxed space-y-4 border-t border-blue-500/10">

                            <p>
                                Worked as a Content Creator and contributed to
                                video creation, UI-related content, and screen
                                recordings during the internship.
                            </p>

                            <p>
                                Improved creativity, communication, teamwork,
                                adaptability, and content production skills
                                while working in a collaborative environment.
                            </p>

                            {/* SKILLS */}
                            <div className="flex flex-wrap gap-3 pt-2">

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    Content Creation
                                </span>

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    UI Design
                                </span>

                                <span className="px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-sm">
                                    Creativity
                                </span>

                            </div>

                        </div>

                    </details>

                </div>

            </div>
        </section>
    );
}

export default Experience;