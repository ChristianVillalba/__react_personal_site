import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/Pages/About';
import Certifications from "./components/Pages/Certifications";
import Interests from "./components/Pages/Interests";
import Skills from './components/Pages/Skills';

class App extends Component {
  render() {
    return (
      <Router >
        <Navbar />
        <div className="container-fluid p-0">
        <Routes >
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/interests" element={<Interests />}></Route>  
        <Route path="/certifications" element={<Certifications />}></Route>
      </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
