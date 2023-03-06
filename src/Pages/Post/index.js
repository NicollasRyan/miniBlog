import styles from "./styles.module.css";

import { useParams } from "react-router-dom";

export function Post() {
  const { id } = useParams();
  return (
    <div>
      <h1>Post: {id}</h1>
    </div>
  );
}
