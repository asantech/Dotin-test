import { t } from "@/localize/i18n";

import styles from "./SignInButton.module.scss";

function SignInButton() {
  return (
    <button className={styles["sign-in-button"]}>{t("BUTTON.SIGN_IN")}</button>
  );
}

export default SignInButton;
