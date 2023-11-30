import FilterOption from "./filterOption";
import BioDataCard from "./BioDataCard";
import Container from "../../../Component/Ui/Container";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hock/useAxiosPublic";
import Heading from "../../../Component/Ui/Heading";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../Component/Loading/Loading";
import { Helmet } from "react-helmet";

const BioData = () => {
  const axiosPublic = useAxiosPublic();
  const [filterOption, setFilterOption] = useState({});
  const itemPerPage = 20;
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axiosPublic.get("/all-bioData-count").then((res) => {
      setCount(res.data.result);
      setLoading(false);
    });
  }, [axiosPublic]);
  console.log("count", count);
  const { data: bioData = [], isPending: isPendingBioData } = useQuery({
    queryKey: ["all-bioData", filterOption, currentPage, itemPerPage, count],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/all-bioData?ageTo=${filterOption?.ageTo}&ageFrom=${filterOption?.ageFrom}&gender=${filterOption?.gender}&permanentDivision=${filterOption?.permanentDivision}&presentDivision=${filterOption?.presentDivision}&page=${currentPage}&size=${itemPerPage}`
      );
      return res.data;
    },
  });
  const numberOfPages = Math?.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage < pages?.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <>
      <Helmet>
        <title>MingleHeart | Biodatas</title>
      </Helmet>
      <Container>
        <Heading>All Biodatas</Heading>
        <div className="flex flex-col sm:flex-row gap-5">
          <div className="sm:w-60">
            <FilterOption setFilterOption={setFilterOption} />
          </div>
          {isPendingBioData || loading ? (
            <Loading />
          ) : (
            <>
              {bioData?.length < 1 ? (
                <div className="flex justify-center items-center flex-1 text-3xl md:text-4xl lg:text-5xl font-semibold">
                  <h1>No Biodata Available</h1>
                </div>
              ) : (
                <div className="flex-1">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                    {bioData.map((item) => (
                      <BioDataCard key={item._id} item={item} />
                    ))}
                  </div>
                  <div className="flex flex-wrap justify-end items-center gap-2 my-10">
                    <button
                      onClick={handlePrevPage}
                      className={`px-2 py-1 border border-pink-600 flex justify-center items-center gap-2 hover:bg-pink-600 hover:text-white text-pink-600 bg-transparent`}
                    >
                      Prev
                    </button>
                    {pages?.map((page, i) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`px-2 py-1 border border-pink-600 flex justify-center items-center gap-2 hover:bg-pink-600 hover:text-white ${
                          currentPage === page
                            ? "bg-pink-600 text-white"
                            : "text-pink-600 bg-transparent"
                        }`}
                      >
                        {++i}
                      </button>
                    ))}
                    <button
                      onClick={handleNextPage}
                      className={`px-2 py-1 border border-pink-600 flex justify-center items-center gap-2 hover:bg-pink-600 hover:text-white text-pink-600 bg-transparent`}
                    >
                      Next
                    </button>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </Container>
    </>
  );
};

export default BioData;
