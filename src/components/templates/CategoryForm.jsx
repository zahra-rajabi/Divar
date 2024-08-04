import { useState } from "react";
import { useForm } from "react-hook-form";

function CategoryForm() {
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const changeHandler = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.id]: e.target.value });
  };
  const submitHandler = (e) => {
    console.log(categoryForm);
  };

  return (
    <form onChange={changeHandler} onSubmit={handleSubmit(submitHandler)}>
      <h3>دسته بندی جدید</h3>
      <label htmlFor="name"> اسم دسته بندی :</label>
      <input
        type="text"
        {...register("name", {
          required: "وارد کردن نام دسته بندی الزامی است",
        })}
        id="name"
      />
      <label htmlFor="slug">slug :</label>
      <input type="text" {...register("slug")} id="slug" />
      <label htmlFor="icon">آیکون</label>
      <input type="text" {...register("icon")} id="icon" />
      <button type="submit">ایجاد دسته بندی</button>
    </form>
  );
}

export default CategoryForm;
