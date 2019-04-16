import React from 'react';
import styled from 'styled-components';

// whole container
const ContainerStyle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  background-color: black;
`;

// content container
const Container = styled.div`
  width: 100%;
  display: flex;
  color: white;
  padding: 0 20px 0 20px;
`;

// topic and search
const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  font-size: 14px;
  span {
    font-weight: bold;
    margin: 0 20% 0 0;
  }
`;

// news categories
const ContainerCenter = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
  justify-content: center;
  margin: 0 12% 0 0;
  font-size: 14px; 
  span {
    margin: 0 6% 0 0;
  }
  :last-child { margin-right: 0;};
`;

// login
const ContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
`;


const TopBar = () => {
  return (
    <ContainerStyle>
      <Container>
        <ContainerLeft>
          <span>TOPICS</span><span>SEARCH</span>
        </ContainerLeft>
        <ContainerCenter>
          <span>GENERAL</span><span>BROWNBAG</span><span>RANDOM</span><span>MUSIC</span><span>ANNOUNCEMENTS</span>
        </ContainerCenter>
        <ContainerRight>
          <span>LOG IN</span>
        </ContainerRight>
      </Container>
    </ContainerStyle>
  )
}

export default TopBar;