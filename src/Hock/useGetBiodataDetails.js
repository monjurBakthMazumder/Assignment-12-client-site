import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetBiodataDetails = (id) => {
  const [info, setInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  console.log(id);

  useEffect(() => {
    axiosSecure.get(`/single-bioData/${id?.id}`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure,id]);
  return info;
};

export default useGetBiodataDetails;
