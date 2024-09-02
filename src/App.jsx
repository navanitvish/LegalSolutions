
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import CustomPointer from './CustomPointer'; // Import the CustomPointer component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';


// Import other components...

function App() {
  return (
    <Router>
      <NavBar />
      <CustomPointer /> {/* Add the CustomPointer component */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        {/* Other routes */}
      </Routes>

      <Footer/>
    </Router>
  );
}

export default App;
