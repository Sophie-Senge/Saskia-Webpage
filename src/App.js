import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Art from "./pages/art/Art";
import PlateShop from "./pages/plate-shop/Plate-Shop.jsx";
import About from "./pages/about/About";

function App() {
  return (<Router>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home />} />
  <Route path='contact' element={<Contact />} />
  <Route path='art' element={<Art/>}/>
  <Route path='plate-shop' element={<PlateShop/>}/>
  <Route path='about' element={<About/>}/>
 </Routes>

  </Router>

 
  

  
    );
}

export default App;
