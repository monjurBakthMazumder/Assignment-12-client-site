import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetallSuccessStory = () => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/all-success-story`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure]);
  return info;
};

export default useGetallSuccessStory;
