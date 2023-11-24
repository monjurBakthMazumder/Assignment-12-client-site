import axios from "axios";
import UseAuth from "./UseAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
  });
  const useAxiosSecure = () => {
    const { logout } = UseAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      axiosSecure.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          if (error.response.status === 401 || error.response.status === 403) {
            logout().then(() => {
              navigate("/login");
            });
          }
        }
      );
    }, [logout, navigate]);
  
    return axiosSecure;
  };
  
  export default useAxiosSecure;