import React, { useEffect, useState } from "react";
import styles from "./Menu.css";
import { Dropdown } from "../../../../Dropdown";
import {
  DropdownItem,
  IDopdownItemProps,
} from "../../../../Dropdown/DropdownItem";
import { menuData } from "../../../../../utils/data/menuData";
import { generateId } from "../../../../../utils/react/generateRandomIndex";
import { DropdownItemClose } from "../../../../Dropdown/DropdownItemClose";
import { useDeviceType } from "../../../../../utils/hooks/useDeviceType";
import { MenuDotsIcon } from "../../../../../assets/svg/MenuIcon";
import { withIdKey } from "../../../../../utils/react/withIdKey";
import { merge } from "../../../../../utils/js/merge";
import { pipe } from "../../../../../utils/react/pipe";

//добавляем id
interface IHandleItem {
  title: string;
  icon: React.JSX.Element;
  id: string;
}
const menuDataId = menuData.map(generateId);

export function Menu() {
  const [menuList, setMenuList] = useState(menuDataId);
  //возвращает mobile, desctop, tablet в зависимости от ширины экрана
  const isTablaet = useDeviceType();

  const handlerItemClick = (item: IHandleItem) => () => {
    console.log(item.title);
  };

  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>{MenuDotsIcon}</button>}
      >
        <ul className={styles.item}>
          {menuList
            .filter((item) =>
              isTablaet === "mobile"
                ? item.title === "Скрыть" || item.title === "Пожаловаться"
                : true,
            )
            //добавляем в массив onClick
            .map((item) =>
              merge({
                onClick: handlerItemClick(item),
              })(item),
            )
            .map(withIdKey(DropdownItem))}
          {isTablaet !== "desctop" && <DropdownItemClose />}
        </ul>
      </Dropdown>
    </div>
  );
}
