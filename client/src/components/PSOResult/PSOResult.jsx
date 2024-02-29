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

export default PSOResult;
