import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetAllPremiumRequest = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: allPremiumRequests = [],
    isPending: isPendingAllPremiumRequests,
    refetch: refetchAllPremiumRequests,
  } = useQuery({
    queryKey: ["bioData-premium-request"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bioData-premium-request`);
      return res.data;
    },
  });
  return {
    allPremiumRequests,
    isPendingAllPremiumRequests,
    refetchAllPremiumRequests,
  };
};

export default useGetAllPremiumRequest;
