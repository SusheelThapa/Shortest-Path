import PropTypes from "prop-types";

const PSOResult = ({ imageUrl }) => (
  <div>
    <img
      className="p-4 rounded-3xl overflow-hidden my-4"
      src={imageUrl}
      alt="Pathfinding Result"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </div>
);

PSOResult.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default PSOResult;
