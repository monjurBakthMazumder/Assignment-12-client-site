import PropTypes from "prop-types";

const Heading = ({ children }) => {
  return (
    <h1 className="text-3xl md:text-4xl underline font-bold text-center mb-10">
      {children}
    </h1>
  );
};

Heading.propTypes = {
  children: PropTypes.node,
};

export default Heading;
