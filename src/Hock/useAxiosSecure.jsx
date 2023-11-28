import axios from "axios";
// import UseAuth from "./UseAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
  baseURL: 'http://localhost:5000',
  // baseURL: "https://mingle-heart.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  // const { logoutUser } = UseAuth();

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        const status = error.response.status;
        if (status === 401 || status === 403) {
          // await logoutUser();
          // navigate('/login');
        }
      }
    );
  }, []);

  return axiosSecure;
};

export default useAxiosSecure;
