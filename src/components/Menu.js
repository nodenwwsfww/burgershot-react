import React from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import ListItems from './ListItems';
import banner from '../img/banner.svg';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;
const SectionMenu = styled.section`
  padding: 15px;
`;
const BannerStyled = styled.div`
  background: url(${banner}) no-repeat center/cover;
  height: 210px;
  width: 100%;
`;
const Menu = () => (
  <MenuStyled>

    <BannerStyled>    
    </BannerStyled>

    <SectionMenu>
      <h2>Бургер</h2>
      <ListItems itemList={dbMenu.burger}/>
    </SectionMenu>

    <SectionMenu>
      <h2>Закуски / Напитки</h2>
      <ListItems itemList={dbMenu.other}/>
    </SectionMenu>
    
  </MenuStyled>
);

export default Menu;