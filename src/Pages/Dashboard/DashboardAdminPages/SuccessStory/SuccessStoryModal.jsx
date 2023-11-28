import PropTypes from "prop-types";

const SuccessStoryModal = ({ item }) => {
  const {
    _id,
    coupleImg,
    selfName,
    partnerName,
    selfBioId,
    partnerBioId,
    marriageDate,
    successStory,
    date,
    time,
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
            <div className="p-4 sm:p-10 text-center overflow-y-auto">
              <h3 className="mb-2 text-2xl font-bold text-gray-800 ">
                <img src={coupleImg} alt="" />
                <h1>{marriageDate}</h1>
                <h1>{selfName}</h1>
                <h1>{partnerName}</h1>
                <h1>{selfBioId}</h1>
                <h1>{partnerBioId}</h1>
                Sign out
              </h3>
              <p className="text-gray-500">
              {successStory}
              </p>
              <button
                data-hs-overlay="#hs-sign-out-alert"
                className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
              >
                Cancel
              </button>
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
