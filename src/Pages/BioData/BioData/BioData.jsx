// import useGetAllBioData from "../../../Hock/useGetAllBioData";
import FilterOption from "./filterOption";
import BioDataCard from "./BioDataCard";
import Container from "../../../Component/Ui/Container";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../Hock/useAxiosPublic";

const BioData = () => {
  // const info = useGetAllBioData();

  const [info, setInfo] = useState([]);
  const axiosPublic = useAxiosPublic();
  const [filterOption, setFilterOption] = useState({});
  console.log(filterOption);
  useEffect(() => {
    axiosPublic
      .get(
        `/all-bioData?ageTo=${filterOption?.ageTo}&ageFrom=${filterOption?.ageFrom}&gender=${filterOption?.gender}&permanentDivision=${filterOption?.permanentDivision}&presentDivision=${filterOption?.presentDivision}`
      )
      .then((res) => {
        setInfo(res.data);
      });
  }, [axiosPublic, filterOption]);

  return (
    <Container>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold justify-center text-center underline mb-5 block">
        All Biodatas: {info?.length}
      </h1>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="sm:w-60">
          <FilterOption setFilterOption={setFilterOption} />
        </div>
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {info.map((item) => (
              <BioDataCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default BioData;
