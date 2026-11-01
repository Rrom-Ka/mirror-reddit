// Декларация для CSS-модулей (исправленный экспорт)
declare module '*.css' {
    const styles:{[key:string]:string};
    export  = styles;
}

// // Декларация для картинок (чтобы исчезла ошибка про grishin-avatar.jpg)
// declare module '*.jpg' {
//   const src: string;
//   export default src;
// }

// declare module '*.jpeg' {
//   const src: string;
//   export default src;
// }

// declare module '*.png' {
//   const src: string;
//   export default src;
// }