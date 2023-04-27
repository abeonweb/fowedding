import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout"
import Home from "./components/Home"
import Program from "./components/Program"


function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/:id" element={<Home />} />
        <Route path="program" element={<Program />} />
      </Route>
    </Routes>

  );
}

export default App;
