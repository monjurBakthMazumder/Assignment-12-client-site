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
    selfGender,
    _id,
  } = item || {};
  return (
    <div className="group flex flex-col h-full bg-pink-100 border border-pink-300 shadow-sm rounded">
      <div className="h-72 flex flex-col justify-center items-center bg-pink-100 rounded-t overflow-hidden">
        <img src={coupleImg} alt="" className="w-full object-cover" />
      </div>
      <div className="p-4 md:p-6 bg-pink-50  rounded-b">
        <i className="block mt-1 text-xs">
          post on: {time} {date}
        </i>

        <h3 className="text-xl font-semibold text-gray-800 ">
          Groom: {selfGender === "Male" ? selfName : partnerName}
        </h3>
        <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
          Groom biodata id: {selfGender === "Male" ? selfBioId : partnerBioId}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 ">
          Bride: {selfGender === "Female" ? selfName : partnerName}
        </h3>
        <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
          Bride biodata id: {selfGender === "Female" ? selfBioId : partnerBioId}
        </span>
        <span className="block mt-1 text-base">
          <b>Marriage Date: </b> {marriageDate}
        </span>
        <span className="block mb-1">
          {successStory?.slice(0, 200)}...
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
