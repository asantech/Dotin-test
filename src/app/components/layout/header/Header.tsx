import SignInButton from "./components/buttons/sign-in/SignInButton";
import SearchInput from "./components/inputs/search/SearchInput";
import SidebarToggleButton from "./components/buttons/sidebar-toggle/SidebarToggleButton";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={styles["header"]}>
      <SignInButton />
      <SearchInput />
      <SidebarToggleButton />
    </header>
  );
}

export default Header;
