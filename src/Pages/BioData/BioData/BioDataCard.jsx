import PropTypes from "prop-types";

const BioDataCard = ({ item }) => {
  const {
    name,
    gender,
    image,
    bioData_id,
    age,
    occupation,
    permanentDivision,
    presentDivision,
  } = item || {};
  return (
    <div className="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl ">
      <div className="h-72 flex flex-col justify-center items-center bg-blue-600 rounded-t-xl overflow-hidden">
        <img src={image} alt="" className="w-full object-cover" />
      </div>
      <div className="p-4 md:p-6 bg-white">
        <span className="block mb-1 text-xs font-semibold uppercase text-blue-600 dark:text-blue-500">
          Biodata id: {bioData_id}
        </span>
        <h3 className="text-xl font-semibold text-gray-800 ">{name}</h3>
        <span className="block mt-1">
          <b>Age: </b>
          {age} <i>({gender})</i>
        </span>
        <span className="block mb-1">
          <b>Occupation: </b>
          {occupation}
        </span>
        <span className="block">
          <b>Present division: </b>
          {presentDivision}
        </span>
        <span className="block mb-1">
          <b>Permanent division: </b>
          {permanentDivision}
        </span>
        <div className="text-center">
          <button className="text-xs py-1 px-3 inline-flex justify-center items-center gap-2 rounded-sm font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white cursor-pointer mt-5">
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

BioDataCard.propTypes = {
  item: PropTypes.object,
};

export default BioDataCard;
