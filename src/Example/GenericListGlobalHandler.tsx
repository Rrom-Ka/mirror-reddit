import React from "react";

export interface IItem {
  value: string;
  id: string;
}

export interface IMyListProps {
  list: IItem[];
  onClick: (id: string) => void;
}

export function MyList({ list, onClick }: IMyListProps) {
  return (
    <ul>
      {list.map((item) => (
        <li onClick={() => onClick(item.id)} key={item.id}>
          {item.value}
        </li>
      ))}
    </ul>
  );
}
