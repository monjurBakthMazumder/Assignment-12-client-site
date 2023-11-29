import { Helmet } from "react-helmet";
import PremiumBioData from "../PremiumBioData/PremiumBioData";
import Slider from "../Slider/Slider";
import Stat from "../Stat/Stat";
import SuccessStory from "../SuccessStory/SuccessStory";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MingleHeart | Home</title>
      </Helmet>
      <Slider />
      <PremiumBioData />
      <Stat />
      <SuccessStory />
    </div>
  );
};

export default Home;
