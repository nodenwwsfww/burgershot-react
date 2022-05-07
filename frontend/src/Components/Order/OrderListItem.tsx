import React, { FC } from 'react';
import styled from 'styled-components';
import trashImg from '../../img/trash.svg';
import {IOrder} from '../../model';

import toCurrency from '../../utils/toCurrency';

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
interface OrderListItemProps {
  order:IOrder
}

const OrderListItem: FC<OrderListItemProps> = ({order}) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <ItemCount>{order.count}</ItemCount>
            <ItemPrice>{toCurrency(order.totalPrice)}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;