
import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllUser = () => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/users`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure]);
  return info;
};

export default useGetAllUser;
