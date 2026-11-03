import React from "react";

//Ф-Я WITHKEY
export function withKey(key?: string) {
  return <E, T extends React.ComponentType<E>>(component: T) =>
    //   return <E extends {}>(component: React.ComponentType<E>) =>
    (props: E, index: number) =>
      React.createElement(
        component,
        { ...props, key: key ? (props[key as keyof E] as any) : index },
        // {...props, key: key ? props[key as keyof E]:index},
        [],
      );
}
