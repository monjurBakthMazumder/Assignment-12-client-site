import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import Swal from "sweetalert2";

const MyContactRequestRow = ({ item,refetchContactRequest }) => {
  console.log(item);
  const { _id, bioName, bioId, bioData_Id, bioEmail, bioMobile, status } =
    item || {};
    
  const axiosSecure = useAxiosSecure();
    const handleDelete = () => {
        Swal.fire({
          title: "Are you sure?",
          text: "You want to delete this contact information!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosSecure.delete(`/delete-contact-request/${_id}`).then((res) => {
              if (res.status === 200) {
                refetchContactRequest()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
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
        {bioId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {status === "Pending" ? "---" : bioEmail}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {status === "Pending" ? "---" : bioMobile}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {status}
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-3 text-2xl">
        <AiFillDelete
          className="text-pink-600 hover:text-red-600 cursor-pointer"
            onClick={handleDelete}
        />
        <Link to={`/biodatas/details/${bioData_Id}`}>
          <FaEye className="text-pink-600 hover:text-pink-600" />
        </Link>
      </td>
    </tr>
  );
};

MyContactRequestRow.propTypes = {
  item: PropTypes.object,
  refetchContactRequest: PropTypes.func,
};

export default MyContactRequestRow;
