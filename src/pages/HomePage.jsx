import { useQuery } from "@tanstack/react-query";
import Main from "components/templates/Main";
import Sidebar from "components/templates/Sidebar";
import { getAllPost } from "services/user";

function HomePage() {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });

  console.log({ data });
  return (
    <main className="flex justify-between">
      <Sidebar />
      <Main />
    </main>
  );
}
export default HomePage;
