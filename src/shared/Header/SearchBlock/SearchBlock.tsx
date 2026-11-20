import React, { useEffect, useState } from "react";
import style from "./SearchBlock.css";
import { UserBlock } from "./UserBlock.tsx";
import axios from "axios";

interface ISearchBlockProps {
  token: string;
}

interface IUUserData {
  name?: string;
  iconImg?: string;
}
export function SearchBlock({ token }: ISearchBlockProps) {
  const [data, setData] = useState<IUUserData>({});
  useEffect(() => {
    axios
      .get("https://api.github.com/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((resp) => {
        const userData = resp.data;
        console.log("userData", userData);
        setData({
          name: userData.name || userData.login,
          iconImg: userData.avatar_url,
        });
      })
      .catch(console.log);
  }, [token]);
  return (
    <div className={style.searchBlock}>
      <UserBlock avatarSrc={data.iconImg} username={data.name} />
    </div>
  );
}
