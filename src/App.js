import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import ArtHome from "./pages/art/ArtHome";
import PlateShop from "./pages/plate-shop/Plate-Shop.jsx";
import About from "./pages/about/About";
import Footer from "./components/Footer";
import Vases from "./pages/Vases/Vases";
import Baskets from "./pages/Baskets/Baskets";
import Bowls from "./pages/Bowls/Bowls";
import Dreamscapes from "./pages/Dreamscapes/Dreamscapes";
import Sculptures from "./pages/Sculptures/Sculptures";
import Walls from "./pages/Walls/Walls";

function App() {
  return (<Router>
 <Navbar/>
 <Routes>
 <Route path='/' element={<Home />} />
  <Route path='contact' element={<Contact />} />
  <Route path='art' element={<ArtHome/>}/>
  <Route path='plate-shop' element={<PlateShop/>}/>
  <Route path='about' element={<About/>}/>
  <Route path='vases' element={<Vases/>}/>
  <Route path='baskets' element={<Baskets/>}/>
  <Route path='bowls' element={<Bowls/>}/>
  <Route path='dreamscapes' element={<Dreamscapes/>}/>
  <Route path='walls' element={<Walls/>}/>
  <Route path='sculptures' element={<Sculptures/>}/>
 </Routes>

<Footer/>

  </Router>

 
  

  
    );
}

export default App;
