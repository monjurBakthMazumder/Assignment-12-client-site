
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";

const isBioData = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    data: isUserBioData = false,
    isPending: isPendingIsUserBioData,
    refetch: refetchIsUserBioData,
  } = useQuery({
    queryKey: ["isBioData", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/isBioData/${user?.email}`);
      return res.data;
    },
  });
  return { isUserBioData, isPendingIsUserBioData, refetchIsUserBioData };
};

export default isBioData;
