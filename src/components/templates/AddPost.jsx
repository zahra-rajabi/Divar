import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { getCategory } from "services/admin";

function AddPost() {
  const { data } = useQuery({
    queryKey: ["Categories"],
    queryFn: getCategory,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const changeHandler = (e) => {
    console.log(e.target);
  };

  const submitHandler = () => {
    console.log("sent");
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)} onChange={changeHandler}>
      <h3 className="px-2 py-4 mb-4 text-lg font-medium border-b-2 border-b-RED">
        افزودن آگهی
      </h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input type="text" id="title" {...register("title")} />

      <label htmlFor="content">توضیحات</label>
      <textarea {...register("content")} id="content" cols="30" rows="10" />

      <label htmlFor="amount">قیمت</label>
      <input type="text" id="amount" {...register("amount")} />

      <label htmlFor="city">شهر</label>
      <input type="text" id="city" {...register("city")} />

      <label htmlFor="category">دسته بندی</label>
      <select {...register("category")} id="category">
        {data?.data.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>

      <label htmlFor="image">تصویر</label>
      <input type="file" id="image" {...register("image")} />

      <button className="button" type="submit">
        ایجاد آگهی
      </button>
    </form>
  );
}

export default AddPost;
