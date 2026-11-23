import React, { ChangeEvent, FormEvent, useContext, useState } from "react";
import styles from "./CommentForm.css";
import { commentConext } from "../../../../../context/commentContext";

export function CommentForm() {
  //достаем value из textarea из контекста
  const { value, onChange } = useContext(commentConext);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
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
