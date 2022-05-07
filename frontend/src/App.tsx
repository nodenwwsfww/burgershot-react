import React from 'react';

import GlobalStyle from './Style/GlobalStyle';

import NavBar from './Components/NavBar';
import Menu from './Components/Menu';
import ModalItem from './Components/ModalItem';
import Order from './Components/Order';

import useOpenItem from './Hooks/useOpenItem';
import useCart from './Hooks/useCart';

const App = () => {
  const openItem = useOpenItem();
  const cart = useCart();

  return (
    <>
      <GlobalStyle/>
      
      <NavBar/>
      <Order {...cart}/>
      <Menu {...openItem}/>
      {openItem.openItem ? <ModalItem {...openItem} {...cart}/> : null}
    </>
  );
};

export default App;
