import { Helmet } from "react-helmet";
import Loading from "../../../../Component/Loading/Loading";
import useGetSingleSuccessStory from "../../../../Hock/useGetSingleSuccessStory";
import CreateSuccessPost from "./CreateSuccessPost";
import ViewSuccess from "./ViewSuccess";

const GotMarried = () => {
  const { successStory, isPendingSuccessStory, refetchSuccessStory } =
    useGetSingleSuccessStory();
  console.log("successStory", successStory);
  const { info = {}, existingSuccess = false } = successStory;
  return (
    <div className="">
      <Helmet>
        <title>MingleHeart | Got married</title>
      </Helmet>
      {isPendingSuccessStory ? (
        <Loading />
      ) : (
        <div className="">
          {existingSuccess ? (
            <ViewSuccess info={info} />
          ) : (
            <CreateSuccessPost refetchSuccessStory={refetchSuccessStory} />
          )}
        </div>
      )}
    </div>
  );
};

export default GotMarried;
