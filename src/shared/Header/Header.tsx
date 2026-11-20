import React from "react";
import style from "./Header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { ThreadTitle } from "./ThreadTitle";
import { SortBlock } from "./SortBlock";

interface IHeaderProps {
  token: string;
}

export function Header({ token }: IHeaderProps) {
  return (
    <header className={style.header}>
      <SearchBlock token={token} />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
