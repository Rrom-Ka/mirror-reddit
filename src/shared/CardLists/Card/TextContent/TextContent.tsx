import React, { useEffect } from "react";
import styles from "./TextContent.css";
import { usePostsData } from "../../../../utils/hooks/usePostsData";
import { IPostContextData } from "../../../../context/postContext";
import { Title } from "./Title";

// export function TextContent(postData: IPostContextData) {
export function TextContent({
  author,
  created_utc,
  icon_img,
  num_comments,
  score,
  selftext,
  subreddit,
  thumbnail,
  title,
  url,
}: IPostContextData) {
  return (
    <div className={styles.textConent}>
      <div className={styles.metaData}>
        <div className={styles.userLik}>
          <div className={styles.wrapimg}>
            <img src={icon_img} alt="avatar" className={styles.avatar} />
          </div>
          <a href={url} className={styles.username}>
            {author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано</span>
          {created_utc} часа назад
        </span>
      </div>
      <Title title={title} url={url} />
    </div>
  );
}
