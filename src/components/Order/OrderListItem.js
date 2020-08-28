import React from 'react';
import styled from 'styled-components';
import trashImg from '../../img/trash.svg';

const OrderItemStyled = styled.li`
    display: flex;
    margin: 15px 0;

`;

const TrashButton = styled.button`
    width: 24px;
    height: 24px;
    border-color: transparent;
    background-color: transparent;
    background-image: url(${trashImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    cursor: pointer;


`;

const ItemName = styled.span`
    flex-grow: 1;
`;

const ItemCount = styled.span`
`;

const ItemPrice = styled.span`
    margin-left: 2px;
    margin-right: 10px;
    min-width: 65px;
    text-align: right;
`;

const OrderListItem = () => {
    return (
        <OrderItemStyled>
            <ItemName>JS Burger</ItemName>
            <ItemCount>2</ItemCount>
            <ItemPrice>750 Р</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;