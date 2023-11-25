


import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetAllPremiumRequest = () => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/bioData-premium-request`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure]);
  return info;
};

export default useGetAllPremiumRequest;
