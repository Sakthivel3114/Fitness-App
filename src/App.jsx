import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BodyPartsCategory from "./pages/BodyPartsCategory";
import EquipmentCategory from "./pages/EquipmentCategory";

function App() {
  return (
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bodyPart/:id" element={<BodyPartsCategory />} />
          <Route path="/equipment/:id" element={<EquipmentCategory />} />
          <Route path="/exercise/:id" element={<Exercise />} />
        </Routes>
        <Footer /> 
      </BrowserRouter>
  );
}

export default App;
