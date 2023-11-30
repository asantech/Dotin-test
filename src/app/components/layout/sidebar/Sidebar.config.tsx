import { t } from "@/localize/i18n";

import { SubMenuItemConfig } from "./components/sub-menu-item/SubMenuItem";

export type SidebarMenuItem = {
  icon: string;
  activeIcon: string;
  text: string;
  subMenuItems?: SubMenuItemConfig[];
};

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    icon: "/assets/svgs/icons/sidebar/expandHover/home-2.svg",
    activeIcon: "/assets/svgs/icons/sidebar/collapseActive/home-2.svg",
    text: t("COMMON.MAIN_PAGE"),
  },
  {
    icon: "/assets/svgs/icons/sidebar/expandHover/video.svg",
    activeIcon: "/assets/svgs/icons/sidebar/collapseActive/video.svg",
    text: t("SIDEBAR.MENU_ITEM.IMAGING_SERVICES"),
    subMenuItems: [
      {
        text: t("COMMON.FILM"),
        linkPath: "#",
      },
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.SOAP_OPERA"),
        linkPath: "#",
      },
      {
        text: t("COMMON.LIVE_STREAMING"),
        linkPath: "#",
      },
    ],
  },
  {
    icon: "/assets/svgs/icons/sidebar/expandHover/music.svg",
    activeIcon: "/assets/svgs/icons/sidebar/collapseActive/music.svg",
    text: t("SIDEBAR.MENU_ITEM.AUDIO_SERVICES"),
    subMenuItems: [
      {
        text: t("COMMON.MUSIC"),
        linkPath: "#",
      },
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.PODCAST"),
        linkPath: "#",
      },
      {
        text: t("COMMON.AUDIO_BOOK"),
        linkPath: "#",
      },
    ],
  },
  {
    icon: "/assets/svgs/icons/sidebar/expandHover/empty-wallet.svg",
    activeIcon: "/assets/svgs/icons/sidebar/collapseActive/empty-wallet.svg",
    text: t("COMMON.FINANCIAL_SERVICES"),
    subMenuItems: [
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.WALLET_TOP_UP"),
        linkPath: "#",
      },
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.FEE_PAYMENTS"),
        linkPath: "#",
      },
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.PURCHASE_INTERNET_PACKAGE"),
        linkPath: "#",
      },
      {
        text: t("SIDEBAR.SUB_MENU_ITEM.SIM_CARD_TOP_UP"),
        linkPath: "#",
      },
    ],
  },
  {
    icon: "/assets/svgs/icons/sidebar/expandHover/task-square.svg",
    activeIcon: "/assets/svgs/icons/sidebar/collapseActive/task-square.svg",
    text: t("COMMON.MY_LIST"),
  },
];
