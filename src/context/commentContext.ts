import React from "react";

type CommentConextType={
    value:string;
    onChange:(value:string)=>void
}

export const commentConext = React.createContext<CommentConextType>({
    value:'',
    onChange:()=>{}
});