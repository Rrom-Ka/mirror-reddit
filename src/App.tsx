import "./main.global.css";
import React from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";
import { useToken } from "./utils/hooks/useToken";
import { tokenContext } from "./context/tokencontext";
import { userContext, UserContextProvider } from "./context/userContext";

function AppCoponent() {
  const [token] = useToken();
  return (
    <tokenContext.Provider value={token}>
      <UserContextProvider>
        <Layout>
          <Header token={token} />
          <Content>
            <CardLists />
          </Content>
        </Layout>
      </UserContextProvider>
    </tokenContext.Provider>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
