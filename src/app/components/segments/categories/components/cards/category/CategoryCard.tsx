import Link from "next/link";
import Image from "next/image";
import { t } from "@/localize/i18n";

import { CategoryConfig } from "../../../Categories.config";
import styles from "./CategoryCard.module.scss";

function CategoryCard({
  iconPath,
  imagePath,
  text,
  linkPath,
}: Readonly<CategoryConfig>) {
  return (
    <div className={styles["category-card"]}>
      <Link className={styles["link"]} href={linkPath}>
        <div className={styles["card-label"]}>
          <div className={styles["image-wrapper"]}>
            {iconPath && (
              <Image
                src={iconPath}
                alt={t("IMAGE.ALT.CATEGORY_ICON")}
                width={30}
                height={30}
              />
            )}
          </div>
          <span className="text">{text}</span>
        </div>
        <div className={styles["card-image"]}>
          {imagePath && <img src={imagePath} alt={t("IMAGE.CATEGORY")} />}
        </div>
      </Link>
    </div>
  );
}

export default CategoryCard;
