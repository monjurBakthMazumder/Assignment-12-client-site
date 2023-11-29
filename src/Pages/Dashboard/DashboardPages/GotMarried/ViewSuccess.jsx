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
    selfGender,
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
              Groom: {selfGender === "Male" ? selfName : partnerName}
            </h1>
            <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
              Groom biodata id:{" "}
              {selfGender === "Male" ? selfBioId : partnerBioId}
            </span>
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold">
              Bride: {selfGender === "Female" ? selfName : partnerName}
            </h1>
            <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
              Bride biodata id:{" "}
              {selfGender === "Female" ? selfBioId : partnerBioId}
            </span>

            <p className="text-lg font-medium mt-2">
              <b>Marriage date:</b> {marriageDate}
            </p>
            <i className="text-xs">
              Post on: {time} {date}
            </i>

            <p className="text-base font-medium text-justify my-5">
              {" "}
              {successStory}
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
