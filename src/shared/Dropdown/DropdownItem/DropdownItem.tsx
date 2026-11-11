import React from "react";
import styles from "./DropdownItem.css";

interface IDopdownItemProps {
  icon: React.ReactNode;
  // icon: React.JSX.Element;
  title: string;
  // id: string;
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
