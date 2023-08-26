import { Button } from "cutie-ui";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className={styles.root}>
      <div className="container">
        <header className={styles.header}>
          <div className={styles.header__left}>
            <Link to="/">
              <img src="./assets/freetogame-logo.png" alt="logo" />
            </Link>
          </div>
          <div className={styles.header__right}>
            <Button variant="outlined" size="large">
              Присоединиться
            </Button>
          </div>
        </header>
      </div>
    </div>
  );
};
