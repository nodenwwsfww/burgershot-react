import React, { Component } from 'react';
import './App.css';
// Components
import Header from './components/Header';
import Main from './components/Main';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Features/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}
