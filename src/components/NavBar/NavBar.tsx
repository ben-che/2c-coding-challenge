import { useState } from "react";
import styles from "./NavBar.module.css";
import logo from "./assets/Logo.png";
import settings from "./assets/settings.png";
import menuIcon from "./assets/menu.png";
import notifs from "./assets/notifs.png";
import user from "./assets/user.png";
import { SearchInput } from "./components";

interface Props {
  handleSearch: (input: string) => void;
}

export function NavBar({ handleSearch }: Props) {
  // Because I'm rendering two different instances of the <SearchInput /> component due
  // to it appearing in two different places when the scree size changes, I need to lift
  // the search input state to this component such that its shared between instances;
  // otherwise, when the user searches for something and the screen size changes, the
  // input fields will have different strings altogether
  const [input, setInput] = useState("");
  const [error, setError] = useState("");

  function handleInputChange(input: string) {
    if (input !== "" && !input.match(/^[0-9a-zzA-Z]+$/)) {
      setError("Invalid character - please enter letters or numbers only.");
    } else {
      setError("");
    }

    setInput(input);
  }

  return (
    <>
      <nav className={styles.MobileNavigationContainer}>
        <div>
          <img src={logo} alt="Storm logo" />
          <img src={menuIcon} alt="menu icon for mobile" />
        </div>
        <SearchInput
          input={input}
          handleSearch={() => handleSearch(input)}
          handleInputChange={handleInputChange}
          error={error}
        />
      </nav>
      <nav className={styles.DesktopNavigationContainer}>
        <img src={logo} alt="Storm logo" />
        <SearchInput
          input={input}
          handleSearch={() => handleSearch(input)}
          handleInputChange={handleInputChange}
          error={error}
        />
        <div>
          <img src={settings} alt="settings icon" />
          <img src={notifs} alt="notifications icon" />
          <img src={user} alt="user icon" />
          <p className={styles.NavigationProfileName}>Ben Che</p>
        </div>
      </nav>
    </>
  );
}
