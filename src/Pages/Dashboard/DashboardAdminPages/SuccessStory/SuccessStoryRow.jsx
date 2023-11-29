import PropTypes from "prop-types";
import SuccessStoryModal from "./SuccessStoryModal";

const SuccessStoryRow = ({ item }) => {
  const { selfBioId, partnerBioId, marriageDate, selfGender,selfName,partnerName } = item || {};
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
      {selfGender === "Male" ? selfName : partnerName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
      {selfGender === "Female" ? selfName : partnerName}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {selfGender === "Male" ? selfBioId : partnerBioId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {selfGender === "Female" ? selfBioId : partnerBioId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {marriageDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 text-center">
        <SuccessStoryModal item={item} />
      </td>
    </tr>
  );
};

SuccessStoryRow.propTypes = {
  item: PropTypes.object,
};

export default SuccessStoryRow;
