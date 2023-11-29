import SubMenuItem, { SubMenuItemConfig } from "../sub-menu-item/SubMenuItem";

type MenuItemProps = {
  subMenItems?: SubMenuItemConfig[];
};

function MenuItem({ subMenItems }: Readonly<MenuItemProps>) {
  return (
    <>
      {subMenItems?.map((subMenItem: SubMenuItemConfig, index: number) => {
        const key: number = index;
        return <SubMenuItem key={key} subMenItem={subMenItem} />;
      })}
    </>
  );
}

export default MenuItem;
