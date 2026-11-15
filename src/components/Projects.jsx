
import React from "react";

function Projects() {

    const projects = [
        {
            title: "PYQStore",
            description: "An online platform to access and view engineering previous year question papers.",
            tech: "React, Vite, Tailwind CSS ,JSON , Daisy UI",
            video: "/videos/pyqstore.mp4"
        },
        {
            title: "SmartMediBook",
            description: "An AI-powered hospital appointment booking system.",
            tech: "React, Node.js, Express, MongoDB",
            video: "/videos/smartmedibook.mp4"
        }
    ];

    return (
        <div className="min-h-screen bg-[#050B1E] text-white px-6 md:px-16 py-16">

            <h1 className="text-4xl font-bold text-center mb-3">
                My Projects
            </h1>

            <p className="text-gray-400 text-center mb-12">
                A collection of projects I've built.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="bg-[#0D1730] rounded-xl overflow-hidden border border-gray-800"
                    >

                        <video
                            src={project.video}
                            controls
                            className="w-full aspect-video object-cover"
                        />

                        <div className="p-6">

                            <h2 className="text-2xl font-semibold mb-3">
                                {project.title}
                            </h2>

                            <p className="text-gray-400 mb-4">
                                {project.description}
                            </p>

                            <p className="text-blue-400 text-sm">
                                {project.tech}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}

export default Projects;

