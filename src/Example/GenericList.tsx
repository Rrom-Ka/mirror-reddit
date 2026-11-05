import React from "react";
//onClick в item глабльно в др файле
export interface IItem {
  value: string;
  id: string;
  onClick: (id: string) => void;
}

export interface IMyListProps {
  list: IItem[];
}

export function MyList({ list }: IMyListProps) {
  return (
    <ul>
      {list.map((item) => (
        <li onClick={() => item.onClick(item.id)} key={item.id}>
          {item.value}
        </li>
      ))}
    </ul>
  );
}
