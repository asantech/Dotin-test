import Image from "next/image";
import { t } from "@/localize/i18n";

import styles from "./Navigator.module.scss";

type NavigatorProps = {
  navigateLeft: () => void;
  navigateRight: () => void;
};

function Navigator({ navigateLeft, navigateRight }: Readonly<NavigatorProps>) {
  return (
    <div className={styles.navigator}>
      <button className={styles["navigate-button"]} onClick={navigateLeft}>
        <Image
          src="/assets/svgs/icons/home/arrow.svg"
          width={11}
          height={18}
          alt={t("IMAGE.ALT.NAVIGATE_SLIDER_LEFT_ICON")}
        />
      </button>
      <button className={styles["navigate-button"]} onClick={navigateRight}>
        <Image
          src="/assets/svgs/icons/home/arrow.svg"
          width={11}
          height={18}
          alt={t("IMAGE.ALT.NAVIGATE_SLIDER_RIGHT_ICON")}
        />
      </button>
    </div>
  );
}

export default Navigator;
