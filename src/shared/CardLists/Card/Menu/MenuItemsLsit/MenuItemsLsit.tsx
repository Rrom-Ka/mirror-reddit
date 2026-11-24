import React from "react";
import styles from "./MenuItemsLsit.css";
import {
  MenuHideIconComponent,
  MenuReportIconComponent,
} from "../../../../Icon";
import { Text } from "../../../../HOC/Text";
import { Ecolors, EcolorsVar } from "../../../../../types/Ecolors";
import { Break } from "../../../../HOC/Break";
import { EIcons, Icon } from "../../../../HOC/Icon";
import { EDeviceType } from "../../../../../utils/hooks/useDeviceType";

interface IMenuItemsLsitProps {
  postId: string;
  isTablaet: EDeviceType;
}

export function MenuItemsLsit({ postId, isTablaet }: IMenuItemsLsitProps) {
  const deviceType: boolean = isTablaet !== EDeviceType.mobile;
  return (
    <ul className={styles.menuItemsList}>
      {deviceType && (
        <>
          <li className={styles.menuItem} onClick={() => console.log(postId)}>
            {/* <MenuHideIconComponent /> */}
            <Icon name={EIcons.Comments} size={15} color={EcolorsVar.gray99} />
            <Break size={12} />
            <Text size={12} color={Ecolors.gray99}>
              Коментарий
            </Text>
          </li>
          <div className={styles.divider} />
          <li className={styles.menuItem} onClick={() => console.log(postId)}>
            {/* <MenuHideIconComponent /> */}
            <Icon
              name={EIcons.Share}
              size={14}
              width={12}
              color={EcolorsVar.gray99}
            />
            <Break size={12} />
            <Text size={12} color={Ecolors.gray99}>
              Поделиться
            </Text>
          </li>
          <div className={styles.divider} />
        </>
      )}

      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        {/* <MenuHideIconComponent /> */}
        <Icon name={EIcons.Hide} size={14} color={EcolorsVar.gray99} />
        <Break size={12} />
        <Text size={12} color={Ecolors.gray99}>
          Скрыть
        </Text>
      </li>
      <div className={styles.divider} />
      {deviceType && (
        <>
          <li className={styles.menuItem} onClick={() => console.log(postId)}>
            {/* <MenuHideIconComponent /> */}
            <Icon name={EIcons.Save} size={14} color={EcolorsVar.gray99} />
            <Break size={12} />
            <Text size={12} color={Ecolors.gray99}>
              Сохранить
            </Text>
          </li>
          <div className={styles.divider} />
        </>
      )}
      <li className={styles.menuItem} onClick={() => console.log(postId)}>
        <Icon
          name={EIcons.Report}
          size={14}
          width={16}
          color={EcolorsVar.gray99}
        />
        {/* <MenuReportIconComponent /> */}
        <Break size={12} />
        <Text size={12} color={Ecolors.gray99}>
          Пожаловаться
        </Text>
      </li>
    </ul>
  );
}
