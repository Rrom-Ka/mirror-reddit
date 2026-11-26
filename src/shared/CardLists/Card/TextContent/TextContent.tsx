import React, { useEffect } from "react";
import styles from "./TextContent.css";
import { usePostsData } from "../../../../utils/hooks/usePostsData";
import { IPostContextData } from "../../../../context/postContext";
import { Title } from "./Title";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/ru";

dayjs.extend(relativeTime);
dayjs.locale("ru");

export interface ITextContentProps extends IPostContextData {
  modal: boolean;
}
export function TextContent(textContentData: ITextContentProps) {
  if (textContentData.modal === false) console.log(textContentData.url);
  // if (typeof textContentData.created_utc === "number") {
  //   const timeAgo = (Date.now() / 1000 - textContentData.created_utc) / 3600;
  // }

  return (
    <div className={styles.textConent}>
      <div className={styles.metaData}>
        <div className={styles.userLik}>
          <div className={styles.wrapimg}>
            <img
              src={textContentData.icon_img}
              alt="avatar"
              className={styles.avatar}
            />
          </div>
          <a href={textContentData.url} className={styles.username}>
            {textContentData.author}
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано</span>
          {textContentData.created_utc &&
            dayjs.unix(Number(textContentData.created_utc)).fromNow()}
          {/* часа назад
          {textContentData.created_utc} */}
        </span>
      </div>
      <Title {...textContentData} />
    </div>
  );
}
