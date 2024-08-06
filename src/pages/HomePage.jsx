import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getCategory } from "services/admin";
import { getAllPost } from "services/user";

function HomePage({ open, setOpen }) {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });
  const { data: Data, isLoading: isloading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  console.log({ data });
  return isLoading || isloading ? (
    <Loader />
  ) : (
    <main className="flex flex-col gap-6 overflow-hidden xs:flex-row md:gap-12">
      <Sidebar data={Data} open={open} setOpen={setOpen} />
      <Main data={data} />
    </main>
  );
}
export default HomePage;
