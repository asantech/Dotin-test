import { SubMenuItemConfig } from "./components/sub-menu-item/SubMenuItem";

type SidebarMenuItem = {
  icon: string;
  text: string;
  subMenuItems?: SubMenuItemConfig[];
};

export const sidebarMenuItems: SidebarMenuItem[] = [
  {
    icon: "",
    text: "صفحه اصلی",
  },
  {
    icon: "",
    text: "خدمات تصویری",
    subMenuItems: [
      {
        text: "فیلم",
        linkPath: "",
      },
      {
        text: "سریال",
        linkPath: "",
      },
      {
        text: "پخش زنده",
        linkPath: "",
      },
    ],
  },
  {
    icon: "",
    text: "خدمات صوتی",
    subMenuItems: [
      {
        text: "موسیقی",
        linkPath: "",
      },
      {
        text: "پادکست",
        linkPath: "",
      },
      {
        text: "کتاب صوتی",
        linkPath: "",
      },
    ],
  },
  {
    icon: "",
    text: "خدمات مالی",
    subMenuItems: [
      {
        text: "شارژ کیف پول",
        linkPath: "",
      },
      {
        text: "پرداخت قبض",
        linkPath: "",
      },
      {
        text: "خرید بسته اینترنت",
        linkPath: "",
      },
      {
        text: "شارژ سیم کارت",
        linkPath: "",
      },
    ],
  },
  {
    icon: "",
    text: "لیست من",
  },
];
