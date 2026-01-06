import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Landingpage from './Components/Landingpage';
import FeaturedProduct from './Components/FeaturedProduct';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col">
      <Navbar/>
      <Landingpage/>
      <FeaturedProduct/>
    </div>
  );
}

export default App;
