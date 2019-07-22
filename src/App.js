import React from 'react';
import Header from './component/Header';
import Section1 from './component/Section1';
import Section2 from './component/Section2';
import Section3 from './component/Section3';
import Section4 from './component/Section4';
import Section8 from './component/Section8';
import Footer from './component/Footer';
import {  Element } from 'react-scroll';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Section1 />
      <Element name="explore" className="element" >
        <Section2 />
      </Element>
      <Section3 />
      <Element name="product" className="element" >
        <Section4 />
      </Element>
      <Element name="contact" className="element" >
        <Section8 />
      </Element>
      <Element name="footer" className="element" >
        <Footer />
      </Element>
    </div>
  );
}

export default App;
