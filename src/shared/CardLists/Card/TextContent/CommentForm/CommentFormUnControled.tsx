import React, { FormEvent, useRef } from "react";
import styles from "./CommentForm.css";

export function CommentForm() {
  //достаем value из textarea
  const ref = useRef<HTMLTextAreaElement>(null);
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    const areaValue = ref.current?.value;
    console.log(areaValue);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea className={styles.input} ref={ref} />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
