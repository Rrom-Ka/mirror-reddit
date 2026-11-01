import React from "react";
import styles from "./CardLists.css";
import { Card } from "./Card/Card";

export function CardLists() {
  return (
    <ul className={styles.cardLists}>
      <Card />
    </ul>
  );
}
