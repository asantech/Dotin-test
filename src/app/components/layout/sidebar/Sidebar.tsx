"use client";

import { useContext } from "react";
import Image from "next/image";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import clsx from "clsx";
import { t } from "@/localize/i18n";

import { SidebarToggleContext } from "@/app/context/SidebarToggle";
import MenuItem from "./components/menu-item/MenuItem";
import { sidebarMenuItems } from "./Sidebar.config";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  const { isCollapsed } = useContext(SidebarToggleContext);
  const minWidth1200px: boolean = useMediaQuery("(min-width: 1200px)");
  const { width: windowWidth } = useWindowSize();

  if (!windowWidth) return <></>;

  return (
    <>
      {minWidth1200px && (
        <aside
          className={clsx(
            styles["sidebar"],
            isCollapsed && styles["collapsed"]
          )}
        >
          <div className={styles["logo-wrapper"]}>
            <Image
              src="/assets/svgs/icons/sidebar/logo.svg"
              alt={t("IMAGE.ALT.APP_LOGO")}
              width={40}
              height={33}
            />
          </div>
          ,
          {sidebarMenuItems.map(
            ({ icon, activeIcon, text, subMenuItems }, index) => {
              const key: number = index;
              return (
                <MenuItem
                  key={key}
                  icon={icon}
                  activeIcon={activeIcon}
                  text={text}
                  subMenuItems={subMenuItems}
                  sidebarIsCollapsed={isCollapsed}
                />
              );
            }
          )}
        </aside>
      )}
    </>
  );
}

export default Sidebar;
