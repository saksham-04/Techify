
import './App.css';
 
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
 
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";

import Footer from './Components/Footer';
import Career from './Components/Career';
import Course from './Components/Course';
import News from './Components/News';

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
              <Route path="/News" element={<News />} />
             
            </Routes>
            

                       

            
          </div>
          <Footer />
          


        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
