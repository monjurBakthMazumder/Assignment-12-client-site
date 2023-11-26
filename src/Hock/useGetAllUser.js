
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllUser = (name) => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/users?name=${name}`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure,name]);
  return info;
};

export default useGetAllUser;
