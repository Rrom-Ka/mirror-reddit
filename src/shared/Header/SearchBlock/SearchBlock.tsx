import React from "react";
import style from "./SearchBlock.css";
import { UserBlock } from "./UserBlock.tsx";

export function SearchBlock() {
  return (
    <div className={style.searchBlock}>
      <UserBlock />
    </div>
  );
}
