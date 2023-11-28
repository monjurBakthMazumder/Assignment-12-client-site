import PropTypes from "prop-types";
import SuccessStoryModal from "./SuccessStoryModal";

const SuccessStoryRow = ({ item }) => {
  const { selfBioId, partnerBioId, marriageDate } = item || {};
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {selfBioId}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">
        {partnerBioId}
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
