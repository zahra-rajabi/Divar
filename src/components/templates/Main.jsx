import { useNavigate } from "react-router-dom";
import { e2p, sp } from "utils/numbers";

function Main({ data }) {
  const navigate = useNavigate();

  return (
    <section className="flex flex-wrap w-full gap-8 xs:my-8 ">
      {data?.data.posts.map((post) => (
        <div
          className="lg:w-[30%] sm:w-[45%] w-full border-2 flex flex-col-reverse  xs:flex-row justify-between px-4 py-2 rounded hover:bg-gray-100 cursor-pointer"
          key={post._id}
          onClick={() => navigate(`/posts/${post._id}`)}
        >
          <div className="space-y-8">
            <p className="py-2 font-medium">{post.options.title}</p>
            <div className="space-y-2 text-left xs:text-right">
              <p>{e2p(sp(post.amount))} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <div className="w-full xs:w-1/3">
            <img src="divar.svg" className="w-full h-20" />
          </div>
        </div>
      ))}
    </section>
  );
}

export default Main;
