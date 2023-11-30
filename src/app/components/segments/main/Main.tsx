"use client";

import { useContext } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useWindowSize, useMediaQuery } from "usehooks-ts";
import clsx from "clsx";

import { SidebarToggleContext } from "@/app/context/SidebarToggle";
import Slider from "../slider/Slider";
import Categories from "../categories/Categories";
import styles from "./Main.module.scss";

const queryClient = new QueryClient();

export default function Main() {
  const { width: windowWidth } = useWindowSize();
  const minWidth1200px: boolean = useMediaQuery("(min-width: 1200px)");
  const { isCollapsed: isSidebarCollapsed } = useContext(SidebarToggleContext);

  if (!windowWidth) return <></>;
  return (
    <main
      className={clsx(
        styles.main,
        !minWidth1200px && styles["is-full-width"],
        minWidth1200px && isSidebarCollapsed && styles["is-expanded"]
      )}
    >
      <QueryClientProvider client={queryClient}>
        <Slider
          windowWidth={windowWidth}
          isSidebarCollapsed={isSidebarCollapsed}
        />
      </QueryClientProvider>
      <Categories />
    </main>
  );
}
