import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "services/user";
import Confirm from "components/modules/Confirm";

function Header() {
  const [open, setOpen] = useState(false);

  const { data, refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const [show, setShow] = useState(false);
  const showHandler = () => {
    setShow(true);
  };

  const closeHandler = () => {
    setShow(false);
  };

  return (
    <header className="flex flex-wrap items-center justify-between px-1 py-2 border-b-2">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src="divar.svg" className="w-12 h-12" />
        </Link>
        <span className="flex items-center gap-1 px-6 border-r-2 ">
          <img src="location.svg" />
          <p>تهران</p>
        </span>
      </div>

      <div className="items-center hidden gap-8 sm:flex">
        <Link to="/auth">
          <span className="flex items-center gap-1">
            <img src="profile.svg" />
            <p>دیوار من</p>
          </span>
        </Link>
        <Link to="/dashboard" className="button">
          ثبت آگهی
        </Link>
      </div>
      {!show && (
        <IoMenu
          className="block cursor-pointer sm:hidden size-8 text-BLACK"
          onClick={showHandler}
        />
      )}
      <div
        className={`sm:hidden flex flex-col gap-4 fixed transition-all duration-300 w-1/2  px-4 py-2  inset-y-0 ${
          show ? "left-0  bg-gray-100 shadow-2xl" : "-left-full"
        }`}
      >
        <div className="flex justify-end w-full md:hidden text-BLACK">
          <IoIosClose
            onClick={closeHandler}
            className="cursor-pointer size-10"
          />
        </div>
        <Link to="/" onClick={closeHandler}>
          خانه
        </Link>
        {data && data.data.role === "ADMIN" && (
          <Link to="/admin" onClick={closeHandler}>
            پنل ادمین
          </Link>
        )}
        <Link to="/auth" onClick={closeHandler}>
          دیوار من
        </Link>
        <Link to="/dashboard" onClick={closeHandler}>
          ثبت آگهی
        </Link>
        {data && (
          <>
            <Link onClick={() => setOpen(true)}>خروج</Link>
            <Confirm
              open={open}
              setOpen={setOpen}
              setShow={setShow}
              refetch={refetch}
            />
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
