import React from 'react';
import styled from 'styled-components';
import trashImg from '../../img/trash.svg';

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;
const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;
const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background: transparent url(${trashImg}) no-repeat center/cover;
  cursor: pointer;
`;

const ItemCount = styled.span`
`;

const OrderListItem = ({order}) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemCount>2</ItemCount>
            <ItemPrice>{order.price.toLocaleString('ru-RU', {style: 'currency', currency: 'rub'})}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;