import PropTypes from "prop-types";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const BioDataDetailsCard = ({ info }) => {
  const {
    name,
    gender,
    fatherName,
    motherName,
    email,
    mobile,
    image,
    age,
    dateOfBirth,
    hight,
    weight,
    occupation,
    race,
    permanentDivision,
    presentDivision,
    expectedHight,
    expectedWeight,
    expectedAge,
    bioData_id
  } = info;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="w-full h-fit">
        <img src={image} alt="" className="w-full h-fit" />
      </div>
      <div>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{name}</h1>
        <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
          Biodata id: {bioData_id}
        </span>
        <p className="text-sm font-medium flex items-center gap-1 mt-2">
          <MdEmail className="text-md text-pink-600" /> Email:
          {email}
        </p>
        <p className="text-sm font-medium flex items-center gap-1 mb-1">
          <FaPhoneSquare className="text-md text-pink-600" /> Phone Number:
          {mobile}
        </p>
        <p className="text-lg font-medium">
          <b>Father name:</b> {fatherName}
        </p>
        <p className="text-lg font-medium">
          <b>Mother name:</b> {motherName}
        </p>

        <p className="text-base font-medium">
          <b>Gender:</b> {gender}
        </p>

        <p className="text-base font-medium">
          <b>Age:</b> {age}
        </p>
        <p className="text-base font-medium">
          <b>Date Of Birth:</b> {dateOfBirth}
        </p>

        <p className="text-base font-medium">
          <b>Hight:</b> {hight}
        </p>

        <p className="text-base font-medium">
          <b>Weight:</b> {weight}
        </p>

        <p className="text-base font-medium">
          <b>Occupation:</b> {occupation}
        </p>
        <p className="text-base font-medium">
          <b>Race:</b> {race}
        </p>
        <p className="text-base font-medium">
          <b>Present division:</b> {presentDivision}
        </p>
        <p className="text-base font-medium">
          <b>Permanent division:</b> {permanentDivision}
        </p>
        <h1 className="text-lg font-semibold mt-3">Expected Partner: </h1>
        <p className="text-base font-medium">
          <p className="text-base font-medium">
            <b>Age:</b> {expectedAge} years age
          </p>
          <b>Hight:</b> {expectedHight}
        </p>

        <p className="text-base font-medium">
          <b>Weight:</b> {expectedWeight}
        </p>
        <button className="w-full my-5 text-white bg-pink-600 border border-pink-600  hover:bg-transparent hover:text-pink-600 px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
          Request for contact information
        </button>
      </div>
    </div>
  );
};

BioDataDetailsCard.propTypes = {
  info: PropTypes.object,
};

export default BioDataDetailsCard;
