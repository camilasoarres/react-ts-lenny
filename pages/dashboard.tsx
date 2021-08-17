// Libs
import React, { useEffect } from "react";
import styled from "styled-components";
import { useUser } from "../utils/hooks";
import Router from "next/router";

const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
  color: #009aab;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  background: #81a6b3;
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
  border-right: solid 5px #009aab;
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
  const { logout } = useUser();

  useEffect(() => {
    const user = process.browser && localStorage.getItem('x-app-user');
    if (!user) {
      Router.push("/login");
    }
  }, []);

  const user = process.browser && JSON.parse(localStorage.getItem('x-app-user'));

  return (
    <Container>
      <Header>
        <p>header</p>
        <span>{user?.email}</span>
        <button onClick={() => logout()}>sair</button>
      </Header>
      <Box>
        <Sidebar>
          <p>sidebar</p>
        </Sidebar>
        <Content>
          <h1>Boas vindas, {user?.name}!</h1>
        </Content>
      </Box>
    </Container>
  );
};

export default Dashboard;
