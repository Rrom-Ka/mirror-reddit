import Axios from "axios";
import { useEffect, useState } from "react";


export function usePostsData(){
    const [post, setPost] = useState({});
    useEffect(()=>{
        Axios
        // .get("https://www.reddit.com/r/popular/best.json?sr_detail=true")
        .get("/api/posts")
        .then((resp) => {
        const children = resp.data?.data?.children || [];

        // Превращаем массив Reddit ({ data: { ... } }) в плоский массив IPostContextData[]
        const formattedPosts = children.map((item: any) => ({
          ...item.data,
          // Достаем icon_img из вложенного sr_detail на верхний уровень, как в вашем интерфейсе IPostContextData
          icon_img: item.data?.sr_detail?.icon_img || "",
        }));

        setPost({ data: formattedPosts });
      })
        // .then((resp)=>{
        //     const postData=resp.data
        //     // console.log(postData)
        //     setPost(resp.data?.data?.children || [])
        // })
        .catch(console.log)
        
    },[])

    return [post]
}