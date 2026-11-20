import Axios from "axios";
import { useEffect, useState } from "react";
//хук для получения данных порльзователя используя токен

interface IUUserData {
  name?: string;
  iconImg?: string;
}

export function useUserData(token:string){
    const [data, setData] = useState<IUUserData>({});
  useEffect(() => {
    Axios
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

  return [data]
}