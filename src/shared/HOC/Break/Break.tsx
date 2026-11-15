import React from "react";
import styles from "./Break.css";
import classNames from "classnames";

type TBreakSize = 4 | 8 | 12 | 16 | 20;
type TDisplays = "mobile" | "tablet" | "desctop";

interface IBreakProps {
  size: TBreakSize;
  mobileSize?: TDisplays;
  tabletSize?: TDisplays;
  desctopSize?: TDisplays;
  inline?: boolean;
  top?: boolean;
}

export function Break(props: IBreakProps) {
  const {
    inline = false,
    top = false,
    size,
    mobileSize,
    tabletSize,
    desctopSize,
  } = props;
  return (
    <div
      className={classNames(
        styles[`s${size}`],
        { [styles[`mobile_s${mobileSize}`]]: mobileSize },
        { [styles[`tablet_s${tabletSize}`]]: tabletSize },
        { [styles[`desctop_s${desctopSize}`]]: desctopSize },
        { [styles.top]: top },
      )}
    />
  );
}
