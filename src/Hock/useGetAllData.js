import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllData = () => {
  const [info, setInfo] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("admin-stat").then((res) => {
      setInfo(res.data);
    });
  }, [axiosPublic]);
  return info;
};

export default useGetAllData;
