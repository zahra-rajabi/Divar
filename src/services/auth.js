import { toast } from "react-toastify";
import api from "../configs/api";

const sendOTP = async (mobile) => {
  try {
    const response = await api.post("auth/se122nd-otp", { mobile });
    return { response };
  } catch (error) {
    if (error.response && error.response.status === 404) {
      toast.error("مشکلی پیش آمده است");
    }
    return { error };
  }
};

export { sendOTP };
