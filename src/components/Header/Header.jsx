import React from "react";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className={classes.Header}>
      <div className={classes.Header__inner}>
        <Link to="/" className={classes.Header__name}>
          МГТПарсер
        </Link>
        <nav className={classes.Header__nav}>
          <Link to="/" className={classes.Nav__elem}>
            Главная
          </Link>
          <Link to="/parser" className={classes.Nav__elem}>
            Парсер
          </Link>
          <Link to="/faq" className={classes.Nav__elem}>
            FAQ
          </Link>
        </nav>
        <Link to="/profile" className={classes.Nav__elem}>
          Профиль
        </Link>
      </div>
    </header>
  );
}
