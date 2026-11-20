import "./main.global.css";
import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import { Header } from "../../shared/Header";
import { Layout } from "../../shared/Layout/Layout";
import { Content } from "../../shared/Content";
import { CardLists } from "../../shared/CardLists";
import { MyList, IItem } from "../GenericList";
import {
  assignId,
  generateId,
  generateRandomString,
} from "../../utils/react/generateRandomIndex";
import { merge } from "../../utils/js/merge";
//выносится из компоенента, тк в компоненет при каждом ренедре id будет пересчитываться
// const LIST: IItem[] = [
const LIST = [{ value: "some" }, { value: "oversum" }, { value: "overs" }].map(
  generateId,
);
// ].map((item) => ({ ...item, id: generateRandomString() }));
console.log(LIST);

function AppCoponent() {
  const [list, setList] = useState(LIST);
  const handleItemDelete = (id: string) => {
    //через setList текущий список фильтруем где id !=== id
    setList(list.filter((item) => item.id !== id));
  };

  const handleItemAdd = () => {
    setList(list.concat(generateId({ value: generateRandomString() })));
  };
  return (
    <Layout>
      <Header token={"token"} />
      <Content>
        <CardLists />
        {/* Global */}
        {/* <MyList
          list={list.map((item) => ({
            ...item,
            onClick: () => {
              console.log(item.id);
            },
          }))}
        /> */}
        {/* not ID */}
        <button onClick={handleItemAdd}>add</button>
        <MyList
          list={list.map(
            merge({
              onClick: handleItemDelete,
            }),
          )}
        />
        {/* this ID */}
        {/* <MyList
          list={list.map((item) =>
            merge(item)({
              onClick: () => {
                console.log(item.id);
              },
            }),
          )}
        /> */}
      </Content>
    </Layout>
  );
}

// export const App =
//   typeof window !== "undefined" && (module as any).hot
//     ? hot(AppCoponent)
//     : AppCoponent;
// export const App = hot(AppCoponent); //2.3 доп подключение react-hot-loader
export const App = hot(() => <AppCoponent />); //2.3 доп подключение react-hot-loader

// export const App = AppCoponent;
