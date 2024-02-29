import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <div className="mx-48 mt-5 w-5/6">{children}</div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
