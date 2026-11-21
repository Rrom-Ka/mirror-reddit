import React, { useContext } from "react";
import styles from "./CardLists.css";
import { Card } from "./Card/Card";
import { IPostContextData, postContext } from "../../context/postContext";

export function CardLists() {
  const postData = useContext(postContext).data;
  console.log("CardList postData :", postData);
  return (
    <ul className={styles.cardLists}>
      {postData &&
        postData.map((item: IPostContextData) => (
          <Card key={item.id} {...item} />
        ))}
    </ul>
  );
}
