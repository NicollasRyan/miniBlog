import styles from "./styles.module.css";

import { useParams } from "react-router-dom";
import { useFetchDocument } from "../../hooks/useFetchDocument";

export function Post() {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <div>
      {loading && <p>Carregando...</p>}
      {post && (
        <>
          <h1>{post.title}</h1>
        </>
      )}
    </div>
  );
}
