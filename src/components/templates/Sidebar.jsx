import { useState } from "react";
import { TbCategoryPlus } from "react-icons/tb";
import { useSearchParams } from "react-router-dom";

function Sidebar({ data, show, setShow }) {
  const [showSideBar, setShowSideBar] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const showHandler = () => {
    if (!showSideBar) {
      setShowSideBar(true);
      if (show) setShow(false);
    } else setShowSideBar(false);
  };

  if (showSideBar) {
    if (show) setShowSideBar(false);
  }

  const queryStringHandler = (category) => {
    if (category.slug !== "all") {
      setSearchParams(`category=${category.slug}`);
    } else {
      setSearchParams("");
    }
  };
  return (
    <section className="relative xs:static w-fit">
      <h3
        className="flex items-center my-4 font-medium cursor-pointer xs:mt-8 xs:cursor-default"
        onClick={showHandler}
      >
        <span className="mx-2 xs:hidden">
          <TbCategoryPlus />
        </span>
        دسته بندی ها
      </h3>
      <ul
        className={`${
          showSideBar ? "right-0" : "-right-[500%]"
        } rounded  space-y-4 w-max mb-4 px-2 py-4 xs:px-0 xs:py-0 absolute xs:static transition-all shadow-lg duration-300 bg-gray-100 xs:bg-transparent xs:shadow-none `}
      >
        {data?.data.map((category) => (
          <li
            key={category._id}
            className={`flex gap-2 px-4 py-2 rounded hover:bg-BLACK/10  cursor-pointer ${
              searchParams.get("category") === category.slug &&
              "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => queryStringHandler(category)}
          >
            <img src={`${category.icon}.svg`} className=" size-6" />
            <span>{category.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Sidebar;
