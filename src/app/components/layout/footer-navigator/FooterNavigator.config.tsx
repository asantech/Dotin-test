import { t } from "@/localize/i18n";

export type FooterNavigatorMenuItem = {
  icon: string;
  activeIcon: string;
  text: string;
};

export const footerNavigatorMenuItems: FooterNavigatorMenuItem[] = [
  {
    icon: "/assets/svgs/icons/navigation/home-2.svg",
    activeIcon: "/assets/svgs/icons/navigation/active/home-2.svg",
    text: t("COMMON.MAIN_PAGE"),
  },
  {
    icon: "/assets/svgs/icons/navigation/search.svg",
    activeIcon: "/assets/svgs/icons/navigation/active/search.svg",
    text: t("COMMON.SEARCH"),
  },
  {
    icon: "/assets/svgs/icons/navigation/myList.svg",
    activeIcon: "/assets/svgs/icons/navigation/active/myList.svg",
    text: t("COMMON.MY_LIST"),
  },
  {
    icon: "/assets/svgs/icons/navigation/profile.svg",
    activeIcon: "/assets/svgs/icons/navigation/active/profile.svg",
    text: t("FOOTER_NAVIGATOR.PROFILE"),
  },
  {
    icon: "/assets/svgs/icons/navigation/more.svg",
    activeIcon: "/assets/svgs/icons/navigation/active/more.svg",
    text: t("FOOTER_NAVIGATOR.MORE"),
  },
];
