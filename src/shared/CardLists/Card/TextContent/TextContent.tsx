import React, { useEffect } from "react";
import styles from "./TextContent.css";
import { usePostsData } from "../../../../utils/hooks/usePostsData";
import { IPostContextData } from "../../../../context/postContext";

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
      <h2 className={styles.title}>
        <a href={url} className={styles.postLink}>
          {title}
        </a>
      </h2>
    </div>
    // <div className={styles.textConent}>
    //   <div className={styles.metaData}>
    //     <div className={styles.userLik}>
    //       <div className={styles.wrapimg}>
    //         <img
    //           src="https://robohash.org/face"
    //           alt="avatar"
    //           className={styles.avatar}
    //         />
    //       </div>
    //       <a href="#user-url" className={styles.username}>
    //         Дмитрий Гришин
    //       </a>
    //     </div>
    //     <span className={styles.createdAt}>
    //       <span className={styles.publishedLabel}>Опубликовано</span>4 часа
    //       назад
    //     </span>
    //   </div>
    //   <h2 className={styles.title}>
    //     <a href="#post-url" className={styles.postLink}>
    //       Реализация намеченных плановых заданий
    //     </a>
    //   </h2>
    // </div>
  );
}
