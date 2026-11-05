import "./main.global.css";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "./shared/Header";
import { Layout } from "./shared/Layout/Layout";
import { Content } from "./shared/Content";
import { CardLists } from "./shared/CardLists";
import { MyList, IItem } from "./Example/GenericList";
import {
  assignId,
  generateId,
  generateRandomString,
} from "./utils/react/generateRandomIndex";
import { merge } from "./utils/js/merge";
import { GenericList } from "./shared/GenericList";

//выносится из компоенента, тк в компоненет при каждом ренедре id будет пересчитываться
const LIST = [{ text: "some" }, { text: "oversum" }, { text: "overs" }].map(
  generateId,
);

function AppCoponent() {
  const [list, setList] = useState(LIST);
  const handleItemDelete = (id: string) => {
    //через setList текущий список фильтруем где id !=== id
    setList(list.filter((item) => item.id !== id));
  };

  const handleItemAdd = () => {
    setList(list.concat(generateId({ text: generateRandomString() })));
  };
  return (
    <Layout>
      <Header />
      <Content>
        <CardLists />

        <button onClick={handleItemAdd}>add</button>
        <GenericList
          list={list.map(
            merge({
              onClick: handleItemDelete,
            }),
          )}
        />
      </Content>
    </Layout>
  );
}

export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
