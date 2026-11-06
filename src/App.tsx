import "./main.global.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";

function AppCoponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardLists />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
