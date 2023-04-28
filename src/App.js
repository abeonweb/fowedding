import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Gallery from "./components/Gallery"
import Programs from "./components/Programs"
import Locations from "./components/Locations"


function App() {
  const [section, setSection] = useState("home")
  return (

    <Routes>
      <Route path="/" element={<Layout setSection={setSection}/>}>
        <Route index element={<Home section={section}/>} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="locations" element={<Locations />} />
        <Route path="programs" element={<Programs />} />
      </Route>
    </Routes>

  );
}

export default App;
