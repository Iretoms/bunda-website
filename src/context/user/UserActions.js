import axios from "axios";
import { toast } from "react-toastify";

// const BUNDA_URL = process.env.BUNDA_API_URL;

const userCall = axios.create({
  baseURL: "https://bunda-uvvk.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export const login = async (email, password) => {
  try {
    const res = await userCall.post(
      "/user/login",
      JSON.stringify({ email, password })
    );
    const user = res.data.user;
    return user
  } catch (error) {
    toast.error(
      error?.response?.data?.resultMessage?.en || "Something went wrong"
    );
  }
};

export const signUp = async (userCredentials) => {
  try {
    const res = await userCall.post("/user", JSON.stringify(userCredentials));
    const user = res.data.user;
    // await verifyEmail(res.data.confirmToken, res.data.resultCode);
    localStorage.setItem("user", JSON.stringify(user));
    toast.success(res.data.resultMessage.en);
  } catch (error) {
    toast.error(
      error?.response?.data?.resultMessage?.en || "Something went wrong"
    );
  }
};

// const verifyEmail = async (token, code) => {
//   try {
//     const response = await userCall.post(
//       "/user/verify-email",
//       JSON.stringify({token, code})
//     );
//     console.log(response.data.resultMessage.en);
//   } catch (error) {
//     console.log(error?.response?.data?.resultMessage?.en);
//   }
// };
