import './App.css';
import Home from './Pages/Home';
import Equipment from './Pages/Equipment';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/equipment' element={<Equipment />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
