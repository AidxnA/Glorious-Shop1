import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import FeaturedProduct from './Components/FeaturedProduct';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import ProductGuide from './Components/ProductGuide';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import Shop from "./Components/Shop"; 



function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Product/:slug" element={<ProductGuide />}></Route>
        <Route path="/shop" element={<Shop />} />

      </Routes>
    </div>
  );

}

export default App;
