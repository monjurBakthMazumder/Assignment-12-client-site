import PropTypes from "prop-types";

const ManageUserRow = ({ item }) => {
  const { name, email, role, premium } = item || {};
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
          <button className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white">
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
          <button className="py-2 px-5 inline-flex justify-center items-center gap-2 rounded font-semibold border border-pink-600 bg-transparent text-pink-500 hover:bg-pink-600 hover:text-white">
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
