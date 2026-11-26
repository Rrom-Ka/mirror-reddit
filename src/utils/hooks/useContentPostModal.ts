import { func } from "prop-types";
import { useEffect, useState } from "react";
import axios from "axios";

interface IArticleData {
  body_html: string;
}

export function useContentPostModal(id?:string){

const [article, setArticle] = useState<IArticleData | null>(null);
const [isLoading, setIsLoading] = useState(false);

  // Загрузка контента статьи с dev.to по переданному url
  useEffect(() => {
    if (!id) return;

    setIsLoading(true);
    axios
      .get(`https://dev.to/api/articles/${id}`)
      .then((res) => {
        setArticle({
          body_html: res.data.body_html,
        });
      })
      .catch((err) => {
        console.error("Ошибка загрузки статьи:", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  return {article, isLoading}
}