import { useQuery } from "@tanstack/react-query";
import Loader from "components/modules/Loader";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllPost } from "services/user";
import { CiWarning } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";
import { e2p, sp } from "utils/numbers";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function SinglePostPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["AllPosts"],
    queryFn: getAllPost,
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const post = data?.data.posts.find((item) => item._id === id);

  return isLoading ? (
    <Loader />
  ) : (
    <section className="flex flex-col justify-between gap-4 my-8 xlg:flex-row">
      <div className="w-full">
        {" "}
        <div
          className="flex items-center gap-2 mb-4 cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <IoIosArrowForward />
          <Link>بازگشت</Link>
        </div>
        <h3 className="pb-6 mb-8 text-2xl font-medium border-b xlg:text-4xl">
          {post?.options.title}
        </h3>
        <p className="pb-6 mb-4 border-b text-md xlg:text-lg text-GRAY ">
          <span>آگهی شده در </span>
          <span>{new Date(post?.createdAt).toLocaleDateString("fa")}</span>
        </p>
        <div
          className="flex items-center justify-between pb-6 mb-4 border-b cursor-pointer text-md xlg:text-lg"
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
        <p className="mb-8 text-md xlg:text-lg text-GRAY">
          <span>قیمت </span>
          <span>{e2p(sp(post?.amount))} تومان</span>
        </p>
        <div>
          <h2 className="px-4 py-2 mb-4 font-bold bg-gray-200 rounded text-md xlg:text-lg text-RED">
            توضیحات
          </h2>
          <p>{post?.options.content}</p>
        </div>
      </div>
      <div className="object-center w-full px-4 py-2 rounded shadow xlg:w-2/3">
        <img src="/divar.svg" alt={post.options.title} className="w-full " />
      </div>
    </section>
  );
}

export default SinglePostPage;
