import React, { useState } from "react";
import styles from "./Menu.css";
import { Dropdown } from "../../../Dropdown";
import { menuData } from "../../../../utils/data/menuData";
import { generateId } from "../../../../utils/react/generateRandomIndex";
import stylesDropdownItemClose from "../../../Dropdown/DropdownItemClose/DropdownItemClose.css";
import {
  EDeviceType,
  useDeviceType,
} from "../../../../utils/hooks/useDeviceType";
import { MenuDotsIcon } from "../../../../assets/svg/MenuIcon";
import { renderMenuItems } from "./renderMenuItems";
import { IHandleItem } from "./renderMenuItems";
import { MenuDotsIconComponent } from "../../../Icon";
import { MenuItemsLsit } from "./MenuItemsLsit";
import { EIcons, Icon } from "../../../HOC/Icon";
import { EcolorsVar } from "../../../../types/Ecolors";

//добавляем id
const menuDataId = menuData.map(generateId);

export function Menu() {
  const [menuList, setMenuList] = useState(menuDataId);
  //возвращает mobile, desctop, tablet в зависимости от ширины экрана
  const isTablaet: EDeviceType = useDeviceType();

  const handlerItemClick = (item: IHandleItem) => () => {
    console.log(item.title);
  };

  return (
    <div className={styles.menu}>
      <Dropdown
        button={
          <button className={styles.menuButton}>
            {/* <MenuDotsIconComponent /> */}
            <Icon
              name={EIcons.Dots}
              size={20}
              width={5}
              color={EcolorsVar.grayD9}
            />
          </button>
        }
      >
        <div className={styles.item}>
          <MenuItemsLsit postId={"123"} isTablaet={isTablaet} />
          {isTablaet !== EDeviceType.desctop && (
            <div className={stylesDropdownItemClose.dropdownItemClose}>
              <h3 className={stylesDropdownItemClose.title}>Закрыть</h3>
            </div>
          )}
        </div>
      </Dropdown>
    </div>
  );
  // return (
  //   <div className={styles.menu}>
  //     <Dropdown
  //       button={<button className={styles.menuButton}>
  //         <MenuIcon/>
  //       </button>}
  //     >
  //       <ul className={styles.item}>
  //         {renderMenuItems({ isTablaet, handlerItemClick })(menuList)}
  //         {isTablaet !== "desctop" && <DropdownItemClose />}
  //       </ul>
  //     </Dropdown>
  //   </div>
  // );
}
