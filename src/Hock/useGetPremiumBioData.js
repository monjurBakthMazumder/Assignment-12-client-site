import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetPremiumBioData = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: premiumBioData = [],
    isPending: isPendingPremiumBioData,
    refetch: refetchPremiumBioData,
  } = useQuery({
    queryKey: ["premium-bioData"],
    queryFn: async () => {
      const res = await axiosPublic.get("/premium-bioData");
      return res.data;
    },
  });
  return { premiumBioData, isPendingPremiumBioData, refetchPremiumBioData };
};

export default useGetPremiumBioData;
