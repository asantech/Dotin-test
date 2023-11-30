import { useContext } from "react";
import Image from "next/image";
import { t } from "@/localize/i18n";

import { SidebarToggleContext } from "@/app/context/SidebarToggle";
import styles from "./SidebarToggleButton.module.scss";

function SidebarToggleButton() {
  const { isCollapsed, toggleSidebar } = useContext(SidebarToggleContext);

  const changeSidebarCollapseState = () => {
    toggleSidebar(!isCollapsed);
  };

  return (
    <button className={styles["sidebar-toggle-button"]}>
      <Image
        src="/assets/svgs/icons/header/menu.svg"
        alt={t("IMAGE.ALT.HAMBURGER_TOGGLE_BUTTON_ICON")}
        width={24}
        height={24}
        onClick={changeSidebarCollapseState}
      />
    </button>
  );
}

export default SidebarToggleButton;
