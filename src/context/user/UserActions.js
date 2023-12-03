import axios from "axios";


const BUNDA_URL = process.env.BUNDA_API_URL;

const userCall = axios.create({
  baseURL: "https://bunda-uvvk.onrender.com/api",
  headers: {
    "Content-Type": "application/json",
  },
}); 

export const login = async (email, password) => {
  try {
    const res = await userCall.post("/user/login", JSON.stringify({ email, password }));
    const user = res.data.user;
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  } catch (error) {
    console.log(error);
  }
};

export const signUp = async (userCredentials) => {
    try {
      const res = await userCall.post("/user", JSON.stringify(userCredentials));
      const user = res.data.user;
      console.log(user);
      localStorage.setItem("user", JSON.stringify(user));
    } catch (error) {
      console.log(error);
    }
}
