import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Form from './components/Form';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="register">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
