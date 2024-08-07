import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { getCategory } from "services/admin";
import { getCookie } from "utils/cookie";

function AddPost() {
  const [form, setFrom] = useState({
    title: "",
    content: "",
    city: "",
    amount: null,
    image: null,
    category: "",
  });
  const { data } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    setValue,
  } = useForm();

  const changeHandler = (e) => {
    if (e.target.name !== "image") {
      setFrom({ ...form, [e.target.name]: e.target.value });
    } else {
      setFrom({ ...form, [e.target.name]: e.target.files[0] });
    }
  };

  const submitHandler = () => {
    const formData = new FormData();
    for (const item in form) {
      formData.append(item, form[item]);
    }
    const token = getCookie("accessToken");

    axios
      .post(`${import.meta.env.VITE_BASE_URL}post/create`, formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("آگهی با موفقیت ایجاد شد.");
        for (const item in form) {
          if (item !== amount || item !== image) {
            setValue(item, "");
          } else {
            setValue(item, null);
          }
        }
      })
      .catch((error) => toast.error("مشکلی پیش آمده است."));
  };

  return (
    <form
      onSubmit={handleSubmit(submitHandler)}
      onChange={changeHandler}
      className="py-8 postForm"
    >
      <ToastContainer />
      <h3 className="px-2 py-4 mb-4 text-lg font-medium border-b-2 border-b-RED">
        افزودن آگهی
      </h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input
        autoComplete="off"
        type="text"
        id="title"
        {...register("title", {
          required: "عنوان آگهی را مشخص نمایید.",
        })}
        className={`categoryInput mb-6 ${
          errors?.title && "border-red-500 focus:border-red-500 mb-1"
        }`}
      />
      {errors?.title && <p className="categoryError">{errors.title.message}</p>}

      <label htmlFor="content">توضیحات</label>
      <textarea
        {...register("content", {
          required: "توضیحات آگهی نباید خالی باشد .",
        })}
        id="content"
        cols="30"
        rows="10"
        className={`categoryInput mb-6 ${
          errors?.content && "border-red-500 focus:border-red-500 mb-1"
        }`}
      />
      {errors?.content && (
        <p className="categoryError">{errors.content.message}</p>
      )}

      <label htmlFor="amount">قیمت</label>
      <input
        autoComplete="off"
        type="text"
        id="amount"
        {...register("amount", {
          required: "قیمت آگهی را مشخص نمایید.",
          pattern: {
            value: /[0-9]/,
            message: "مقدار صحیح قیمت را وارد نمایید",
          },
        })}
        className={`categoryInput mb-6 ${
          errors?.amount && "border-red-500 focus:border-red-500 mb-1"
        }`}
      />
      {errors?.amount && (
        <p className="categoryError">{errors.amount.message}</p>
      )}

      <label htmlFor="city">شهر</label>
      <input
        autoComplete="off"
        type="text"
        id="city"
        {...register("city", {
          required: "شهر آگهی را مشخص نمایید.",
        })}
        className={`categoryInput mb-6 ${
          errors?.city && "border-red-500 focus:border-red-500 mb-1"
        }`}
      />
      {errors?.city && <p className="categoryError">{errors.city.message}</p>}

      <label htmlFor="category">دسته بندی</label>
      <select
        {...register("category", {
          required: "دسته بندی آگهی را مشخص نمایید.",
        })}
        id="category"
        className={`categoryInput mb-6 ${
          errors?.category && "border-red-500 focus:border-red-500 mb-1"
        }`}
      >
        {data?.data.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {errors?.category && (
        <p className="categoryError">{errors.category.message}</p>
      )}

      <label htmlFor="image">تصویر</label>
      <input
        autoComplete="off"
        type="file"
        id="image"
        {...register("image", {
          required: "آگهی باید شامل تصویر باشد.",
        })}
        className={`categoryInput mb-6 ${
          errors?.image && "border-red-500 focus:border-red-500 mb-1"
        }`}
      />
      {errors?.image && <p className="categoryError">{errors.image.message}</p>}

      <button className=" button" type="submit">
        ایجاد آگهی
      </button>
      <button className="px-4 py-1 border rounded text-RED border-RED">
        <Link to="/">مشاهده پست ها</Link>
      </button>
    </form>
  );
}

export default AddPost;
