import Container from "../../../Component/Ui/Container";
import Heading from "../../../Component/Ui/Heading";
import useSuccessStory from "../../../Hock/useSuccessStory";
import SuccessStoryCard from "./SuccessStoryCard";

const SuccessStory = () => {
  const successStory = useSuccessStory();
  console.log("successStory", successStory);
  return (
    <Container>
      <Heading>Success Story</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5 md:mb-10">
        {successStory?.map((item, i) => (
          <SuccessStoryCard key={i} item={item} />
        ))}
      </div>
    </Container>
  );
};

export default SuccessStory;
