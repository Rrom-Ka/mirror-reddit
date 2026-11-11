import React from "react";

//Ф-Я WITHKEY
//автоматически добавляет React-атрибут key компонентам при их рендере в списках.
export function withKey(key?: string) {
  //не совсем понятна как правильно типизировать E
  return <E extends {}, T extends React.ComponentType<E>>(component: T) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: key ? (props[key as keyof E] as any) : index }, // думаю что  as any - костиль
        [],
      );
}

// //Ф-Я WITHKEY
// //автоматически добавляет React-атрибут key компонентам при их рендере в списках.
// export function withKey(key?: string) {
//   // return <E extends {}, T extends React.ComponentType<E>>(component: T) =>
//   // return <E, T extends React.FunctionComponent<E>>(component: T) =>
//   return <E extends {}>(component: React.ComponentType<E>) =>
//     (props: E, index: number) =>
//       React.createElement(
//         component,
//         // { ...props, key: key ? props[key] : index },
//         { ...props, key: key ? (props[key as keyof E] as any) : index }, //ругается
//         // { ...props, key: key ? props[key as keyof E] : index },
//         [],
//       );
// }
