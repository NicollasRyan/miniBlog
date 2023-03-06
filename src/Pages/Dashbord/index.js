import styles from "./styles.module.css";

import { Link } from "react-router-dom";

import { useAuthValue } from "../../context/AuthContext";
import { usefetchDocuments } from "../../hooks/useFetchDocuments";

export function Dashboard() {
  const { user } = useAuthValue();
  const uid = user.uid;

  const posts = [];
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts === 0 ? (
        <div>
          <p>tem posts!</p>
        </div>
      ) : (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn">
            Criar primeiro post
          </Link>
        </div>
      )}
    </div>
  );
}
