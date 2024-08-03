import { useForm } from "react-hook-form";
import { sendOTP } from "services/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function SendOTP({ mobileNumber, setStep, setMobileNumber }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = async () => {
    const { response, error } = await sendOTP(mobileNumber);
    if (response) setStep(2);
    if (error) console.log(error.response);
  };
  const body = document.body;
  body.style.backgroundColor = "#8585852e";
  return (
    <section className="form-container">
      <form onSubmit={handleSubmit(submitHandler)} className="form">
        <p className="title">ورود به حساب کاربری</p>
        <ToastContainer />
        <div className="form-box">
          <p className="label">
            <label htmlFor="input">شمارهٔ موبایل خود را وارد کنید</label>
          </p>
          <p className="description">
            برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید.
            کد تأیید به این شماره پیامک خواهد شد.
          </p>
          <div
            className={` w-full border-2 border-GRAY/60 hover:border-GRAY/100 flex justify-between items-center px-4 py-2 my-4  rounded ${
              errors?.mobile
                ? "border-red-500  focus-within:!outline-none hover:border-red-500"
                : " focus-within:border-2 focus-within:border-LIGHT_RED focus-within:hover:border-LIGHT_RED "
            }`}
          >
            <input
              type="text"
              id="input"
              placeholder="شماره موبایل"
              autoComplete="off"
              className="input"
              value={mobileNumber}
              {...register("mobile", {
                required: "وارد کردن شماره موبایل الزامی است",
                pattern: {
                  value: /[0-9]{11}/,
                  message: " یک شماره موبایل معتبر وارد نمایید .",
                },
              })}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
            <p className="bg-Gray">+۹۸</p>
          </div>
          {errors?.mobile && (
            <p role="alert" className="error">
              {errors.mobile.message}
            </p>
          )}

          <span className="text-xs md:text-sm">
            <span className="text-RED">شرایط استفاده از خدمات </span>و
            <span className="text-RED"> حریم خصوصی </span>
            دیوار را می‌پذیرم.
          </span>
        </div>
        <div className="text-left py-4 px-4">
          <button className="button" type="submit">
            تأیید
          </button>
        </div>
      </form>
    </section>
  );
}

export default SendOTP;
