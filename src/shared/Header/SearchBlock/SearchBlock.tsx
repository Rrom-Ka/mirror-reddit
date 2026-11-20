import React from "react";
import style from "./SearchBlock.css";
import { UserBlock } from "./UserBlock.tsx";
import { useUserData } from "../../../utils/hooks/useUserData";

interface ISearchBlockProps {
  token: string;
}

export function SearchBlock({ token }: ISearchBlockProps) {
  const [data] = useUserData(token);
  return (
    <div className={style.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
