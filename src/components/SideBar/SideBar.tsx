import { FC, useState } from "react";
import styles from "./SideBar.module.scss";
import { FiMenu } from "react-icons/fi";

export const SideBar: FC = () => {
  const [isActive, setIsActive] = useState(false);

  const onSideBarClickHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.sidebar} ${isActive ? styles.active : ""} `}
      onClick={onSideBarClickHandler}
    >
      <div className={styles.container}>
        <FiMenu className={styles.menuicon} />
        test
      </div>
    </div>
  );
};
