import React from "react";
import styles from "./Text.css";
import classNames from "classnames";
import { Ecolors } from "../../../types/Ecolors";

type TSizes = 28 | 20 | 20 | 14 | 12 | 10;

export interface ITextProps {
  As?: "p" | "span" | "div" | "h1" | "h2" | "h3" | "h4";
  color: Ecolors;
  bold?: boolean;
  children: React.ReactNode; //всё, что React может отрендерить
  size: TSizes;
  mobileSize?: TSizes;
  tabletSize?: TSizes;
  descTopSize?: TSizes;
}

export function Text(props: ITextProps) {
  //деструкция props
  const {
    As = "span",
    color = Ecolors.black,
    bold = false,
    children,
    size,
    mobileSize,
    tabletSize,
    descTopSize,
  } = props;
  //использование билиотеки класснамес
  //параметры -стили кот смерджим
  const classes = classNames(
    styles[`${size}`],
    styles[color],
    { [styles.bold]: bold },
    { [styles[`m${mobileSize}`]]: mobileSize }, //выполнется если передаем значение
    { [styles[`t${tabletSize}`]]: tabletSize },
    { [styles[`d${descTopSize}`]]: descTopSize },
  );
  return <As className={classes}>{children}</As>;
}

// export enum Ecolors {
//   black = "var(--black)",
//   orange = "var(--orange)",
//   green = "var(--green)",
//   white = "var(--white)",
//   grayF4 = "var(--grayF4)",
//   grayF3 = "var(--grayF3)",
//   grayC4 = "var(--grayC4)",
//   gray66 = "var(--gray66)",
//   gray99 = "var(--gray99)",
//   grayEC = "var(--grayEC)",
// }
