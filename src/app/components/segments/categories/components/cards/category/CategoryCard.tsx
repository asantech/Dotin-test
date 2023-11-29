import Image from "next/image";

import { CategoryConfig } from "../../../Categories.config";
import styles from "./CategoryCard.module.scss";

function CategoryCard({ iconPath, imagePath, text }: Readonly<CategoryConfig>) {
  return (
    <div className={styles["category-card"]}>
      <div className="card-image">
        <Image src={imagePath} alt="دسته بندی" />
      </div>
      <div className="card-label">
        <div className="image-wrapper">
          <Image src={iconPath} alt="آیکن دسته بندی" />
        </div>
        <span className="text">{text}</span>
      </div>
    </div>
  );
}

export default CategoryCard;
