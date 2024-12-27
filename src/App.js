// App.js
import './App.css';
import Nav from './components/nav';
import Cont from './components/cont';
import Act from './components/act';
import Try from './components/try';
import Foot from './components/footer';
import Kids from "./components/kids"; // Default import of Kids
import Spell from "./components/spell";
import Miss from "./components/miss";
import Color from "./components/color";
import Odd from "./components/odd";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={
          <>
            <Cont />
            <Act />
            <Try />
            <Foot />
          </>
        } />
        <Route path="/kids" element={<Kids />} /> {/* Define the /kids route */}
        <Route path="/spell" element={<Spell />} /> 
        <Route path="/miss" element={<Miss />}/>
        <Route path="/color" element={<Color/>}/>
        <Route path="/odd" element={<Odd/>}/>

      </Routes>
    </Router>
  );
}

export default App;
