import useAxiosSecure from "./useAxiosSecure";
import UseAuth from "./UseAuth";
import { useQuery } from "@tanstack/react-query";

const useGetUserContactRequest = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = UseAuth();
  const {
    data: contactRequest = [],
    isPending: isPendingContactRequest,
    refetch: refetchContactRequest,
  } = useQuery({
    queryKey: ["user-contact-request", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/user-contact-request/${user?.email}`);
      return res.data;
    },
  });
  return { contactRequest, isPendingContactRequest, refetchContactRequest };
};

export default useGetUserContactRequest;
