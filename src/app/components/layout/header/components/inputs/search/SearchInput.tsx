import { t } from "@/localize/i18n";
import Image from "next/image";

import styles from "./SearchInput.module.scss";

function SearchInput() {
  return (
    <div className={styles["search-input-wrapper"]}>
      <span className={styles["text"]}>جستجو</span>
      <Image
        src="/assets/svgs/icons/header/search-normal.svg"
        alt={t("IMAGE.ALT.SEARCH_ICON")}
        width={24}
        height={24}
      />
    </div>
  );
}

export default SearchInput;
