import React from 'react';
import styled from 'styled-components';
import banner from '../../img/banner.svg';

const BannerStyled = styled.div`
  background: url(${banner}) no-repeat center/cover;
  height: 210px;
  width: 100%;
`;


const BannerImg = () => <BannerStyled></BannerStyled>;
export default BannerImg;