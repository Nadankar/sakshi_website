import React from "react";
import { Link } from "react-router-dom";

function Intro() {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 md:px-20 text-white bg-[#050B1E]">

            <div className="max-w-3xl text-center md:text-left">

                {/* SMALL INTRO LINE */}
                <p className="text-blue-400 text-sm md:text-base mb-3">
                    Hi, my name is
                </p>

                {/* NAME */}
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                    Sakshi Nadankar
                </h1>


                {/* TAGLINE */}
                <p className="text-gray-400 text-base md:text-lg leading-relaxed ">
                    I’m a Full Stack Web Developer passionate about building scalable and
                    responsive web applications. I work with technologies like React,
                    Node.js, Express, and MongoDB to create clean and efficient digital experiences.
                </p>

                {/* BUTTONS */}
                <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-5">

                    <Link
                        to="/projects"
                        className="px-6 py-3 rounded-md bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        View Projects
                    </Link>


                </div>

            </div>

        </div>
    );
}

export default Intro;