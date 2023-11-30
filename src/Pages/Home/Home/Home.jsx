import { Helmet } from "react-helmet";
import PremiumBioData from "../PremiumBioData/PremiumBioData";
import Slider from "../Slider/Slider";
import Stat from "../Stat/Stat";
import SuccessStory from "../SuccessStory/SuccessStory";
import Work from "../Work/Work";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>MingleHeart | Home</title>
      </Helmet>
      <Slider />
      <PremiumBioData />
      <Work/>
      <Stat />
      <SuccessStory />
    </div>
  );
};

export default Home;
