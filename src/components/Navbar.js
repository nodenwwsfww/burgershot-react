import React from 'react';
import styled from 'styled-components';
import logoImg from '../img/logo.svg';
import signImg from '../img/sign.svg';

const NavBarStyled = styled.header`
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
const ImgSign= styled.img`
  width: 32px;
`;

const LogIn = styled.button`
  display: flex;
  flex-direction: column;  
  font-size: 16px;
  line-height: 19px;
  align-items: center;
  color: white;
  background-color: transparent;
  border: none;
`;

const NavBar = () => (
  <NavBarStyled>
    <Logo>
      <ImgLogo src={logoImg} alt="logo" />    
      <H1>BurgerShot</H1>
    </Logo>
    <LogIn>
      <ImgSign src={signImg} alt="login" />
      <p>войти</p>
    </LogIn>
  </NavBarStyled>
);

export default NavBar;