import React from "react";
import styles from "./DropdownItem.css";

export interface IDopdownItemProps {
  icon: React.ReactNode;
  title: string;
  onClick: () => void;
}

export function DropdownItem({ icon, title, onClick }: IDopdownItemProps) {
  return (
    <li className={styles.dropdownItem} onClick={onClick}>
      <div className={styles.iconWrapper}>{icon}</div>
      <h3 className={styles.title}>{title}</h3>
    </li>
  );
}
