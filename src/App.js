import React, { Component } from 'react';
import GlobalStyle from './Components/GlobalStyle';

import NavBar from './Components/NavBar';
import Menu from './Components/Menu';

export default class App extends Component {
  render() {
    return (
      <>
        <GlobalStyle/>
        <NavBar/>
        <Menu/>  
      </>
    );
  }
}
