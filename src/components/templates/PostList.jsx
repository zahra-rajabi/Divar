import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { getMyPosts } from "services/user";
import { sp } from "utils/numbers";

function PostList() {
  const { data, isLoading } = useQuery({
    queryKey: ["MyPosts"],
    queryFn: getMyPosts,
  });

  console.log(data);

  return (
    <>
      <h3 className="w-full px-2 py-4 mb-10 text-lg font-medium border-b-2 border-b-RED sm:w-2/3 md:w-2/5">
        آگهی شما
      </h3>
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          data?.data.posts.map((post) => (
            <section
              key={post._id}
              className="flex flex-col justify-between gap-4 px-4 py-2 my-4 border-2 rounded cursor-pointer md:flex-row hover:bg-RED/10 hover:border-RED/20"
            >
              <div className="flex gap-8">
                <img
                  src={`http://localhost:3400${post.images[0]}`}
                  // src="divar.svg"
                  className="w-16 h-16"
                />
                <div>
                  <p className="font-medium">{post.options?.title}</p>
                  <span className="text-xs md:text-sm">
                    {post.options?.content}
                  </span>
                </div>
              </div>
              <div className="text-left">
                <p>{new Date(post.createdAt).toLocaleDateString("fa")}</p>
                <span>{sp(post.amount)} تومان</span>
              </div>
            </section>
          ))
        )}
      </div>
    </>
  );
}

export default PostList;
