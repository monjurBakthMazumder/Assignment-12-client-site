import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useGetBiodataDetails = (id) => {
  const axiosSecure = useAxiosSecure();
  const { user, isLoading } = UseAuth();

  const {
    data: successStory = {},
    isPending: isPendingSuccessStory,
    refetch: refetchSuccessStory,
  } = useQuery({
    queryKey: ["single-bioData", id?.id, user?.email],
    enabled: !isLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/single-bioData/${id?.id}?email=${user?.email}`
      );
      return res.data;
    },
  });

  return { successStory, isPendingSuccessStory, refetchSuccessStory };
};

export default useGetBiodataDetails;
