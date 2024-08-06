import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getCategory } from "services/admin";
import { getAllPost } from "services/user";

function HomePage({ show, setShow }) {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });
  const { data: Data, isLoading: isloading } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  return isLoading || isloading ? (
    <Loader />
  ) : (
    <main className="flex flex-col gap-6 xs:flex-row md:gap-12">
      <Sidebar data={Data} show={show} setShow={setShow} />
      <Main data={data} />
    </main>
  );
}
export default HomePage;
