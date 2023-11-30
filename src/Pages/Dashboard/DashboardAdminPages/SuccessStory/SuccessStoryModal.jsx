import PropTypes from "prop-types";

const SuccessStoryModal = ({ item }) => {
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
  } = item || {};
  return (
    <>
      <div className="text-center">
        <button
          data-hs-overlay="#hs-sign-out-alert"
          type="button"
          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
        >
          Details
        </button>
      </div>

      <div
        id="hs-sign-out-alert"
        className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto"
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
          <div className="relative flex flex-col bg-white shadow-lg rounded-xl">
            <div className="text-start group flex flex-col h-full bg-pink-100 border border-pink-300 shadow-sm rounded">
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
                  Groom biodata id:{" "}
                  {selfGender === "Male" ? selfBioId : partnerBioId}
                </span>
                <h3 className="text-xl font-semibold text-gray-800 ">
                  Bride: {selfGender === "Female" ? selfName : partnerName}
                </h3>
                <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
                  Bride biodata id:{" "}
                  {selfGender === "Female" ? selfBioId : partnerBioId}
                </span>
                <span className="block mt-1 text-base">
                  <b>Marriage Date: </b> {marriageDate}
                </span>
                <p className="my-3 text-justify" style={{ overflow: 'auto' }}>{successStory}</p>
                <div className="text-center">
                  <button
                    data-hs-overlay="#hs-sign-out-alert"
                    className="mt-3 py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

SuccessStoryModal.propTypes = {
  item: PropTypes.object,
};

export default SuccessStoryModal;
