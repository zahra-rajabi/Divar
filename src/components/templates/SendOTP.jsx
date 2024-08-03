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

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <p>ورود به حساب کاربری</p> <ToastContainer />
      <span>
        برای استفاده از امکانات دیوار، لطفاً شمارهٔ موبایل خود را وارد کنید. کد
        تأیید به این شماره پیامک خواهد شد.
      </span>
      <label htmlFor="input">شمارهٔ موبایل خود را وارد کنید</label>
      <input
        type="text"
        id="input"
        placeholder="شماره موبایل"
        value={mobileNumber}
        {...register("mobile", {
          required: "وارد کردن شماره موبایل الزامی است",
          pattern: {
            value: /[0-9]{11}/,
            message:
              "شماره موبایل باید ۱۱ رقم و شامل صفر و فاقد هرگونه حروف باشد",
          },
        })}
        onChange={(e) => setMobileNumber(e.target.value)}
      />
      <span>
        <span style={{ color: "red" }}>شرایط استفاده از خدمات </span>و
        <span style={{ color: "red" }}> حریم خصوصی </span>
        دیوار را می‌پذیرم.
      </span>
      {errors?.mobile && <p role="alert">{errors.mobile.message}</p>}
      <button type="submit">تایید</button>
    </form>
  );
}

export default SendOTP;
