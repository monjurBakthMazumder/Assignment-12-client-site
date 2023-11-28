import useAxiosSecure from "./useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const useGetSimilarBiodata = (gender) => {
  const axiosSecure = useAxiosSecure();
  console.log(gender);

  const {
    data: similarBiodata = [],
    isPending: isPendingSimilarBiodata,
    refetch: refetchSimilarBiodata,
  } = useQuery({
    queryKey: ["similar-bioData", gender],
    queryFn: async () => {
      const res = await axiosSecure.get(`/similar-bioData/${gender}`);
      return res.data;
    },
  });
  return { similarBiodata, isPendingSimilarBiodata, refetchSimilarBiodata };
};

export default useGetSimilarBiodata;
