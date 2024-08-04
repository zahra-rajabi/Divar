import { useMutation, useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { deletCategory, getCategory } from "services/admin";
import { FiTrash } from "react-icons/fi";

function CategoryList() {
  const { data, isPending, refetch } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  const { mutate } = useMutation({
    mutationFn: deletCategory,
  });
  const clickHandler = (id) => {
    console.log("clicked");
    mutate(id);
    refetch("Categories");
  };

  return (
    <div className="mb-10 categoryForm">
      <h2 className="px-2 py-4 mb-4 text-lg font-medium border-b border-b-GRAY">
        دسته بندی ها
      </h2>
      {isPending ? (
        <Loader />
      ) : (
        <table>
          <thead className="text-white bg-BLACK">
            <th>icon</th>
            <th>slug</th>
            <th>name</th>
            <th>delete</th>
          </thead>
          <tbody>
            {data?.data.map((i) => (
              <tr key={i._id}>
                <td>
                  <img src={`${i.icon}.svg`} alt={i.name} />
                </td>
                <td>{i.slug}</td>
                <td>{i.name}</td>
                <td onClick={() => clickHandler(i._id)}>
                  <FiTrash className="mx-auto cursor-pointer hover:text-RED size-5" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CategoryList;
