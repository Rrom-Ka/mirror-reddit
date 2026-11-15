import React from "react";
import styles from "./MenuItemsLsit.css";
import {
  MenuHideIconComponent,
  MenuReportIconComponent,
} from "../../../../Icon";
import { Text } from "../../../../Text";
import { Ecolors } from "../../../../../types/Ecolors";

interface IMenuItemsLsitProps {
  postId: string;
}

export function MenuItemsLsit({ postId }: IMenuItemsLsitProps) {
  return (
    <ul className={styles.menuItemsList}>
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <MenuHideIconComponent />
        <Text size={12} color={Ecolors.gray99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider} />
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <MenuReportIconComponent />
        <Text size={12} color={Ecolors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
