



import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";

const useGetContactRequest = () => {
  const [info, setInfo] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure.get(`/contact-request`).then((res) => {
      setInfo(res.data);
    });
  }, [axiosSecure]);
  return info;
};

export default useGetContactRequest;
