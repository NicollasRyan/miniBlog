import styles from "./styles.module.css";

import { Link } from "react-router-dom";

export function PostsDetail({ post }) {
  return (
    <div>
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <p>{post.createdBy}</p>
      <div>
        {post.tagsArray.map((tag) => (
          <p key={tag}>
            <span>#</span>
            {tag}
          </p>
        ))}
      </div>
      <Link to={`/posts/${post.id}`} className="btn btn-outiline">
        Ler
      </Link>
    </div>
  );
}