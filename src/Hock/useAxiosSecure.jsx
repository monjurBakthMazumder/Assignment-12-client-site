import axios from "axios";
// import UseAuth from "./UseAuth";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  });
  const useAxiosSecure = () => {
    // const { logoutUser } = UseAuth();
  
    useEffect(() => {
      axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            // logoutUser().then(() => {
            // });
          }
        }
      );
    }, []);
  
    return axiosSecure;
  };
  
  export default useAxiosSecure;