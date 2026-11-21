import React, { Children } from "react";
import { usePostsData } from "../utils/hooks/usePostsData";

export interface IPostContextData {
  author?: string;
  created_utc?: Date;
  id?: string;
  num_comments?: number;
  score?: number;
  selftext?: string;
  icon_img?: string;
  subreddit?: string;
  thumbnail?: string;
  title?: string;
  url?: string;
}

export interface IPostsContextData {
  data?: IPostContextData[];
}
export const postContext = React.createContext<IPostsContextData>({});

export function PostContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [data] = usePostsData();
  return <postContext.Provider value={data}>{children}</postContext.Provider>;
}
