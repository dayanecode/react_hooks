import './App.css';

// componentes
import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'; 
import Home from './pages/Home';
import About from './pages/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ul>
          <li>
            <Link to='/home'>HOME</Link>
          </li>
          <li>
            <Link to='/about'>SOBRE</Link>
          </li>
        </ul>
        <Routes>
          <Route path='/home' element={<Home />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
