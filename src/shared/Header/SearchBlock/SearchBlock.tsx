import React from "react";
import style from "./SearchBlock.css";
import { UserBlock } from "./UserBlock.tsx";
import { useUserData } from "../../../utils/hooks/useUserData";

export function SearchBlock() {
  const [data] = useUserData();
  return (
    <div className={style.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
