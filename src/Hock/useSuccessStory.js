import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const useSuccessStory = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: successStory = [],
    isPending: isPendingSuccessStory,
    refetch: refetchSuccessStory,
  } = useQuery({
    queryKey: ["success-story"],
    queryFn: async () => {
      const res = await axiosPublic.get("/success-story");
      return res.data;
    },
  });
  return { successStory, isPendingSuccessStory, refetchSuccessStory };
};

export default useSuccessStory;
