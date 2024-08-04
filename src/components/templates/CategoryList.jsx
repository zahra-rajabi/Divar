import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

function CategoryList() {
  const { data, isPending } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });
  console.log({ data, isPending });
  return <div>CategoryList</div>;
}

export default CategoryList;
