import React from 'react'
import { useState } from "react";
import Loader from "./components/Loader.jsx"
import Home from './components/Home.jsx';

function App() {
   const [loading, setLoading] = useState(true);
  return (
    <>
    {loading ? (
        <Loader onFinish={() => setLoading(false)} />
      ) : (
        <Home/>
      )}
    </>
  )
}

export default App




