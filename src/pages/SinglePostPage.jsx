import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { useParams } from "react-router-dom";
import { getAllPost } from "services/user";
import { e2p, sp } from "utils/numbers";

function SinglePostPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });
  const { id } = useParams();
  const post = data?.data.posts.find((item) => item._id === id);
  console.log(post);
  return isLoading ? (
    <Loader />
  ) : (
    <section>
      <div>
        <h3>{post?.options.title}</h3>
        <p>
          <span>آگهی شده در </span>
          <span>{new Date(post?.createdAt).toLocaleDateString("fa")}</span>
        </p>
        <p>
          <span>قیمت </span>
          <span>{e2p(sp(post?.amount))}</span>
        </p>
        <div>
          <h2>توضیحات</h2>
          <p>{post?.options.content}</p>
        </div>
      </div>
      <div>
        <img src="/divar.svg" alt={post.options.title} />
      </div>
    </section>
  );
}

export default SinglePostPage;
