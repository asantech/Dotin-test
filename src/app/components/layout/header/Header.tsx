"use client";

import { useContext } from "react";
import Image from "next/image";
import { useMediaQuery, useWindowSize } from "usehooks-ts";
import clsx from "clsx";
import { t } from "@/localize/i18n";

import SignInButton from "./components/buttons/sign-in/SignInButton";
import SearchInput from "./components/inputs/search/SearchInput";
import SidebarToggleButton from "./components/buttons/sidebar-toggle/SidebarToggleButton";
import { SidebarToggleContext } from "@/app/context/SidebarToggle";
import styles from "./Header.module.scss";

function Header() {
  const { isCollapsed: isSidebarCollapsed } = useContext(SidebarToggleContext);
  const minWidth1200px: boolean = useMediaQuery("(min-width: 1200px)");
  const { width: windowWidth } = useWindowSize();

  if (!windowWidth) return <></>;
  return (
    <header
      className={clsx(
        styles["header"],
        minWidth1200px && isSidebarCollapsed && styles["is-expanded"],
        !minWidth1200px && styles["is-full-width"]
      )}
    >
      {minWidth1200px && (
        <>
          <SignInButton />
          <SearchInput />
          <SidebarToggleButton />
        </>
      )}
      {!minWidth1200px && (
        <Image
          src="/assets/svgs/icons/sidebar/logo.svg"
          alt={t("IMAGE.ALT.APP_LOGO")}
          width={35}
          height={30}
        />
      )}
    </header>
  );
}

export default Header;
