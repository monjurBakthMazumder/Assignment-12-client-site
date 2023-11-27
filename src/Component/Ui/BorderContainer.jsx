import PropTypes from "prop-types";

const BorderContainer = ({ children }) => {
  return (
    <div className="max-w-7xl mx-auto w-full border-2 rounded border-pink-400 px-5 sm:px-10 py-10">
      {children}
    </div>
  );
};

BorderContainer.propTypes = {
  children: PropTypes.node,
};
export default BorderContainer;