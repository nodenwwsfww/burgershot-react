import React from 'react';
import GlobalStyle from './Components/Style/GlobalStyle';

import NavBar from './Components/NavBar';
import Menu from './Components/Menu';
import ModalItem from './Components/ModalItem';
import Order from './Components/Order';

import useOpenItem from './Components/Hooks/useOpenItem';
import useCart from './Components/Hooks/useCart';

function App() {

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
}

export default App;