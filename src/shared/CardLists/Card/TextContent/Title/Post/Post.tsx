import React from "react";
import styles from "./Post.css";
import ReactDOM from "react-dom";

interface IPostProps {
  url?: string;
}

export function Post({ url }: IPostProps) {
  //typeGard
  const node = document.getElementById("modal_root");
  if (!node) return null;
  console.log(node);
  //созадем портал createPortal(год, контейнер)
  return ReactDOM.createPortal(
    <div className={styles.modal}>
      <h2 className={styles.title}>Загологвок</h2>
      <h3>{url}</h3>
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
    </div>,
    node,
  );
}
