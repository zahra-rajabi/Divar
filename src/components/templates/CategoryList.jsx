import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { deletCategory, getCategory } from "services/admin";
import { FiTrash } from "react-icons/fi";
import { useState } from "react";

function CategoryList() {
  const queryClient = useQueryClient();
  const [Show, isShow] = useState(false);
  const { data, isLoading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  const { mutate, isSuccess } = useMutation({
    mutationFn: deletCategory,
    onSuccess: () => queryClient.refetchQueries(),
  });
  const deleteHandler = (id) => {
    mutate(id);
    queryClient.invalidateQueries("Categories");
    isShow(true);
    setTimeout(() => isShow(false), 3000);
  };

  return (
    <div className="mb-10 categoryForm">
      <h2 className="px-2 py-4 mb-4 text-lg font-medium border-b border-b-GRAY">
        دسته بندی ها
      </h2>{" "}
      {isSuccess && Show && (
        <p className="p-2 mb-4 text-white rounded bg-RED">
          دسته بندی با موفقیت حذف شد!
        </p>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <table>
          <thead className="text-white bg-BLACK">
            <tr>
              <th>icon</th>
              <th>slug</th>
              <th>name</th>
              <th>delete</th>
            </tr>
          </thead>
          <tbody>
            {data?.data.map((i) => (
              <tr key={i._id}>
                <td>
                  <img src={`${i.icon}.svg`} alt={i.name} />
                </td>
                <td>{i.slug}</td>
                <td>{i.name}</td>
                <td>
                  <FiTrash
                    className="mx-auto cursor-pointer hover:text-RED size-5"
                    onClick={() => deleteHandler(i._id)}
                  />
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
