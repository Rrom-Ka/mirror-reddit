import React, { useEffect, useRef } from "react";
import styles from "./Post.css";
import ReactDOM from "react-dom";
import { CommentForm } from "../CommentForm";

interface IPostProps {
  url?: string;
  onClose?: () => void;
}

export function Post({ url, onClose }: IPostProps) {
  //получаем ссылку на элемент(модалку)
  const ref = useRef<HTMLDivElement>(null);
  //обработчик на документ (вне модалки)
  useEffect(() => {
    //ищем где кликает и сравниваем с элементом
    function hadleClick(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        !ref.current?.contains(event.target)
      ) {
        onClose?.();
        console.log("click witjout modal");
      }
      // event.target;
    }
    document.addEventListener("click", hadleClick);
    //очищаем обработчик
    return () => {
      document.removeEventListener("click", hadleClick);
    };
  }, []);

  //typeGard
  const node = document.getElementById("modal_root");
  if (!node) return null;
  console.log(node);
  //созадем портал createPortal(год, контейнер)
  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <h2 className={styles.title}>Загологвок</h2>
      {url && <h3>{url}</h3>}
      <div className={styles.content}>
        <p className={styles.descr}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          accusantium eum quidem? Ratione saepe quasi officia maiores nostrum,
          doloremque et hic dicta rem! Iure recusandae quidem, corporis est a
          atque fugit dolor nesciunt molestiae illo id minima saepe minus
          asperiores nostrum voluptate rem quia natus veniam. Libero ipsum ut
          tempore mollitia soluta eaque atque minus quidem ipsa! Fuga earum
          dolore consequuntur cumque optio in ducimus magni nulla sapiente error
          maiores, doloribus, consequatur nesciunt labore nemo aliquid nam
          similique deleniti laborum reprehenderit. Omnis, quos. Aliquid totam
          quo explicabo. Aliquid dolores tenetur sapiente nulla numquam.
          Laboriosam neque modi libero expedita, quos facere.
        </p>
        <p className={styles.descr}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          accusantium eum quidem? Ratione saepe quasi officia maiores nostrum,
          doloremque et hic dicta rem! Iure recusandae quidem, corporis est a
          atque fugit dolor nesciunt molestiae illo id minima saepe minus
          asperiores nostrum voluptate rem quia natus veniam. Libero ipsum ut
          tempore mollitia soluta eaque atque minus quidem ipsa! Fuga earum
          dolore consequuntur cumque optio in ducimus magni nulla sapiente error
          maiores, doloribus, consequatur nesciunt labore nemo aliquid nam
          similique deleniti laborum reprehenderit. Omnis, quos. Aliquid totam
          quo explicabo. Aliquid dolores tenetur sapiente nulla numquam.
          Laboriosam neque modi libero expedita, quos facere.
        </p>
        <p className={styles.descr}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          accusantium eum quidem? Ratione saepe quasi officia maiores nostrum,
          doloremque et hic dicta rem! Iure recusandae quidem, corporis est a
          atque fugit dolor nesciunt molestiae illo id minima saepe minus
          asperiores nostrum voluptate rem quia natus veniam. Libero ipsum ut
          tempore mollitia soluta eaque atque minus quidem ipsa! Fuga earum
          dolore consequuntur cumque optio in ducimus magni nulla sapiente error
          maiores, doloribus, consequatur nesciunt labore nemo aliquid nam
          similique deleniti laborum reprehenderit. Omnis, quos. Aliquid totam
          quo explicabo. Aliquid dolores tenetur sapiente nulla numquam.
          Laboriosam neque modi libero expedita, quos facere.
        </p>
      </div>
      <CommentForm />
    </div>,
    node,
  );
}
