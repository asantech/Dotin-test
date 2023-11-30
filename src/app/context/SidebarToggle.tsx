"use client";

import { createContext, useState, useMemo } from "react";

type SidebarToggleValueType = {
  isCollapsed: boolean;
  toggleSidebar: (isCollapsed: boolean) => void;
};

const initialState: SidebarToggleValueType = {
  isCollapsed: false,
  toggleSidebar: (isCollapsed: boolean) => {},
};

const SidebarToggleContext = createContext(initialState);
SidebarToggleContext.displayName = "SidebarToggleContext";

const SidebarToggleProvider = ({ children }: any) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(
    initialState.isCollapsed
  );

  const toggleSidebar = (collapseState: boolean) => {
    setIsCollapsed(collapseState);
  };

  const value = useMemo(
    () => ({
      isCollapsed,
      toggleSidebar,
    }),
    [isCollapsed]
  );

  return (
    <SidebarToggleContext.Provider value={value}>
      {children}
    </SidebarToggleContext.Provider>
  );
};
export { SidebarToggleContext, SidebarToggleProvider };
