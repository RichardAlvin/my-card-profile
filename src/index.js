import React from 'react';
import ReactDOM from 'react-dom';
import Info from './components/Info';
import About from './components/About';
import Interests from './components/Interests';
import Footer from './components/Footer';
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <center>
    <div class="card">
    <Info />
    <About />
    <Interests />
    <Footer />
    </div>
    </center>
  </React.StrictMode>,
  document.getElementById('root')
);
