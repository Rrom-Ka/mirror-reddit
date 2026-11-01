import React from "react";
import styles = require("./Layout.css");
// import styles from "./Layout.css";
interface ILeayoutProps {
  children?: React.ReactNode;
}

export function Layout({ children }: ILeayoutProps) {
  return <div className={styles.layout}>{children}</div>;
}
