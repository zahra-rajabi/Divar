import { toast } from "react-toastify";
import api from "../configs/api";

const sendOTP = async (mobile) => {
  try {
    const response = await api.post("auth/send-otp", { mobile });
    return { response };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error("مشکلی پیش آمده است");
    }
    return { error };
  }
};

const checkOTP = async (mobile, code) => {
  try {
    const response = await api.post("auth/check-otp", { mobile, code });
    return { response };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error("مشکلی پیش آمده است");
    }
    return { error };
  }
};

export { sendOTP, checkOTP };
