import Image from "next/image";

import { t } from "@/localize/i18n";
import { FooterNavigatorMenuItem } from "../../FooterNavigator.config";
import styles from "./MenuItem.module.scss";

type MenuItemProps = Readonly<FooterNavigatorMenuItem> & {
  isActive: boolean;
  onClick: () => void;
};

function MenuItem({
  icon,
  activeIcon,
  text,
  isActive,
  onClick,
}: MenuItemProps) {
  const iconURL = isActive ? activeIcon : icon;
  return (
    <button className={styles["menu-item"]} onClick={onClick}>
      {isActive && <div className={styles["indicator"]}></div>}
      <Image
        src={iconURL}
        width={27}
        height={27}
        alt={t("IMAGE.ALT.FOOTER_NAVIGATOR_ICON")}
      />
      <span className={styles["text"]}>{text}</span>
    </button>
  );
}

export default MenuItem;
