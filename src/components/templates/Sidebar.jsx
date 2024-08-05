import { useQuery } from "@tanstack/react-query";
import { getCategory } from "services/admin";

function Sidebar() {
  const { data } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  return (
    <section>
      <h3 className="my-8 font-medium">دسته بندی ها</h3>
      <ul className="space-y-4">
        {data?.data.map((category) => (
          <li key={category._id} className="flex gap-2">
            <img src={`${category.icon}.svg`} className="size-6" />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
