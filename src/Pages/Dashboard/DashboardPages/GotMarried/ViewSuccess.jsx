import PropTypes from "prop-types";
import Container from "../../../../Component/Ui/Container";
import BorderLessContainer from "../../../../Component/Ui/BorderLessContainer";

const ViewSuccess = ({ info }) => {
  const {
    coupleImg,
    selfName,
    partnerName,
    selfBioId,
    partnerBioId,
    marriageDate,
    successStory,
    date,
    time,
  } = info || {};
  return (
    <Container>
      <BorderLessContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="w-full h-fit">
            <img src={coupleImg} alt="" className="w-full h-fit" />
          </div>
          <div>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Groom: {selfName}
            </h1>
            <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
              Groom biodata id: {selfBioId}
            </span>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Bride: {partnerName}
            </h1>
            <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
              Bride biodata id: {partnerBioId}
            </span>

            <p className="text-lg font-medium">
              <b>Marriage date:</b> {marriageDate}
            </p>

            <p className="text-base font-medium text-justify">
              {" "}
              {successStory}
            </p>
            <p className="text-sm font-medium">
              <b>Post on:</b> {time} {date}
            </p>
          </div>
        </div>
      </BorderLessContainer>
    </Container>
  );
};

ViewSuccess.propTypes = {
  info: PropTypes.object,
};

export default ViewSuccess;
