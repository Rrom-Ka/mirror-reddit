import React from "react";
import styles from "./Icon.css";
import classNames from "classnames";
import {
  MenuCommentsIconComponent,
  MenuDotsIconComponent,
  MenuHideIconComponent,
  MenuReportIconComponent,
  MenuSaveIconComponent,
  MenuShareIconComponent,
} from "../../Icon";
import { EcolorsVar } from "../../../types/Ecolors";

export enum EIcons {
  Comments = "Comments",
  Dots = "Dots",
  Hide = "Hide",
  Report = "Report",
  Save = "Save",
  Share = "Share",
}

const IconComponentsList: Record<
  EIcons,
  React.ComponentType<{ className?: string }>
> = {
  Comments: MenuCommentsIconComponent,
  Dots: MenuDotsIconComponent,
  Hide: MenuHideIconComponent,
  Report: MenuReportIconComponent,
  Save: MenuSaveIconComponent,
  Share: MenuShareIconComponent,
};

type TSizes = 20 | 15 | 14;
type TWidth = 16 | 12 | 5;

export interface IIconProps {
  name: EIcons;
  size: TSizes;
  width?: TWidth;
  color?: EcolorsVar;
}

export function Icon(props: IIconProps) {
  const { name, size, width, color } = props;
  const classes = classNames(
    styles.wrapper,
    { [styles[`s${size}`]]: size },
    { [styles[`w${width}`]]: width },
  );
  const IconComponent = IconComponentsList[name];
  return (
    <span className={classes} style={{ color }}>
      <IconComponent />
    </span>
  );
}
