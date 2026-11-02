import React from "react";
import styles from "./TextContent.css";

export function TextContent() {
  return (
    <div className={styles.textConent}>
      <div className={styles.metaData}>
        <div className={styles.userLik}>
          <div className={styles.wrapimg}>
            <img
              src="https://robohash.org/face"
              alt="avatar"
              className={styles.avatar}
            />
          </div>
          <a href="#user-url" className={styles.username}>
            Дмитрий Гришин
          </a>
        </div>
        <span className={styles.createdAt}>
          <span className={styles.publishedLabel}>Опубликовано</span>4 часа
          назад
        </span>
      </div>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Реализация намеченных плановых заданий
        </a>
      </h2>
    </div>
  );
}
