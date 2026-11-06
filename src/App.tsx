import "./main.global.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";
import { Dropdown } from "./shared/Dropdown";

function AppCoponent() {
  return (
    <Layout>
      <Header />
      <Content>
        <CardLists />
        <div style={{ padding: 60 }}>
          <Dropdown
            onClose={() => console.log("closed")}
            onOpen={() => console.log("opned")}
            isOpen={false}
            button={<button>test</button>}
          >
            <CardLists />
            <ul>
              <li>1</li>
            </ul>
          </Dropdown>
        </div>
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
