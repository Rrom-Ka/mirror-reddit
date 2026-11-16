import React from "react";
import styles from "./GenericList.css";

export interface IItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  stylesExport: {
    [key: string]: string;
  };
  onClick: () => void;
  // className?: string;
  As?: "a" | "li" | "button" | "div";
  Wrap?: "a" | "li" | "button" | "div" | "span";
  Head?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  href?: string;
}

export interface IGenericListProps {
  list: IItem[];
}
//сюда нужно передавать стили
export function GenericListTitle({ list }: IGenericListProps) {
  return (
    <>
      {list.map(
        ({
          As = "div",
          Wrap = "div",
          Head = "h3",
          title,
          onClick,
          id,
          href,
          icon,
          stylesExport,
        }) => (
          <As
            className={stylesExport.dropdownItem}
            onClick={() => onClick()}
            key={id}
            href={href}
          >
            <Wrap className={stylesExport.iconWrapper}>{icon}</Wrap>
            <Head className={stylesExport.title}>{title}</Head>
          </As>
        ),
      )}
    </>
  );
}
