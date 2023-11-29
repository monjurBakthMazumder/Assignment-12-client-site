import FilterOption from "./filterOption";
import BioDataCard from "./BioDataCard";
import Container from "../../../Component/Ui/Container";
import { useState } from "react";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import Heading from "../../../Component/Ui/Heading";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Component/Loading/Loading";
import { Helmet } from "react-helmet";

const BioData = () => {
  const axiosPublic = useAxiosPublic();
  const [filterOption, setFilterOption] = useState({});

  const {
    data: bioData = [],
    isPending: isPendingBioData,
    refetch: refetchBioData,
  } = useQuery({
    queryKey: ["all-bioData", filterOption],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-bioData?ageTo=${filterOption?.ageTo}&ageFrom=${filterOption?.ageFrom}&gender=${filterOption?.gender}&permanentDivision=${filterOption?.permanentDivision}&presentDivision=${filterOption?.presentDivision}`
      );
      return res.data;
    },
  });

  return (
    <>
      <Helmet>
        <title>MingleHeart | Biodatas</title>
      </Helmet>
      <Container>
        <Heading>All Biodatas: {bioData?.length}</Heading>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="sm:w-60">
            <FilterOption setFilterOption={setFilterOption} />
          </div>
          {isPendingBioData ? (
            <Loading />
          ) : (
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {bioData.map((item) => (
                  <BioDataCard key={item._id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </Container>
    </>
  );
};

export default BioData;
