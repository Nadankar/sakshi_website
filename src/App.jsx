// import React from 'react'
// import { useState } from "react";
// import Loader from "./components/Loader.jsx"
// import Home from './components/Home.jsx';
// import Route from 'react-dom'
// import 

// function App() {
//    const [loading, setLoading] = useState(true);
//   return (
//     <>
//     {loading ? (
//         <Loader onFinish={() => setLoading(false)} />
//       ) : (
//         <Home/>
//       )}
    
//     </>
//   )
// }
// import Projects from './components/Projects.jsx';

// export default App



import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Loader from "./components/Loader.jsx";
import Home from "./components/Home.jsx";
import Projects from "./components/Projects.jsx";

function App() {
    const [loading, setLoading] = useState(true);

    return (
        <BrowserRouter>
            {loading ? (
                <Loader onFinish={() => setLoading(false)} />
            ) : (
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            )}
        </BrowserRouter>
    );
}

export default App;

