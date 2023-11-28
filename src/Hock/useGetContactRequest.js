import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const {
    data: allContactRequest = [],
    isPending: isPendingAllContactRequest,
    refetch: refetchAllContactRequest,
  } = useQuery({
    queryKey: ["contact-request"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/contact-request`);
      return res.data;
    },
  });
  return {
    allContactRequest,
    isPendingAllContactRequest,
    refetchAllContactRequest,
  };
};

export default useGetContactRequest;
