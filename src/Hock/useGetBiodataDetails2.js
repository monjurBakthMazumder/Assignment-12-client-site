import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const useGetBiodataDetails2 = (id) => {
  const [info, setInfo] = useState({});
  const [requested, setRequested] = useState(false)
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const email = user?.email;
  console.log("email", email);

  useEffect(() => {
    axiosSecure.get(`/single-bioData/${id?.id}?email=${email}`).then((res) => {
      setInfo(res.data.result);
      setRequested(res.data.requested);
    });
  }, [axiosSecure, id, email]);
  return {info,requested};
};

export default useGetBiodataDetails2;