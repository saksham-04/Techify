
import './App.css';
 import HeaderSlide from './Components/HeaderSlide'
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
 import About from './Components/About';
 import nelson from './nelson.jpg';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Footer from './Components/Footer';
import Career from './Components/Career';
import Course from './Components/Course';

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='App-header'>
          <Navbar title="Techify" />



          <div className="App">
            <Routes>

              <Route path="Career" element={<Career />} />
              <Route path="Course" element={<Course />} />
              <Route path="/" element={<TextForm />} />
             
            </Routes>
            

                       

            
          </div>
          <Footer />
          {/* <Footer2/> */}


        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
