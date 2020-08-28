import React from 'react';
import styled from 'styled-components';
import ButtonCheckout from '../ButtonCheckout';
import OrderListItem from './OrderListItem';

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
  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  display: flex;
  min-width: 65px;
  margin-left: 20px;
  text-align: right;
`;


const Order = ({ orders }) => {
  return (
    <OrderStyled>
      <OrderTitle>Ваш заказ</OrderTitle>
      <OrderContent>
        <OrderList></OrderList>
        <OrderListItem/>
        <OrderListItem/>
        <OrderListItem/>

      </OrderContent>
      <Total>
        <span>Итого</span>
        <span>5</span>
        <TotalPrice>850</TotalPrice>
      </Total>
      <ButtonCheckout>Оформить</ButtonCheckout>
    </OrderStyled>
  );
};

export default Order;