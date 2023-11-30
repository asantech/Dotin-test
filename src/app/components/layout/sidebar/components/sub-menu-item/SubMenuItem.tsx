import Link from "next/link";

import styles from "./SubMenuItem.module.scss";

export type SubMenuItemConfig = {
  text: string;
  linkPath: string;
};

type SubMenuItemProps = {
  subMenItem: SubMenuItemConfig;
};

function SubMenuItem({ subMenItem }: Readonly<SubMenuItemProps>) {
  const { linkPath, text } = subMenItem;
  return (
    <Link href={linkPath} className={styles["sub-menu-item"]}>
      <li>{text}</li>
    </Link>
  );
}

export default SubMenuItem;
