import React, { useEffect, useRef, useState } from "react";
import styles from "./Post.css";
import ReactDOM from "react-dom";
import axios from "axios";

interface IPostProps {
  url?: string;
  onClose?: () => void;
}

interface IArticleData {
  title: string;
  body_html: string;
}

export function Post({ url, onClose }: IPostProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [article, setArticle] = useState<IArticleData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Закрытие при клике вне модалки
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
      }
    }
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [onClose]);

  // Загрузка контента статьи с dev.to по переданному url
  useEffect(() => {
    if (!url) return;

    setIsLoading(true);
    try {
      // Извлекаем путь из ссылки: "/codenewbie/tell-us-your-story-..."
      const pathname = new URL(url).pathname;

      axios
        .get(`https://dev.to/api/articles${pathname}`)
        .then((res) => {
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
      console.error("Некорректный URL:", url);
      setIsLoading(false);
    }
  }, [url]);

  const node = document.getElementById("modal_root");
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>
        {article ? article.title : "Загрузка статьи..."}
      </h2>

      <div className={styles.content}>
        {isLoading && <p className={styles.descr}>Загружаем содержимое...</p>}

        {article && (
          <div
            className={styles.descr}
            dangerouslySetInnerHTML={{ __html: article.body_html }}
          />
        )}
      </div>
    </div>,
    node,
  );
}
