import { useForm } from "react-hook-form";
import { checkOTP } from "services/auth";
import { setCookie } from "utils/cookie";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { getProfile } from "services/user";
import { useQuery } from "@tanstack/react-query";
import { e2p, p2e } from "utils/numbers";

function CheckOTP({ code, setCode, setStep, mobileNumber }) {
  const navigate = useNavigate();
  const { refetch } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const submitHandler = async () => {
    const { response, error } = await checkOTP(p2e(mobileNumber), p2e(code));
    if (error) console.log(error.response.data.message);
    if (response)
      setCookie({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
    navigate("/");
    refetch(["profile"]);
    console.clear();
  };
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit(submitHandler)} className="form">
        <p className="title">ورود به حساب کاربری</p>
        <div className="form-box">
          <p className="label">
            <label htmlFor="code"> کد تأیید را وارد کنید</label>
          </p>
          <p className="description">
            کد پیامک‌شده به شمارۀ <span> {mobileNumber} </span>را وارد کنید.
          </p>
          <div
            className={` w-full border-2 border-GRAY/60 hover:border-GRAY/100 p-2 my-4  rounded ${
              errors?.code
                ? "border-red-500  focus-within:!outline-none hover:border-red-500"
                : " focus-within:border-2 focus-within:border-LIGHT_RED focus-within:hover:border-LIGHT_RED "
            }`}
          >
            <input
              type="text"
              id="code"
              autoComplete="off"
              className="input"
              placeholder="کد تایید"
              value={e2p(code)}
              {...register("code", {
                required: "کد ارسالی را وارد نمایید",
                pattern: {
                  value: e2p(/[0-9]{5}/),
                  message: "کد ارسالی باید پنج رقم باشد",
                },
              })}
              onChange={(e) => setCode(e.target.value)}
            />
          </div>

          {errors.code && errors.code.type === "required" && (
            <p className="error">وارد کردن کد ارسالی الزامی است.</p>
          )}
          {errors.code && errors.code.type === "pattern" && (
            <p className="error">کد ارسالی ۵ رقمی را وارد نمایید</p>
          )}
          <button
            onClick={() => setStep(1)}
            className="px-6 py-3 text-xs bg-gray-100 rounded-full text-GRAY "
          >
            تغییر شماره موبایل
          </button>
        </div>
        <div className="px-4 py-4 text-left">
          <button type="submit" className="button">
            ورود
          </button>
        </div>
        <ToastContainer />
      </form>
    </section>
  );
}

export default CheckOTP;
