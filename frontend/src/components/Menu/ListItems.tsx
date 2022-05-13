import React, { Dispatch, FC, SetStateAction } from 'react';
import styled from 'styled-components';
import toCurrency from '../../utils/toCurrency';
import {IMenuItem} from '../../model';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

interface ItemProps {
  key: number,
  img: string,
  onClick: () => void,
}

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background: ${(props: ItemProps) => `url(${props.img})` } center/cover;
  margin-top: 30px;
  margin-right: 30px;
  padding: 15px;
  color: white;
  z-index: 1;
  font-size: 30px;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: black;
    opacity: 30%;
    z-index: -1;    
  }
  &:hover {
    cursor: pointer;
    box-shadow: 0 0 20px 2px #299B01;
  }
`;
interface ListItemsProps {
  itemList: IMenuItem[],
  setOpenItem: Dispatch<SetStateAction<IMenuItem | null>>,
}
const ListItems: FC<ListItemsProps> = ({itemList, setOpenItem}) => (
  <List>
    {itemList.map((item: IMenuItem) => (
      <Item 
        key={item.id} 
        img={item.img}
        onClick={() => setOpenItem(item)}
      >
        <p>{item.name}</p>
        <p>{toCurrency(item.price)}</p>
      </Item>
    ))}
  </List>
);

export default ListItems;