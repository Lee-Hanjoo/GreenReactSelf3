import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import './App.css';
import Home from './pages/Home';
import Media from './pages/Media';
import { useState } from 'react';

function App() {
  const [nav, setNav] = useState(false)
  
  return (
    <Router>
      <header className={`${nav ? 'on' : ''}`}>
        <button onClick={()=>{setNav(!nav)}} ></button>
        <Link to='/media' state='movies'>MOVIES</Link>
        <Link to='/media' state='music'>MUSIC</Link>
        <Link to='/media' state='apps'>APPS</Link>
        <Link to='/media' state='software'>SOFTWARE</Link>
      </header>
      <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/media' element={<Media />} />
          </Routes>
      </main>
    </Router>
  );
}

export default App;
