import { hot } from "react-hot-loader/root"; //2.3 доп подключение react-hot-loader
import * as React from "react";
//для использования css файлами настройки в css.d.ts
//2.3 доп подключение react-hot-loader
function HeaderComponent() {
  return (
    // <Layout>
    <Header />
    /* <Content/> */
    // </Layout>
  );
}
// export function Header(){
//     return(
//         <h1>Reddit for our own 88</h1>
//     )
// }

export const Header = hot(HeaderComponent); //2.3 доп подключение react-hot-loader
