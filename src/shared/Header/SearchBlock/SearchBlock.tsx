import React, { useContext } from "react";
import style from "./SearchBlock.css";
import { UserBlock } from "./UserBlock.tsx";
import { useUserData } from "../../../utils/hooks/useUserData";
import { userContext } from "../../../context/userContext";

export function SearchBlock() {
  const userData = useContext(userContext);
  return (
    <div className={style.searchBlock}>
      <UserBlock avatarSrc={userData.iconImg} username={userData.name} />
    </div>
  );
}
