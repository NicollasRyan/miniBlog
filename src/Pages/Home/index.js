import styles from "./styles.module.css";

import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

export function Home() {
  const [query, setQuery] = useState("");
  const { documents, loading } = useFetchDocuments("posts");

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
        {loading && <p>Carregando...</p>}
        {documents && documents.map((post) => <h3>{post.title}</h3>)}
        {documents && documents.length === 0 && (
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
