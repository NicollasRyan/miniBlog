import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { useQuery } from "../../hooks/useQuery";

export function Search() {
  const query = useQuery();
  const search = query.get("q");
  return (
    <div>
      <h2>Search</h2>
      <p>{search}</p>
    </div>
  );
}
