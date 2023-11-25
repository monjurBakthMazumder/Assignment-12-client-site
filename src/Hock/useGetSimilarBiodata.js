import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetSimilarBiodata = (gender) => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();
  console.log(gender);

  useEffect(() => {
    axiosSecure.get(`/similar-bioData/${gender}`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure,gender]);
  return info;
};

export default useGetSimilarBiodata;