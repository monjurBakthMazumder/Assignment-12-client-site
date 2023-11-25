import useGetUserBioData from "../../../../Hock/useGetUserBiodata";
import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const ViewBioData = () => {
  const info = useGetUserBioData();
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
    premium,
  } = info;
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="w-full h-fit">
          <img src={image} alt="" className="w-full h-fit" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">{name}</h1>

          {premium && (
            <>
              <p className="text-base font-medium flex items-center gap-1">
                <MdEmail />
                {email}
              </p>
              <p className="text-base font-medium flex items-center gap-1">
                <FaPhoneSquare /> {mobile}
              </p>
            </>
          )}
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
          <h1 className="text-lg font-semibold mt-2">Expected Partner: </h1>
          <p className="text-base font-medium">
            <p className="text-base font-medium">
              <b>Age:</b> {expectedAge} years age
            </p>
            <b>Hight:</b> {expectedHight}
          </p>

          <p className="text-base font-medium">
            <b>Weight:</b> {expectedWeight}
          </p>
          {premium || (
            <button className="w-full my-5 text-white bg-pink-600 border border-pink-600  hover:bg-transparent hover:text-pink-600 px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
              Make Your Biodata premium
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewBioData;
