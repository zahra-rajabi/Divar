import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoIosClose } from "react-icons/io";

import { useState } from "react";

function Header() {
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
          className="block sm:hidden size-8 text-BLACK"
          onClick={showHandler}
        />
      )}
      <div
        className={`sm:hidden flex flex-col gap-4 fixed transition-all duration-300 w-2/5 px-4 py-2  inset-y-0 ${
          show ? "left-0  bg-gray-300 " : "-left-full"
        }`}
      >
        <IoIosClose
          className="block md:hidden size-10 text-BLACK"
          onClick={closeHandler}
        />
        <Link to="/auth">
          <span className="flex items-center gap-1">
            <img src="profile.svg" />
            <p>دیوار من</p>
          </span>
        </Link>

        <Link to="/dashboard">ثبت آگهی</Link>
      </div>
    </header>
  );
}

export default Header;
