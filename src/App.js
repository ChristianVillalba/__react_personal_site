import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
// Pages
import Home from "./components/Pages/Home";
import About from './components/Pages/About';
import Skills from './components/Pages/Skills';
import Portfolio from './components/Pages/Portfolio';
import Certifications from "./components/Pages/Certifications";
import Interests from "./components/Pages/Interests";

class App extends Component {
  render() {
    return (
      <Router >
        <Navbar />
        <div className="container-fluid p-0">
        <Routes >
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/certifications" element={<Certifications />}></Route>
        <Route path="/interests" element={<Interests />}></Route>  
      </Routes>
        </div>
      </Router>
    )
  }
}

export default App;
