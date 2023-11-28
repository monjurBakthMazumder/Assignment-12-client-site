import { FaPhoneSquare } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import Container from "../../../../Component/Ui/Container";
import BorderLessContainer from "../../../../Component/Ui/BorderLessContainer";
import useGetUserBioData from "../../../../Hock/useGetUserBioData";
import Loading from "../../../../Component/Loading/Loading";
import isBioData from "../../../../Hock/isBioData";
import { Link } from "react-router-dom";
const ViewBioData = () => {
  const { info, isPendingInfo, refetchInfo } = useGetUserBioData();
  const axiosSecure = useAxiosSecure();
  const { isUserBioData } = isBioData();
  console.log("isUserBioData", isUserBioData);
  const {
    _id,
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
    bioData_id,
    premium,
    premiumRequest,
  } = info;
  const handlePremiumRequest = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to send request for make biodata premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, i want!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put(`/bioData-premium-request/${_id}`).then((res) => {
          if (res.status === 200) {
            refetchInfo()
            Swal.fire({
              title: "Successful!",
              text: "Your request send successfully.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <>
      {isPendingInfo ? (
        <Loading />
      ) : (
        <>
          {
            isUserBioData
            ?
            <Container>
              <BorderLessContainer>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                  <div className="w-full h-fit">
                    <img src={image} alt="" className="w-full h-fit" />
                  </div>
                  <div>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                      {name}
                    </h1>
                    <span className="block mb-1 text-xs font-semibold uppercase text-pink-600 dark:text-pink-500 mt-1">
                      Biodata id: {bioData_id} {premium ? <i>(premium)</i> : ""}
                    </span>

                    <p className="text-sm font-medium flex items-center gap-1 mt-2">
                      <MdEmail className="text-md text-pink-600" /> Email:
                      {email}
                    </p>
                    <p className="text-sm font-medium flex items-center gap-1 mb-1">
                      <FaPhoneSquare className="text-md text-pink-600" /> Phone
                      Number {mobile}
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
                    <h1 className="text-lg font-semibold mt-3">
                      Expected Partner:{" "}
                    </h1>
                    <p className="text-base font-medium">
                      <p className="text-base font-medium">
                        <b>Age:</b> {expectedAge} years age
                      </p>
                      <b>Hight:</b> {expectedHight}
                    </p>

                    <p className="text-base font-medium">
                      <b>Weight:</b> {expectedWeight}
                    </p>
                    {premium ||
                      (premiumRequest ? (
                        <h1 className="w-full my-5  bg-transparent text-pink-600 border border-pink-500 px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2">
                          Your biodata premium request is pending
                        </h1>
                      ) : (
                        <button
                          onClick={handlePremiumRequest}
                          className="w-full my-5 text-white bg-pink-600 border border-pink-600  hover:bg-transparent hover:text-pink-600 px-2 py-1 sm:px-7 sm:py-3 font-medium text-sm sm:text-lg lg:text-xl flex justify-center items-center gap-2"
                        >
                          Make biodata to premium
                        </button>
                      ))}
                  </div>
                </div>
              </BorderLessContainer>
            </Container>
            :
            <div className="flex flex-col justify-center items-center gap-5 h-screen text-3xl md:text-4xl lg:text-5xl font-semibold">
              <h1>No Biodata added</h1>
              <Link
              to={'/dashboard/edit-bioData'}
                className="py-3 text-sm px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
              >
                Create Biodata
              </Link>
            </div>
          }
        </>
      )}
    </>
  );
};

export default ViewBioData;
