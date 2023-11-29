import { Helmet } from "react-helmet";
import Stat from "../../Home/Stat/Stat";
import SuccessStory from "../../Home/SuccessStory/SuccessStory";
import About from "../About/About";

const AboutUs = () => {
  return (
    <div>
      <Helmet>
        <title>MingleHeart | About us</title>
      </Helmet>
      <About />
      <Stat />
      <SuccessStory />
    </div>
  );
};

export default AboutUs;
