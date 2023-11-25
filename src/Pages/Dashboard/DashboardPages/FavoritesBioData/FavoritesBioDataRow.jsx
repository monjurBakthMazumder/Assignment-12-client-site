import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
const FavoritesBioDataRow = ({ item }) => {
  const { _id, name, bioData_id, permanentDivision, occupation, dataId } =
    item || {};
  const axiosSecure = useAxiosSecure();
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/delete-favorites/${_id}`).then((res) => {
          if (res.status === 200) {
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
        {name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {bioData_id}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {permanentDivision}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {occupation}
      </td>
      <td className="px-6 py-4 whitespace-nowrap flex justify-center items-center gap-3 text-2xl">
        <AiFillDelete
          className="text-pink-600 hover:text-red-600 cursor-pointer"
          onClick={handleDelete}
        />
        <Link to={`/biodatas/details/${dataId}`}>
          <FaEye className="text-pink-600 hover:text-pink-600" />
        </Link>
      </td>
    </tr>
  );
};

FavoritesBioDataRow.propTypes = {
  item: PropTypes.object,
};

export default FavoritesBioDataRow;
