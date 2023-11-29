import CategoryCard from "./components/cards/category/CategoryCard";
import { categoriesConfig, CategoryConfig } from "./Categories.config";
import styles from "./Categories.module.scss";

function Categories() {
  return (
    <section className={styles["categories"]}>
      {categoriesConfig.map((categoryConfig: CategoryConfig, index: number) => {
        const key: number = index;
        return <CategoryCard key={key} {...categoryConfig} />;
      })}
    </section>
  );
}

export default Categories;
