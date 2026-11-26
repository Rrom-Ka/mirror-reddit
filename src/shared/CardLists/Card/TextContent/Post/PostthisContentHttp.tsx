import React, { useEffect, useRef, useState } from "react";
import styles from "./Post.css";
import ReactDOM from "react-dom";
import axios from "axios";
import { CommentForm } from "../CommentForm";
import { Controls } from "../../Controls";
import { title } from "process";
import { TextContent } from "../TextContent";
import { IPostContextData } from "../../../../../context/postContext";

interface IPostProps extends IPostContextData {
  onClose?: () => void;
}

interface IArticleData {
  title: string;
  body_html: string;
}

export function PostthisContentHttp(postData: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [article, setArticle] = useState<IArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

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

  // Загрузка контента статьи с dev.to по переданному url
  useEffect(() => {
    if (!postData.url) return;

    setIsLoading(true);
    try {
      // Извлекаем путь из ссылки: "/codenewbie/tell-us-your-story-..."
      const pathname = new URL(postData.url).pathname;

      axios
        .get(`https://dev.to/api/articles${pathname}`)
        .then((res) => {
          // console.log("axios-объект", res);
          setArticle({
            title: res.data.title,
            body_html: res.data.body_html,
          });
        })
        .catch((err) => {
          console.error("Ошибка загрузки статьи:", err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } catch (e) {
      console.error("Некорректный URL:", postData.url);
      setIsLoading(false);
    }
  }, [postData.url]);

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
