import PropTypes from "prop-types";

const SuccessStoryCard = ({ item }) => {
  const {
    selfBioId,
    partnerBioId,
    selfName,
    partnerName,
    coupleImg,
    successStory,
    date,
    time,
    marriageDate,
    _id,
  } = item || {};
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
      <div className="h-72 flex flex-col justify-center items-center bg-pink-600 rounded-t-xl overflow-hidden">
        <img src={coupleImg} alt="" className="w-full object-cover" />
      </div>
      <div className="p-4 md:p-6 bg-white">
        <p className=" mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 flex flex-wrap justify-between items-center gap-5">
          <p>Self Biodata id: {selfBioId} </p>
          <p>Partner Biodata id: {partnerBioId} </p>
        </p>
        <h3 className="text-xl font-semibold text-gray-800 ">
          {selfName}&#39;s <i className="font-light"> marriage to</i> {partnerName}
        </h3>
        <span className="block mt-1">
          <b>Marriage Date: </b> {marriageDate}
        </span>
        <span className="block mb-1">
          <b>Review: </b>
          {successStory?.slice(0, 150)}
        </span>
        <span className="block mt-1">
          <b>Post Date: </b> {time} {date}
        </span>
        {/* <div className="text-center">
        <Link
          to={`/success-story/details/${_id}`}
          className="text-xs py-1 px-3 inline-flex justify-center items-center gap-2 rounded-sm font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white cursor-pointer mt-5"
        >
          Details
        </Link>
      </div> */}
      </div>
    </div>
  );
};

SuccessStoryCard.propTypes = {
  item: PropTypes.object,
};

export default SuccessStoryCard;
