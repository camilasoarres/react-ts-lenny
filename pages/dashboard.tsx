// Libs
import React from "react";
import styled from "styled-components";
import Link from 'next/link';

const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
  color: #009AAB;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #81A6B3;
  color: #fff;
  height: 5rem;

  > p {
    text-align: center;
    font: 600 3rem arial;
  }

  > button {
    font-size: 1.2rem;
    background: transparent;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
  }
`;

const Box = styled.div`
  display: flex;
  height: 100%;
`;

const Sidebar = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-right: solid 5px #009AAB;
  height: 100%;

  > p {
    text-align: center;
    font: 600 5rem arial;
    transform: rotate(-90deg);
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  > p {
    text-align: center;
    font: 600 5rem arial;
  }
`;

const Dashboard = () => {
  return (
    <Container>
      <Header>
        <p>header</p>
        <Link href={'/'}>
          <button>sair</button>
        </Link>
      </Header>
      <Box>
        <Sidebar>
          <p>sidebar</p>
        </Sidebar>
        <Content>
          <p>conteúdo</p>
        </Content>
      </Box>
    </Container>
  );
};

export default Dashboard;
