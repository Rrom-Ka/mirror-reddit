import React from "react";
import style from "./Header.css";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { ThreadTitle } from "./ThreadTitle";
import { SortBlock } from "./SortBlock";

export function Header() {
  return (
    <header className={style.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}
