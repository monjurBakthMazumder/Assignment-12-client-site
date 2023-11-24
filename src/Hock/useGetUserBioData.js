import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const useGetUserBioData = () => {
  const [info, setInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  useEffect(() => {
    const userEmail = user?.email;
    axiosSecure.get(`/bioData/${userEmail}`).then((res) => {
      setInfo(res.data);
      console.log("object", res.data);
    });
  }, [axiosSecure, user?.email]);
  return info;
};

export default useGetUserBioData;
