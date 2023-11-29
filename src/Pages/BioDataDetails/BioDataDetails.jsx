import { useParams } from "react-router-dom";
import Container from "../../Component/Ui/Container";
import useGetBiodataDetails from "../../Hock/useGetBiodataDetails";
import BioDataDetailsCard from "./BioDataDetailsCard";
import useGetSimilarBiodata from "../../Hock/useGetSimilarBiodata";
import BioDataCard from "../BioData/BioData/BioDataCard";
import Loading from "../../Component/Loading/Loading";
import { Helmet } from "react-helmet";

const BioDataDetails = () => {
  const id = useParams();
  const { successStory, isPendingSuccessStory } = useGetBiodataDetails(id);
  const { result = {}, requested = false } = successStory;
  const { similarBiodata, isPendingSimilarBiodata } = useGetSimilarBiodata(
    result?.gender
  );
  const filterBiodata = similarBiodata?.filter(
    (item) => item?._id !== result._id
  );
  return (
    <>
      <Helmet>
        <title>MingleHeart | Details</title>
      </Helmet>
      {isPendingSimilarBiodata || isPendingSuccessStory ? (
        <Loading />
      ) : (
        <Container>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex-1 h-fit">
              <BioDataDetailsCard info={result} requested={requested} />
            </div>
            <div className="lg:w-80 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-5 h-fit">
              {filterBiodata?.map((item, i) => (
                <BioDataCard key={i} item={item} />
              ))}
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default BioDataDetails;
