"use client";

import { useState } from "react";
import { useMediaQuery, useWindowSize } from "usehooks-ts";

import MenuItem from "./components/menu-item/MenuItem";
import { footerNavigatorMenuItems } from "./FooterNavigator.config";
import styles from "./FooterNavigator.module.scss";

function FooterNavigator() {
  const [activeMenuItem, setActiveMenuItem] = useState(0);

  const minWidth1200px: boolean = useMediaQuery("(min-width: 1200px)");
  const { width: windowWidth } = useWindowSize();

  if (!windowWidth) return <></>;

  return (
    <>
      {!minWidth1200px && (
        <footer className={styles["footer-navigator"]}>
          {footerNavigatorMenuItems.map(({ icon, activeIcon, text }, index) => {
            const key: number = index;
            return (
              <MenuItem
                key={key}
                icon={icon}
                activeIcon={activeIcon}
                text={text}
                isActive={activeMenuItem === index}
                onClick={() => {
                  setActiveMenuItem(index);
                }}
              />
            );
          })}
        </footer>
      )}
    </>
  );
}

export default FooterNavigator;
