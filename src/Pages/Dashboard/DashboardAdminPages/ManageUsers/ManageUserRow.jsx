import PropTypes from "prop-types";
import useAxiosSecure from "../../../../Hock/useAxiosSecure";
import Swal from "sweetalert2";

const ManageUserRow = ({ item }) => {
  const { name, email, role, premium } = item || {};
  const axiosSecure = useAxiosSecure();
  const handleMakeAdmin = () => {
    const admin = {
      email,
      role: "admin",
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want make this user as admin?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put("/users/make-admin", admin).then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Make admin successfully ",
              text: "This user is admin from now",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakePremiumUser = () => {
    const premiumUser = {
      email,
      premium: true,
    };
    Swal.fire({
      title: "Are you sure?",
      text: "You want make this user as premium?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes,make premium!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.put("/users/make-premium-user", premiumUser)
        .then((res) => {
          if (res.status === 200) {
            Swal.fire({
              title: "Premium user successful",
              text: "This user is premium user from now",
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
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
        {role === "admin" ? (
          <button
            disabled
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold bg-pink-600 text-white border border-pink-600"
          >
            Admin
          </button>
        ) : (
          <button
            onClick={handleMakeAdmin}
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
          >
            User
          </button>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
        {premium ? (
          <button
            disabled
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold bg-pink-600 text-white border border-pink-600"
          >
            Premium
          </button>
        ) : (
          <button
            onClick={handleMakePremiumUser}
            className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white"
          >
            Make Premium
          </button>
        )}
      </td>
    </tr>
  );
};

ManageUserRow.propTypes = {
  item: PropTypes.object,
};

export default ManageUserRow;
