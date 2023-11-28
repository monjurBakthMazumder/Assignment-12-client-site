import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useGetAllStart = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: stat = {},
    isPending: isPendingStat,
    refetch: refetchStat,
  } = useQuery({
    queryKey: ["stat"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stat");
      return res.data;
    },
  });
  return { stat, isPendingStat, refetchStat };
};

export default useGetAllStart;
