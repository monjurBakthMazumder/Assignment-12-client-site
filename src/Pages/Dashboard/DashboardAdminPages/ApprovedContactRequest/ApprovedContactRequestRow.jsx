import PropTypes from 'prop-types';
import useAxiosSecure from '../../../../Hock/useAxiosSecure';
import Swal from 'sweetalert2';

const ApprovedContactRequestRow = ({item,refetchAllContactRequest}) => {
    const {_id, bioName, bioEmail, bioId } = item || {};
    
  const axiosSecure = useAxiosSecure();
  const handleApprovedContactRequest = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want approved this Contact?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,make approved!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .put(`/approved-contact-request/${_id}`)
          .then((res) => {
            if (res.status === 200) {
              refetchAllContactRequest()
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
          {bioName}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
          {bioEmail}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
          {bioId}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
          <button
            onClick={handleApprovedContactRequest}
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
          >
            Approved
          </button>
        </td>
      </tr>
    );
};

ApprovedContactRequestRow.propTypes = {
    item: PropTypes.object,
    refetchAllContactRequest: PropTypes.func,
};

export default ApprovedContactRequestRow;