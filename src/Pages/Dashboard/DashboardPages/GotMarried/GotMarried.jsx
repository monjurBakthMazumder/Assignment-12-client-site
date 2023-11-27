import useGetSingleSuccessStory from "../../../../Hock/useGetSingleSuccessStory";
import CreateSuccessPost from "./CreateSuccessPost";
import ViewSuccess from "./ViewSuccess";

const GotMarried = () => {
  const { info, existingSuccess } = useGetSingleSuccessStory();
  return (
    <div className="">
      <div className="">
        {existingSuccess ? <ViewSuccess info={info} /> : <CreateSuccessPost />}
      </div>
    </div>
  );
};

export default GotMarried;
