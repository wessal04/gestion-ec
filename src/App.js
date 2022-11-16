
import './App.css';
import UncontrolledExample from './slide/slide';
import CollapsibleExample from './navbar/navbar';
import Article from './card/card';
import Map from './maps/map';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact/Contact';
import Home from './component/Home/Home';
import About from './component/About/About';



function App() {
  return (
 
<div className="App">


<Routes>
<Route path="/" element={<Home />} />
<Route path="/About" element={<About />} />
<Route path="/Contact" element={<Contact />} />
</Routes>
    </div>
   
  );
}
export default App;
