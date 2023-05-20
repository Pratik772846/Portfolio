import {Routes, Route} from 'react-router-dom';
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx';
import Projects from "./components/Projects/Projects.jsx";
import Contact from "./components/Contact/Contact.jsx";

function App() {
  return (
    <div >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path ="/projects" element={<Projects/>} />
          <Route path = "/contact" element ={<Contact/>} />
        </Routes>
    </div>
    
  );
}

export default App;
