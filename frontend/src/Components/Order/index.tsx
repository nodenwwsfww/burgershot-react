import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from '../../Style/ButtonCheckout';
import OrderListItem from './OrderListItem';

import toCurrency from '../../Utils/toCurrency';

import { IOrder } from '../../model';

const OrderStyled = styled.section`
  position: fixed;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 3px 4px 5px rgba(0, 0, 0, 0.25);
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const OrderTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;
const OrderList = styled.ul`
`;
const Total = styled.div`
  display: flex;
  margin-bottom: 30px;
  & span:first-child{
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px;
`;

const EmptyList = styled.p`
  text-align: center;
`;


const Order = ({ cart : Array<IOrder>, setCart: R }) => {

  function computeTotalCartPrice(cart) {
    if (!cart.length) return 0;
    return cart.reduce((total, order) => total += +order.totalPrice, 0);
  }


  function computeTotalCount(cart) {
    if (!cart.length) return 0;
    return cart.reduce((total, order) => total += +order.count, 0);
  }

  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        <OrderList>
          {cart.length ? cart.map(order => <OrderListItem order={order}/>) : <EmptyList>Список заказов пуст</EmptyList>}
        </OrderList>

      </OrderContent>
      <Total>
        <span>{computeTotalCount(cart)}</span>
        <span>{computeTotalCartPrice}</span>
        <TotalPrice>{toCurrency(computeTotalCartPrice(cart))}</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
};

export default Order;