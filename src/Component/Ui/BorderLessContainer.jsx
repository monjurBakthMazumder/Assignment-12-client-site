import PropTypes from "prop-types";

const BorderLessContainer = ({ children }) => {
  return <div className="max-w-7xl w-full mx-auto">{children}</div>;
};

BorderLessContainer.propTypes = {
  children: PropTypes.node,
};
export default BorderLessContainer;
