import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useGetFavorite = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    data: favorites = [],
    isPending: isPendingFavorites,
    refetch: refetchFavorites,
  } = useQuery({
    queryKey: ["user-favorites", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-favorites/${user?.email}`);
      return res.data;
    },
  });
  return { favorites, isPendingFavorites, refetchFavorites };
};

export default useGetFavorite;
