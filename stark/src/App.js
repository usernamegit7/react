import { Route, Routes, Link } from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import Comp from './Comp';
import Modall from './Modall';
import Fetch from './Fetch';
import Fetch1 from './Fetch1';
import Info from './Info';
import Pdf from './Pdf';
import Delete from './Delete';
import Navbar from './Navbar';
import Products from './Products';
import Pricing from './Pricing';
import Blog from './Blog';
import InputError from "./InputError";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React JS
        </p>

        <nav>
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
      </nav>

      

     <Routes>
      <Route path="/products" element={<Products />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
     </Routes>
        
        
      <Button>Primary</Button>
      <Button href="#text-buttons">Linkk</Button>
      <InputError/>
      <Comp />
      <Modall />
      <Fetch />
      <Fetch1/>
      <Info />
      <Pdf />
      <Delete />
    
        
      </header>
      
    </div>
  );
}

export default App;
