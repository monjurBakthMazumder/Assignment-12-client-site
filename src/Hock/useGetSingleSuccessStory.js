import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const useGetSingleSuccessStory = () => {
  const [info, setInfo] = useState({});
  const [existingSuccess, setExistingSuccess] = useState(false);
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();

  useEffect(() => {
    axiosSecure.get(`/single-success-story/${user?.email}`).then((res) => {
      setInfo(res.data.result);
      setExistingSuccess(res.data.existingSuccess);
    });
  }, [axiosSecure, user?.email]);
  return {info, existingSuccess};
};

export default useGetSingleSuccessStory;
