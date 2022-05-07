import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import dbMenu from './DBMenu';
import ListItems from './ListItems';
import BannerImg from './Banner';
import { IMenuItem } from '../../model';

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;
const SectionMenu = styled.section`
  padding: 15px;
`;

interface MenuProps {
  openItem: IMenuItem | null,
  setOpenItem: Dispatch<SetStateAction<IMenuItem | null>>,
}

const Menu: FC<MenuProps>= ({setOpenItem}) => (
  <MenuStyled>

    <BannerImg/>

    <SectionMenu>
      <h2>Бургер</h2>
      <ListItems 
        itemList={dbMenu.burgers} 
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