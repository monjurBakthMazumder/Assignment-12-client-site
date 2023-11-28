import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetallSuccessStory = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: successStory = [],
    isPending: isPendingSuccessStory,
    refetch: refetchSuccessStory,
  } = useQuery({
    queryKey: ["all-success-story"],
    queryFn: async () => {
      const res = await axiosSecure.get("/all-success-story");
      return res.data;
    },
  });
  return { successStory, isPendingSuccessStory, refetchSuccessStory };
};

export default useGetallSuccessStory;
