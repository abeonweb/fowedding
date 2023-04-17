import './App.css'
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* <Route path="gallery" element={<Gallery />} />
          <Route path="locations" element={<Locations />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
