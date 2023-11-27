import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllData = () => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get("/admin-stat").then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure]);
  return info;
};

export default useGetAllData;
