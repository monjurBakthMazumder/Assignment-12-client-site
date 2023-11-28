import { Link } from "react-router-dom";
import Container from "../../../Component/Ui/Container";
import Heading from "../../../Component/Ui/Heading";
import BioDataCard from "../../BioData/BioData/BioDataCard";
import useGetPremiumBioData from "../../../Hock/useGetPremiumBioData";
import Loading from "../../../Component/Loading/Loading";

const PremiumBioData = () => {
  const { premiumBioData, isPendingPremiumBioData } = useGetPremiumBioData();
  console.log("object,", premiumBioData);
  return (
    <Container>
      <Heading>Premium Biodatas</Heading>
      {isPendingPremiumBioData ? (
        <Loading />
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 md:mb-10">
            {premiumBioData?.map((item, i) => (
              <BioDataCard key={i} item={item} />
            ))}
          </div>
          <div className="text-center">
            <Link
              to={"/biodatas"}
              className="py-2 px-4 inline-flex justify-center items-center gap-2 font-semibold rounded-sm border border-pink-600 text-pink-600 hover:text-white hover:bg-pink-600"
            >
              See all
            </Link>
          </div>
        </>
      )}
    </Container>
  );
};

export default PremiumBioData;
