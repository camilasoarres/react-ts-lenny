// Libs
import React from "react";
import { useUser } from "@hooks/users/useUser";

const Dashboard = () => {
  const { user, logout } = useUser();

  return (
    <div className="container">
      <header className="header">
        <p className="paragraph">header</p>
        <span>{user?.email}</span>
        <button className="button" onClick={() => logout()}>sair</button>
      </header>
      <div className="box">
        <aside className="sidebar">
          <p className="paragraph">sidebar</p>
        </aside>
        <div className="content">
          <h1>Boas vindas, {user?.name}!</h1>
        </div>
      </div>
      <style jsx>{`
        .container {
          height: 100vh;
          overflow-y: hidden;
          color: #009aab;
        }
        .header {
          display: flex;
          justify-content: space-around;
          align-items: center;
          width: 100%;
          background: #81a6b3;
          color: #fff;
          height: 5rem;
        }
        .paragraph {
          text-align: center;
          font: 600 3rem arial;
        }
        .button {
          font-size: 1.2rem;
          background: transparent;
          color: #fff;
          border: none;
          outline: none;
          cursor: pointer;
        }
        .box {
          display: flex;
          height: 100%;
        }
        .sidebar {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 300px;
          border-right: solid 5px #009aab;
          height: 100%;
        }
        .content {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
