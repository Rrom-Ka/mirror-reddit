import Axios from "axios";
import { useEffect, useState } from "react";


export function usePostsData(){
    const [post, setPost] = useState({});
    useEffect(()=>{
        Axios
        // .get("https://www.reddit.com/r/popular/best.json?sr_detail=true")
        .get("/api/posts")
        .then((resp)=>{
            const postData=resp.data
            console.log(postData)
            setPost(postData)
        })
        .catch(console.log)
        
    },[])

    return [post]
}