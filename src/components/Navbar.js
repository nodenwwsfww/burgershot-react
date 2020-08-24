import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import userAuthImg from '../img/user-auth.svg'

const NavbarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    height: 80px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;

`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;
const ImgLogo = styled.img`
    width: 50px;
`;

const Auth = styled.div`
    display: flex;
    flex-direction: column;  
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    color: white;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;

const ImgUser = styled.img`
    margin-top: 15px;
`;

export const NavBar = () => (
    <NavbarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt="logo"/>
            <H1>BurgerShot</H1>
        </Logo>

        <Auth>
            <ImgUser src={userAuthImg} alt="logo-user"/>
            <p>Войти</p>
        </Auth>
    </NavbarStyled>
);