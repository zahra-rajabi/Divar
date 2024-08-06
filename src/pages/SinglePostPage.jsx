import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { getAllPost } from "services/user";
import { CiWarning } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { e2p, sp } from "utils/numbers";

function SinglePostPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const post = data?.data.posts.find((item) => item._id === id);
  console.log(post);
  return isLoading ? (
    <Loader />
  ) : (
    <section className="flex justify-between gap-4 my-8">
      <div className="w-full">
        <h3 className="pb-6 mb-8 text-4xl font-medium border-b">
          {post?.options.title}
        </h3>

        <p className="pb-6 mb-4 text-lg border-b text-GRAY ">
          <span>آگهی شده در </span>
          <span>{new Date(post?.createdAt).toLocaleDateString("fa")}</span>
        </p>
        <div
          className="flex items-center justify-between pb-6 mb-4 text-lg border-b cursor-pointer"
          onClick={() => navigate("/danger")}
        >
          <p className="flex items-center gap-2">
            <span>
              <CiWarning />
            </span>
            <span>زنگ خطر های قبل معامله </span>
          </p>
          <FaArrowLeftLong />
        </div>
        <p className="mb-8 text-lg text-GRAY">
          <span>قیمت </span>
          <span>{e2p(sp(post?.amount))} تومان</span>
        </p>
        <div>
          <h2 className="px-4 py-2 mb-4 text-lg font-bold bg-gray-200 rounded text-RED">
            توضیحات
          </h2>
          <p>{post?.options.content}</p>
        </div>
      </div>
      <div className="object-center w-2/3 px-4 py-2 rounded shadow">
        <img src="/divar.svg" alt={post.options.title} className="w-full " />
      </div>
    </section>
  );
}

export default SinglePostPage;
