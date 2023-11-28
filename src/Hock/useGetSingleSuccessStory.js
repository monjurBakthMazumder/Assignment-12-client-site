import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useGetSingleSuccessStory = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    data: successStory = {},
    isPending: isPendingSuccessStory,
    refetch: refetchSuccessStory,
  } = useQuery({
    queryKey: ["single-success-story", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/single-success-story/${user?.email}`);
      return res.data;
    },
  });
  return { successStory, isPendingSuccessStory, refetchSuccessStory };
};

export default useGetSingleSuccessStory;
