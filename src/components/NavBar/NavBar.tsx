import styles from "./NavBar.module.css";
import logo from "./assets/Logo.png";
import settings from "./assets/settings.png";
import menuIcon from "./assets/menu.png";
import notifs from "./assets/notifs.png";
import user from "./assets/user.png";
import { SearchInput } from "./components";

export function NavBar() {
  return (
    <>
      <nav className={styles.MobileNavigationContainer}>
        <div>
          <img src={logo} />
          <img src={menuIcon} />
        </div>
        <SearchInput />
      </nav>
      <nav className={styles.DesktopNavigationContainer}>
        <img src={logo} />
        <SearchInput />
        <div>
          <img src={settings} />
          <img src={notifs} />
          <img src={user} />
          <p className={styles.NavigationProfileName}>Ben Che</p>
        </div>
      </nav>
    </>
  );
}
