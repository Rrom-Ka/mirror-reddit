import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./CommentForm.css";

export function CommentForm() {
  //достаем value из textarea
  const [value, setValue] = useState("");

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setValue(event.target.value);
  }
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    event.stopPropagation();
    console.log(value);
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={value}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
