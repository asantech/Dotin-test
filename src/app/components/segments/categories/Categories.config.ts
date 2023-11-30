import { t } from "@/localize/i18n";

export type CategoryConfig = {
  iconPath: string;
  imagePath: string;
  text: string;
  linkPath: string;
};

export const categoriesConfig: CategoryConfig[] = [
  {
    imagePath: "/assets/images/categories/progressive.jpg",
    iconPath: "/assets/svgs/icons/home/icons/live.svg",
    text: t("COMMON.LIVE_STREAMING"),
    linkPath: "#",
  },
  {
    imagePath: "/assets/images/categories/shop.png",
    iconPath: "/assets/svgs/icons/home/icons/shop.png",
    text: t("CATEGORIES.SHOP"),
    linkPath: "#",
  },
  {
    imagePath: "/assets/images/categories/movie.jpg",
    iconPath: "/assets/svgs/icons/home/icons/movie.svg",
    text: t("COMMON.FILM"),
    linkPath: "#",
  },
  {
    imagePath: "/assets/images/categories/audiobook.jpg",
    iconPath: "/assets/svgs/icons/home/icons/book.svg",
    text: t("COMMON.AUDIO_BOOK"),
    linkPath: "#",
  },
  {
    imagePath: "/assets/images/categories/podipay.jpg",
    iconPath: "/assets/svgs/icons/home/icons/cards.svg",
    text: t("COMMON.FINANCIAL_SERVICES"),
    linkPath: "#",
  },
  {
    imagePath: "/assets/images/categories/music.jpg",
    iconPath: "/assets/svgs/icons/home/icons/music.svg",
    text: t("COMMON.MUSIC"),
    linkPath: "#",
  },
];
