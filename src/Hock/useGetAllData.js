import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetAllData = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: AllData = [],
    isPending: isPendingAllData,
    refetch: refetchAllData,
  } = useQuery({
    queryKey: ["admin-stat"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/admin-stat`);
      return res.data;
    },
  });
  return { AllData, isPendingAllData, refetchAllData };
};

export default useGetAllData;
