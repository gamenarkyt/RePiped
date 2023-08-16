import { FC } from "react";
import styles from "./Layout.module.scss";
import { Routing } from "../../pages";
import { Header } from "../Header/Header";

export const Layout: FC = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <Routing />
    </div>
  );
};
