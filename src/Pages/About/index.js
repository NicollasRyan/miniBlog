import { Link } from "react-router-dom";

import styles from "./styles.module.css";

export function About() {
  return (
    <div className={styles.about}>
      <h1>
        Sobre o Mini <span>Blog</span>
      </h1>
      <p>
        Este projeto consiste em um blog feito com react no front-end e firebase
        no back-end
      </p>
      <Link to="/posts/create" className="btn">
        Criar post
      </Link>
    </div>
  );
}
