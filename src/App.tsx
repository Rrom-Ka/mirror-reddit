import "./main.global.css";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";
import { useToken } from "./utils/hooks/useToken";
import { tokenContext } from "./context/tokencontext";
import { userContext, UserContextProvider } from "./context/userContext";
import { PostContextProvider } from "./context/postContext";
import { commentConext } from "./context/commentContext";
function AppCoponent() {
  const [token] = useToken();
  //для сохранения состояния textarea
  const [commentValue, setCommentValue] = useState("");
  const CommentProvider = commentConext.Provider;
  return (
    <CommentProvider value={{ value: commentValue, onChange: setCommentValue }}>
      <tokenContext.Provider value={token}>
        <UserContextProvider>
          <PostContextProvider>
            <Layout>
              <Header token={token} />
              <Content>
                <CardLists />
              </Content>
            </Layout>
          </PostContextProvider>
        </UserContextProvider>
      </tokenContext.Provider>
    </CommentProvider>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
