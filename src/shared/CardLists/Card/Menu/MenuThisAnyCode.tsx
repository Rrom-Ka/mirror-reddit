import React, { useEffect, useState } from "react";
import styles from "./Menu.css";
import { Dropdown } from "../../../Dropdown";
import { DropdownItem } from "../../../Dropdown/DropdownItem";
import { menuData } from "../../../../utils/data/menuData";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import { DropdownItemClose } from "../../../Dropdown/DropdownItemClose";
import { useDeviceType } from "../../../../utils/hooks/useDeviceType";
import { MenuDotsIcon } from "../../../../assets/svg/MenuIcon";
import { withKey } from "../../../../utils/react/5_1_6m_withKey";
import { withIdKey } from "../../../../utils/react/withIdKey";
import { merge } from "../../../../utils/js/merge";
import { pipe } from "../../../../utils/react/pipe";
import { pick } from "../../../../utils/react/pick";
import { cond } from "../../../../utils/react/cond";
import { isEqual } from "../../../../utils/react/isEqual";

//добавляем id
const menuDataId = menuData.map(generateId);
// const filtrWithTitle = (title: string) =>
//   pipe(pick("title"), isEqual("Скрыть"), isEqual("Пожаловаться"), cond);

const createFilterBy = (prop: string) => (title: string) =>
  pipe(pick(prop), isEqual(title), cond);
const filtrWithTitle1 = createFilterBy("title")("Скрыть");
const filtrWithTitle2 = createFilterBy("title")("Пожаловаться");
// const filtrWithTitle = pipe(filtrWithTitle1, filtrWithTitle2);

export function Menu() {
  const [menuList, setMenuList] = useState(menuDataId);
  //возвращает mobile, desctop, tablet в зависимости от ширины экрана
  const isTablaet = useDeviceType();
  const handlerItemClick =
    (
      item: {
        title: string;
        icon: React.JSX.Element;
      } & Record<"id", string>,
    ) =>
    () => {
      console.log(item.title);
    };

  return (
    <div className={styles.menu}>
      <Dropdown
        button={<button className={styles.menuButton}>{MenuDotsIcon}</button>}
      >
        <ul className={styles.item}>
          {
            menuList
              // фильтр если mobile инче передаем все
              // .filter((item) => {
              //   if (isTablaet === "mobile") {
              //     return (
              //       item.title === "Скрыть" || item.title === "Пожаловаться"
              //     );
              //   }
              //   return true;
              // })
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
              // .map((item) =>
              //   merge({
              //     onClick: () => {
              //       console.log(item.title);
              //     },
              //   })(item),
              // )
              //то же самое
              // .map((item) => ({
              //   ...item,
              //   onClick: () => {
              //     console.log(item.title);
              //   },
              // }))
              .map(withIdKey(DropdownItem))
            //то же самое
            // .map((item) => (
            //   <DropdownItem key={item.id} icon={item.icon} title={item.title} />
            // ))
          }
          {isTablaet !== "desctop" && <DropdownItemClose />}
        </ul>
      </Dropdown>
    </div>
  );
}
