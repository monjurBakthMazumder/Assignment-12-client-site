import { useParams } from "react-router-dom";
import Container from "../../Component/Ui/Container";
import useGetBiodataDetails from "../../Hock/useGetBiodataDetails";
import BioDataDetailsCard from "./BioDataDetailsCard";
import useGetSimilarBiodata from "../../Hock/useGetSimilarBiodata";
import BioDataCard from "../BioData/BioData/BioDataCard";

const BioDataDetails = () => {
  const id = useParams();
  const {info,requested} = useGetBiodataDetails(id);
  const data = useGetSimilarBiodata(info?.gender);
  const filterBiodata = data.filter(item => item?._id !== info?._id)
  console.log(data);
  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-5">
        <div className="flex-1 h-fit">
          <BioDataDetailsCard info={info} requested={requested} />
        </div>
        <div className="lg:w-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 h-fit">
          {filterBiodata?.map((item, i) => (
            <BioDataCard key={i} item={item} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default BioDataDetails;
