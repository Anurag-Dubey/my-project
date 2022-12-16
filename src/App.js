import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from "./component/about";
import Contact from "./component/contact";
import Footer from "./component/footer";
import Navbar from "./component/navbar";
import Gallery from "./component/gallery";
import Home from "./component/Home";
import Services from "./component/Services";
import Form from "./component/form";


function App() {
  return (
    <>
    <HashRouter>
      <Contact/>
      <Navbar/>
        <Routes>
        <Route path='/' exact element = {<Home/>} /> 
        <Route path='/about' exact element = {<About/>} /> 
        <Route path='/services' exact element= {<Services/>} /> 
        <Route path='/gallery' exact element= {<Gallery />} /> 
        <Route path='/form' exact element= {<Form />} /> 
      </Routes>
      <Footer/>
      
      </HashRouter>
    </>
  );
}

export default App;

