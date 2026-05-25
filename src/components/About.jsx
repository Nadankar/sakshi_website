// import React from "react";

// function About() {
//   return (
//     <section
//       id="about"
//       className="min-h-screen bg-[#050B1E] text-white px-6 md:px-20 py-20"
//     >
//       <div className="max-w-5xl mx-auto">

//         {/* HEADING */}
//         <div className="mb-12">
//           <p className="text-blue-400 text-sm tracking-widest uppercase mb-2">
//             Get To Know More
//           </p>

//           <h2 className="text-1xl md:text-5xl font-bold">
//             About Me
//           </h2>
//         </div>

//         {/* CONTENT */}
//         <div className="grid md:grid-cols-2 gap-12 items-start">

//           {/* LEFT TEXT */}
//           <div className="space-y-6 text-gray-400 leading-relaxed">

//             <p >
//               Hello! My name is Sakshi Nadankar. I’m a passionate
//               Full Stack Web Developer with a strong interest in
//               building modern and user-friendly web applications.
//             </p>

//             <p>
//               I enjoy exploring new technologies and continuously
//               improving my development skills through projects and
//               hands-on learning using React.js, Node.js,
//               Express.js, MongoDB, and Tailwind CSS.
//             </p>

//             <p>
//               Apart from development, I enjoy problem-solving,
//               exploring UI design, and creating content while
//               continuously learning to grow as a developer.
//             </p>
//           </div>

//           {/* RIGHT SIDE */}
//           <div className="bg-[#0B1228] border border-blue-500/20 rounded-2xl p-6">

//             <h3 className="text-2xl font-semibold mb-6 text-blue-400">
//               Interests & Activities
//             </h3>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               <div className="bg-[#111827] rounded-xl p-4 hover:border-blue-500/40 border border-transparent transition">
//                 Learning New Technologies
//               </div>

//               <div className="bg-[#111827] rounded-xl p-4 hover:border-blue-500/40 border border-transparent transition">
//                 Content Creation
//               </div>

//               <div className="bg-[#111827] rounded-xl p-4 hover:border-blue-500/40 border border-transparent transition">
//                 Coding
//               </div>

//               <div className="bg-[#111827] rounded-xl p-4 hover:border-blue-500/40 border border-transparent transition">
//                 UI Design Exploration
//               </div>

//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;


import React from "react";

function About() {
    return (
        <section
            id="about"
            className="min-h-screen bg-[#050B1E] text-white px-6 md:px-20 py-20"
        >
            <div className="max-w-6xl mx-auto">

                {/* HEADING */}
                <div className="mb-14">
                    <p className="text-blue-400 text-sm tracking-[4px] uppercase mb-3">
                        Get To Know More
                    </p>

                    <h2 className="text-4xl md:text-5xl font-bold">
                        About Me
                    </h2>
                </div>

                {/* CONTENT */}
                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* LEFT SIDE */}
                    <div className="space-y-6 text-gray-400 leading-relaxed text-base md:text-lg">

                        <p>
                            Hello! My name is Sakshi Nadankar. I’m a passionate
                            Full Stack Web Developer with a strong interest in
                            building modern and user-friendly web applications.
                        </p>

                        <p>
                            I enjoy exploring new technologies and continuously
                            improving my development skills through projects and
                            hands-on learning using React.js, Node.js,
                            Express.js, MongoDB, and Tailwind CSS.
                        </p>

                        <p>
                            Apart from development, I enjoy problem-solving,
                            exploring UI design, and creating content while
                            continuously learning and growing as a developer.
                        </p>

                        {/* ACTIVITIES */}
                        <div className="pt-4">

                            <h3 className="text-blue-400 text-xl font-semibold underline underline-offset-8 decoration-blue-500 mb-4">
                                Here are a few other activities that I love to do!
                            </h3>

                            <ul className="space-y-2 text-gray-300">

                                <li>• Learning New Technologies</li>
                                <li>• Content Creation</li>
                                <li>• Coding</li>
                                <li>• UI Design Exploration</li>

                            </ul>

                        </div>

                    </div>

                    {/* RIGHT SIDE IMAGE */}
                    <div className="flex justify-center">

                        <div className="relative">

                            {/* BLUE GLOW */}
                            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>

                            {/* IMAGE */}
                            <img
                                
                                src="/sakshi.jpeg"

                                alt="Sakshi Nadankar"
                                className="relative w-72 md:w-96 rounded-3xl border border-blue-500/20 object-cover shadow-2xl"
                            />

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default About;