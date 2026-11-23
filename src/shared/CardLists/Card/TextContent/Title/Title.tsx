import React, { useState } from "react";
import styles from "./Title.css";
import { Post } from "./Post";

interface ITitleProps {
  url?: string;
  title?: string;
}

export function Title({ url, title }: ITitleProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      <h2 className={styles.title}>
        <a
          href="#posr-url"
          className={styles.postLink}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("Title clik");
            setIsModalOpened(true);
          }}
        >
          {title}
        </a>
        {isModalOpened && <Post />}
      </h2>
    </>
  );
}
