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

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React JS
        </p>
        
        
      <Button>Primary</Button>
      <Button href="#text-buttons">Linkk</Button>
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
