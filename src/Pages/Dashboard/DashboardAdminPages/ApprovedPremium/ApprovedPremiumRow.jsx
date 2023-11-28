import PropTypes from "prop-types";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";

const ApprovedPremiumRow = ({ item,refetchAllPremiumRequests }) => {
  const { _id, name, email, bioData_id } = item || {};
  const axiosSecure = useAxiosSecure();
  const handleMakePremiumUser = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want make this biodata as premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,make premium!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/bioData-premium-request-approved/${_id}`)
          .then((res) => {
            if (res.status === 200) {
              refetchAllPremiumRequests()
              Swal.fire({
                title: "Premium user successful",
                text: "This biodata is premium from now",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {email}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {bioData_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
        <button
          onClick={handleMakePremiumUser}
          className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
        >
          Make Premium
        </button>
      </td>
    </tr>
  );
};

ApprovedPremiumRow.propTypes = {
  item: PropTypes.object,
  refetchAllPremiumRequests: PropTypes.func,
};

export default ApprovedPremiumRow;
