import Header from "./components/layout/header/Header";
import Sidebar from "./components/layout/sidebar/Sidebar";
import FooterNavigator from "./components/layout/footer-navigator/FooterNavigator";

import { SidebarToggleProvider } from "./context/SidebarToggle";
import Main from "./components/segments/main/Main";

export default function Home() {
  return (
    <>
      <SidebarToggleProvider>
        <Header />
        <Sidebar />
        <Main />
      </SidebarToggleProvider>
      <FooterNavigator />
    </>
  );
}
