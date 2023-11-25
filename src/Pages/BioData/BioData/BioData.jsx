import useGetAllBioData from "../../../Hock/useGetAllBioData";
import FilterOption from "./filterOption";
import BioDataCard from "./BioDataCard";
import Container from "../../../Component/Ui/Container";

const BioData = () => {
  const info = useGetAllBioData();
  return (
    <Container>
      <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold justify-center text-center underline mb-5 block">
        All Biodatas: {info?.length}
      </h1>
      <div className="flex flex-col sm:flex-row gap-5">
        <div className="sm:w-60">
          <FilterOption />
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
