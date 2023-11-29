import MenuItem from "./components/menu-item/MenuItem";
import { sidebarMenuItems } from "./Sidebar.config";
import styles from "./Sidebar.module.scss";

function Sidebar() {
  return (
    <aside className={styles["sidebar"]}>
      {sidebarMenuItems.map((sidebarMenuItem, index) => {
        const key: number = index;
        return (
          <MenuItem key={key} subMenItems={sidebarMenuItem.subMenuItems} />
        );
      })}
    </aside>
  );
}

export default Sidebar;
