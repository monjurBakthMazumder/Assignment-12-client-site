import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";

const useGetAllBioData = () => {
    const [info, setInfo] = useState([]);
    const axiosPublic = useAxiosPublic();
  
    useEffect(() => {
      axiosPublic.get('/all-bioData').then((res) => {
        setInfo(res.data);
      });
    }, [axiosPublic]);
    return info;
};

export default useGetAllBioData;