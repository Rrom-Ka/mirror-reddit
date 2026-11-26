import React, { useState } from "react";
import styles from "./Title.css";
import { Post, PostContentNotHttp, PostthisContentHttp } from "../Post";
import { IPostContextData } from "../../../../../context/postContext";
import { ITextContentProps } from "../TextContent";

export function Title(textContentData: ITextContentProps) {
  const [isModalOpened, setIsModalOpened] = useState(false);
  return (
    <>
      {textContentData.modal ? (
        <h2
          className={styles.title}
          // onClick={(e) => {
          //   e.preventDefault();
          //   e.stopPropagation();
          //   console.log("Title clik");
          //   setIsModalOpened(false);
          // }}
        >
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
            {textContentData.title}
          </a>
          {isModalOpened && (
            // <Post url={url} onClose={() => setIsModalOpened(false)} />
            // <PostthisContentHttp
            //   {...textContentData}
            //   onClose={() => setIsModalOpened(false)}
            // />
            <PostContentNotHttp
              {...textContentData}
              onClose={() => setIsModalOpened(false)}
            />
          )}
        </h2>
      ) : (
        <h2 className={styles.title}>{textContentData.title}</h2>
      )}
    </>
  );
}
