import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import ListItems from './ListItems';
import BannerImg from './Banner';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;
const SectionMenu = styled.section`
  padding: 15px;
`;
const Menu = ({setOpenItem}) => (
  <MenuStyled>

    <BannerImg/>

    <SectionMenu>
      <h2>Бургер</h2>
      <ListItems 
        itemList={dbMenu.burger} 
        setOpenItem={setOpenItem}
      />
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItems 
        itemList={dbMenu.other} 
        setOpenItem={setOpenItem}
      />
    </SectionMenu>
    
  </MenuStyled>
);

export default Menu;