import React from 'react';

import GlobalStyle from './components/Style/GlobalStyle';

import NavBar from './components/NavBar';
import Menu from './components/Menu';
import ModalItem from './components/ModalItem';
import Order from './components/Order';

import useOpenItem from './hooks/useOpenItem';
import useCart from './hooks/useCart';

const App = () => {
  const openItem = useOpenItem();
  const cart = useCart();

  return (
    <>
      <GlobalStyle/>
      
      <NavBar/>
      <Order {...cart}/>
      <Menu {...openItem}/>
      {(openItem.openItem !== null) ? 
        <ModalItem openItem = {openItem.openItem} setOpenItem={openItem.setOpenItem} {...cart}/> : null}
    </>
  );
};

export default App;
