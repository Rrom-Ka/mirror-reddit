import React, { useState } from "react";
import styles from "./Card.css";
import { TextContent } from "./TextContent";
import { Preview } from "./Preview";
import { Menu } from "./Menu";
import { Controls } from "./Controls";
import { Dropdown } from "../../Dropdown";
export function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const hadnleClick = () => {};
  return (
    <li className={styles.card}>
      <TextContent />
      <Preview />
      <Menu />

      {/* <Dropdown button={<Menu />}>
        <ul>
          <li>1</li>
        </ul>
      </Dropdown> */}
      <Controls />
    </li>
  );
}
