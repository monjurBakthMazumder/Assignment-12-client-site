import { useParams } from "react-router-dom";
import Container from "../../../Component/Ui/Container";
import useGetBiodataDetails from "../../../Hock/useGetBiodataDetails";
import useGetUserBioData from "../../../Hock/useGetUserBiodata";
import useAxiosSecure from "../../../Hock/useAxiosSecure";
import Swal from "sweetalert2";

const Checkout = () => {
  const id = useParams();
  const BioDataInfo = useGetBiodataDetails(id);
  const userInfo = useGetUserBioData();
  const axiosSecure = useAxiosSecure();
  const handlePayment = (e) => {
    e.preventDefault();
    const paymentInfo = {
      bioData_Id: BioDataInfo?._id,
      bioId: BioDataInfo?.bioData_id,
      bioName: BioDataInfo?.name,
      bioEmail: BioDataInfo?.email,
      bioMobile: BioDataInfo?.mobile,
      selfBioId: userInfo?.bioData_id,
      selfEmail: userInfo?.email,
      status: "Pending",
      price: 500,
    };
    axiosSecure.post(`/payments`, paymentInfo).then((res) => {
      if (res.status === 200) {
        Swal.fire({
          title: "Payment successful!!",
          text: "Tk 500 has been successfully paid",
          icon: "success",
        });
      }
    });
  };
  return (
    <Container>
      <div className="max-w-6xl mx-auto border-2 rounded border-pink-400 px-5 sm:px-10 py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center">Payment</h1>
        <h1 className="text-sm md:text-base font-light text-center mt-2 mb-10 italic text-pink-700">
          Payment of Tk 500 to get contact information
        </h1>
        <form onSubmit={handlePayment}>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="Biodata id">
                Biodata id
                <input
                  disabled
                  readOnly
                  value={BioDataInfo?.bioData_id}
                  placeholder="Biodata id"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="Self biodata id">
                Self Biodata id
                <input
                  disabled
                  readOnly
                  value={userInfo?.bioData_id}
                  placeholder="Self biodata id"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-center items-center gap-5 mb-5">
            <div className="w-full flex-1">
              <label htmlFor="Your Email">
                Your Email
                <input
                  disabled
                  readOnly
                  value={userInfo?.email}
                  placeholder="Your Email"
                  className="py-3 px-4 block w-full border border-pink-300 rounded-md text-sm focus:border-pink-500 focus:ring-pink-500 outline-none mt-2"
                />
              </label>
            </div>
            <div className="w-full flex-1">
              <label htmlFor="Payment">
                Payment
                <input
                  placeholder="Payment"
                  className="py-3 px-4 block w-full border border-pink-500 rounded-md text-sm focus:border-pink-700 focus:ring-pink-900 outline-none mt-2"
                />
              </label>
            </div>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-pink-500 text-white hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              Payment
            </button>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Checkout;
