import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import PhotoGallery from "./components/PhotoGallery"
import Programs from "./components/Programs"
import Locations from "./components/Locations"
import Information from "./components/Information"
import Gifts from "./components/Gifts"


function App() {
  const [section, setSection] = useState("home")
  return (

    <Routes>
      <Route path="/" element={<Layout setSection={setSection}/>}>
        <Route index element={<Home section={section}/>} />
        <Route path="gallery" element={<PhotoGallery />} />
        <Route path="locations" element={<Locations />} />
        <Route path="programs" element={<Programs />} />
        <Route path="gifts" element={<Gifts />} />
        <Route path="info" element={<Information/>} />
      </Route>
    </Routes>

  );
}

export default App;
