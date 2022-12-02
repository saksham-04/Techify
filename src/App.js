
import './App.css';
import HeaderSlide from './Components/HeaderSlide';
import Navbar from './Components/Navbar';
import nelson from './nelson.jpg'
import {
  browserRouter as Router,
  route,
  routes,
  browserRouter
} from "react-router-dom";
import About from './Components/About';

function App() {
  return (
    <div className="App">
      <Navbar title='Techify' />
      <img src={nelson} height={200} width={1300} alt="logo" />
      <div className='container'>
        <HeaderSlide />
      </div>
      <div className='container my-3'>
        <About />
              </div>
    </div>
  );
}

export default App;
