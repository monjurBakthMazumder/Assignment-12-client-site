import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllStart = () => {
  const [info, setInfo] = useState({});
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/stat").then((res) => {
      setInfo(res.data);
    });
  }, [axiosPublic]);
  return info;
};

export default useGetAllStart;
