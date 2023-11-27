import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useSuccessStory = () => {
  const [info, setInfo] = useState([]);
  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    axiosPublic.get("/success-story").then((res) => {
      setInfo(res.data);
      console.log("object successStory" , res.data);
    });
  }, [axiosPublic]);
  return info;
};

export default useSuccessStory;
