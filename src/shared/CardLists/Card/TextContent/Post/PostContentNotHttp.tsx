import React, { useEffect, useRef, useState } from "react";
import styles from "./Post.css";
import ReactDOM from "react-dom";
import axios from "axios";
import { CommentForm } from "../CommentForm";
import { Controls } from "../../Controls";
import { TextContent } from "../TextContent";
import { IPostContextData } from "../../../../../context/postContext";
import { useContentPostModal } from "../../../../../utils/hooks/useContentPostModal";

interface IPostProps extends IPostContextData {
  onClose?: () => void;
}

export function PostContentNotHttp(postData: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { article, isLoading } = useContentPostModal(postData.id);

  console.log("postData--PostthisContentHttp :", postData);

  // Закрытие при клике вне модалки
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        postData.onClose?.();
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [postData.onClose]);

  const node = document.getElementById("modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <div className={styles.wrapHeader}>
        <Controls />
        <TextContent {...postData} modal={false} />
      </div>

      <div className={styles.wrapImg}>
        <img src={postData.thumbnail} alt="" className={styles.img} />
      </div>

      <div className={styles.content}>
        {isLoading && <p className={styles.descr}>Загружаем содержимое...</p>}
        {article && (
          <div
            className={styles.descr}
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        )}
        <CommentForm />
      </div>
    </div>,
    node,
  );
}
