import React from "react";
import styles from "./DropdownItemClose.css";

export function DropdownItemClose() {
  return (
    <li className={styles.dropdownItemClose}>
      <h3 className={styles.title}>Закрыть</h3>
    </li>
  );
}
