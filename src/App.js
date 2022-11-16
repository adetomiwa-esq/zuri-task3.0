import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Place from './Pages/Place';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/zuri-task3.0' element={<Home />}/>
          <Route path='/place' element={<Place />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;