import PropTypes from "prop-types";

const Container = ({ children }) => {
  return (
    <div className="max-w-[100rem] w-full mx-auto px-4 py-10 md:py-20">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node,
};

export default Container;
