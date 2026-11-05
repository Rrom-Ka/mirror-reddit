// import "./main.global.css";
// import React, { useState } from "react";
// import { hot } from "react-hot-loader/root";
// import { Header } from "./shared/Header";
// import { Layout } from "./shared/Layout/Layout";
// import { Content } from "./shared/Content";
// import { CardLists } from "./shared/CardLists";
// import { getValue } from "./Example/FunctionalExample";
// import { MyHooksUseEffect } from "./Example/HooksExample";
// import { MyHooksUseMemo } from "./Example/HooksExampleUseMemo";

// function AppCoponent() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [title, setTitle] = useState("");
//   return (
//     <Layout>
//       <Header />
//       <Content>
//         <CardLists />
//         <button onClick={() => setIsVisible(!isVisible)}>Поменяй меня</button>
//         <input type="text" onChange={getValue(setTitle)} />
//         {isVisible && <MyHooksUseMemo title={title} id="11" />}
//       </Content>
//     </Layout>
//   );
// }

// // export const App =
// //   typeof window !== "undefined" && (module as any).hot
// //     ? hot(AppCoponent)
// //     : AppCoponent;
// export const App = hot(AppCoponent); //2.3 доп подключение react-hot-loader

// // export const App = AppCoponent;
