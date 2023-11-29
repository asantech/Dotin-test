import Link from "next/link";

export type SubMenuItemConfig = {
  text: string;
  linkPath: string;
};

type SubMenuItemProps = {
  subMenItem: SubMenuItemConfig;
};

function SubMenuItem({ subMenItem }: Readonly<SubMenuItemProps>) {
  const { linkPath, text } = subMenItem;
  return <Link href={linkPath}>{text}</Link>;
}

export default SubMenuItem;
