import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { addCategory } from "services/admin";

function CategoryForm() {
  const [categoryForm, setCategoryForm] = useState({
    name: "",
    slug: "",
    icon: "",
  });
  const [visible, isVisible] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const { mutate, isPending, isSuccess } = useMutation({
    mutationFn: addCategory,
  });

  const changeHandler = (e) => {
    setCategoryForm({ ...categoryForm, [e.target.id]: e.target.value });
  };
  const submitHandler = async () => {
    mutate(categoryForm);
    setValue("name", "");
    setValue("slug", "");
    setValue("icon", "");
    isVisible(true);

    setTimeout(() => isVisible(false), 3000);
  };

  return (
    <form
      onChange={changeHandler}
      onSubmit={handleSubmit(submitHandler)}
      className="categoryForm"
    >
      <h3 className="px-2 py-4 mb-8 text-lg font-medium border-b-2 border-RED">
        دسته بندی جدید
      </h3>
      {isSuccess && visible && (
        <p className="p-2 mb-4 text-white rounded bg-RED">
          دسته بندی با موفقیت اضافه شد!
        </p>
      )}
      <label htmlFor="name"> اسم دسته بندی :</label>
      <input
        autoComplete="off"
        className={`categoryInput ${
          !errors?.name ? "mb-3" : "border-red-500 focus:border-red-500"
        }`}
        type="text"
        {...register("name", {
          required: "وارد کردن نام دسته بندی الزامی است",
        })}
        id="name"
      />
      {errors?.name && <p className="categoryError">{errors.name.message}</p>}

      <label htmlFor="slug">slug :</label>
      <input
        type="text"
        {...register("slug", {
          required: "وارد کردن slug الزامی است",
        })}
        id="slug"
        autoComplete="off"
        className={`categoryInput ${
          !errors?.slug ? "mb-3" : "border-red-500 focus:border-red-500"
        }`}
      />
      {errors?.slug && <p className="categoryError">{errors.slug.message}</p>}
      <label htmlFor="icon">آیکون :</label>
      <input
        type="text"
        {...register("icon", {
          required: "وارد کردن آیکون الزامی است",
        })}
        id="icon"
        autoComplete="off"
        className={`categoryInput ${
          !errors?.icon ? "mb-3" : "border-red-500 focus:border-red-500"
        }`}
      />
      {errors?.icon && <p className="categoryError">{errors.icon.message}</p>}

      <button
        type="submit"
        className={`my-8 button disabled:bg-LIGHT_RED `}
        disabled={isPending}
      >
        ایجاد دسته بندی
      </button>
    </form>
  );
}

export default CategoryForm;
