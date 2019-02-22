import React from 'react';
import styled from 'styled-components';

const HeaderStyle = styled.div`
  display: flex; 
  align-items: center;
  width: 75%;
  height: 100px;
  margin: 0 2% 1% 2%;

    // Lambda Times Title
    h1 {
      color: black;
      text-align: center;
      font-size: 75px;
      font-family: Times New Roman;
    };
`;

const Date = styled.span`
  margin:  0 20% 0 2%;
`;


const Temp = styled.span`
  text-align: right;
  margin: 0 0 0 28%;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <Date>SMARCH 32, 2018</Date>
      <h1>Lambda Times</h1>
      <Temp>98°</Temp>
    </HeaderStyle>
  )
}

export default Header;


