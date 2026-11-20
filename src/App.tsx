import "./main.global.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";
import { useToken } from "./utils/hooks/useToken";
import { tokenContext } from "./context/tokencontext";

function AppCoponent() {
  const [token] = useToken();
  const { Provider } = tokenContext;
  return (
    <Provider value={token}>
      <Layout>
        <Header token={token} />
        <Content>
          <CardLists />
        </Content>
      </Layout>
    </Provider>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
