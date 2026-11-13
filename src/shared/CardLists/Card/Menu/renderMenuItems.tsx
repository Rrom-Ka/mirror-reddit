import React from "react";
import { merge } from "../../../../utils/js/merge";
import { pipe } from "../../../../utils/react/pipe";
import { withIdKey } from "../../../../utils/react/withIdKey";
import {
  DropdownItem,
  IDopdownItemProps,
} from "../../../Dropdown/DropdownItem";
import { GenericListTitle, IItem } from "../../../GenericList/GenericListTitle";
export interface IHandleItem {
  title: string;
  icon: React.JSX.Element;
  id: string;
}
interface IRenderMenuItems {
  isTablaet: string;
  handlerItemClick: (item: IHandleItem) => () => void;
}
export const renderMenuItems = ({
  isTablaet,
  handlerItemClick,
}: IRenderMenuItems) =>
  pipe(
    //фильтр для с мобильного
    (list: IHandleItem[]) =>
      list.filter((item) =>
        isTablaet === "mobile"
          ? item.title === "Скрыть" || item.title === "Пожаловаться"
          : true,
      ),
    //добавляем handler для какжого item
    (list: IHandleItem[]) =>
      list.map((item) =>
        merge({
          onClick: handlerItemClick(item),
        })(item),
      ),
    //вписываем в <DropdownItem/> key{id}
    (list: IDopdownItemProps[]) => list.map(withIdKey(DropdownItem)),
  );

//для элемента кото рендерит любые списки

interface IRenderMenuItemsGenericList {
  isTablaet: string;
  handlerItemClick: (item: IHandleItem) => () => void;
  stylesExport: {
    [key: string]: string;
  };
}
export const renderMenuItemsGenericList = ({
  isTablaet,
  handlerItemClick,
  stylesExport,
}: IRenderMenuItemsGenericList) =>
  pipe(
    //фильтр для с мобильного
    (list: IHandleItem[]) =>
      list.filter((item) =>
        isTablaet === "mobile"
          ? item.title === "Скрыть" || item.title === "Пожаловаться"
          : true,
      ),
    //добавляем handler для какжого item
    (list: IHandleItem[]) =>
      list.map((item) =>
        merge({
          onClick: handlerItemClick(item),
        })(item),
      ),
    (list: IHandleItem[]) =>
      list.map((item) =>
        merge({
          As: "li",
        })(item),
      ),
    (list: IHandleItem[]) =>
      list.map((item) =>
        merge({
          stylesExport: stylesExport,
        })(item),
      ),
    //вписываем в <DropdownItem/> key{id}
    (list: IItem[]) => <GenericListTitle list={list} />,
  );
