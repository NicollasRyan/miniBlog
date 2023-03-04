import styles from "./styles.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";

export function Home() {
  const [query, setQuery] = useState("");
  const [posts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts</h1>
      <form onSubmit={handleSubmit} className={styles.search_form}>
        <input
          type="text"
          placeholder="Ou busque por tags..."
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        <h2>Posts...</h2>
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados post</p>
            <Link to="/posts/create" className="btn">
              Criar Primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
