import { NavLink } from "react-router-dom";

import styles from "./styles.module.css";

export function Navbar() {
  return (
    <nav>
      <NavLink to="/">
        mini <span>Blog</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
}
