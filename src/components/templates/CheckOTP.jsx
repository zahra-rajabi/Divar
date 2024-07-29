import { useForm } from "react-hook-form";
import { checkOTP } from "services/auth";
import setCookie from "utils/cookie";
import { ToastContainer } from "react-toastify";

function CheckOTP({ code, setCode, setStep, mobileNumber }) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = async () => {
    const { response, error } = await checkOTP(mobileNumber, code);
    if (error) console.log(error.response.data.message);
    if (response)
      setCookie({
        accessToken: response.data.accessToken,
        refreshToken: response.data.refreshToken,
      });
  };
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <p>ورود به حساب کاربری</p>
      <p>
        کد پیامک‌شده به شمارۀ <span>{mobileNumber}</span>را وارد کنید.
      </p>
      <label htmlFor="code">کد تأیید را وارد کنید</label>
      <input
        type="text"
        id="code"
        placeholder="کد تایید"
        value={code}
        {...register("code", {
          required: "کد ارسالی را وارد نمایید",
          pattern: {
            value: /[0-9]{5}/,
            message: "کد ارسالی باید پنج رقم باشد",
          },
        })}
        onChange={(e) => setCode(e.target.value)}
      />
      {errors.code && errors.code.type === "required" && (
        <p>وارد کردن کد ارسالی الزامی است.</p>
      )}
      {errors.code && errors.code.type === "pattern" && (
        <p>کد ارسالی ۵ رقمی را وارد نمایید</p>
      )}
      <button type="submit">ورود</button>
      <button onClick={() => setStep(1)}>تغییر شماره موبایل</button>
      <ToastContainer />
    </form>
  );
}

export default CheckOTP;
