import React from "react";
import styles from "./Preview.css";
import { IPostContextData } from "../../../../context/postContext";

export function Preview({ thumbnail }: IPostContextData) {
  return (
    <div className={styles.preview}>
      <img
        src={thumbnail}
        // src="https://img.magnific.com/free-photo/side-view-smiley-couple-indoors_23-2149903726.jpg?t=st=1793427680~exp=1793431280~hmac=1f23a127e33e4f0031320e7135374ae3e2a773ea68c75b778ec63f67f4dfc958"
        alt=""
        className={styles.previewImg}
      />
    </div>
  );
}
