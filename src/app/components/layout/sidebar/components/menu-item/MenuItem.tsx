"use client";

import { useState } from "react";
import Image from "next/image";
import isEmpty from "lodash/isEmpty";
import { t } from "@/localize/i18n";

import SubMenuItem, { SubMenuItemConfig } from "../sub-menu-item/SubMenuItem";
import { SidebarMenuItem } from "../../Sidebar.config";
import styles from "./MenuItem.module.scss";

type MenuItemProps = Readonly<
  SidebarMenuItem & {
    sidebarIsCollapsed: boolean;
  }
>;

function MenuItem({
  icon,
  text,
  subMenuItems,
  sidebarIsCollapsed,
}: MenuItemProps) {
  const [collapsed, setCollapsed] = useState<boolean>(true);

  const hasSubMenus: boolean = !isEmpty(subMenuItems);
  const showSubMenuWrapper: boolean = hasSubMenus && !collapsed;
  const collapseIconFile: string = collapsed ? "left.svg" : "down.svg";

  const toggleCollapse = () => {
    if (!hasSubMenus) return;
    setCollapsed(!collapsed);
  };

  return (
    <div className={styles["menu-item"]}>
      <button className={styles["menu-item-label"]} onClick={toggleCollapse}>
        <Image src={icon} alt="Sidebar menu link icon" width={24} height={24} />
        {!sidebarIsCollapsed && <span>{text}</span>}
        {!sidebarIsCollapsed && hasSubMenus && (
          <Image
            className={styles["collapse-icon"]}
            src={`/assets/svgs/icons/public/arrows/${collapseIconFile}`}
            alt={t("IMAGE.ALT.SIDEBAR_MENU_LINK_COLLAPSE_STATE_ICON")}
            width={11}
            height={11}
          />
        )}
      </button>
      {showSubMenuWrapper && (
        <div className={styles["sub-menu-items-wrapper"]}>
          {subMenuItems?.map((subMenItem: SubMenuItemConfig, index: number) => {
            const key: number = index;
            return <SubMenuItem key={key} subMenItem={subMenItem} />;
          })}
        </div>
      )}
    </div>
  );
}

export default MenuItem;
