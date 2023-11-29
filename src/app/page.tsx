import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import Slider from "./components/segments/slider/Slider";
import Categories from "./components/segments/categories/Categories";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <Header />
      <Sidebar />
      <main>
        <Slider />
        <Categories />
      </main>
    </div>
  );
}
