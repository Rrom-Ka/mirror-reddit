import{hot} from "react-hot-loader/root"//2.3 доп подключение react-hot-loader
import * as React from 'react'
//2.3 доп подключение react-hot-loader
function HeaderComponent(){
    return(
        <>
        <h1>Reddit for our own 33</h1>
        <p>EHFF - УРР</p>
        </>
    )
}
// export function Header(){
//     return(
//         <h1>Reddit for our own 88</h1>
//     )
// }

export const Header=hot(HeaderComponent)//2.3 доп подключение react-hot-loader