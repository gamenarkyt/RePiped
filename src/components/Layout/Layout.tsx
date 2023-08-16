import React, { FC } from "react";
import styles from "./Layout.module.scss";
import { Header } from "components/Header/Header";
import { Routing } from "pages";

type Props = {};

export const Layout: FC = (props: Props) => {
  return (
    <div className={styles.layout}>
      <Header />
      <Routing />
      {/* <SideBar /> */}
    </div>
  );
};
