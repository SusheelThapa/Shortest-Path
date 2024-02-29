import { useState } from "react";

const PSOForm = () => {
  const [startingPosition, setStartingPosition] = useState({ x: "", y: "" });
  const [targetPosition, setTargetPosition] = useState({ x: "", y: "" });
  const [obstacles, setObstacles] = useState([]);

  const handleStartingPositionChange = (e, axis) => {
    setStartingPosition((prev) => ({ ...prev, [axis]: e.target.value }));
  };

  const handleTargetPositionChange = (e, axis) => {
    setTargetPosition((prev) => ({ ...prev, [axis]: e.target.value }));
  };

  const handleAddObstacle = () => {
    setObstacles((prev) => [...prev, { x: "", y: "", radius: "" }]);
  };

  const handleRemoveObstacle = (index) => {
    setObstacles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleObstacleChange = (index, key, value) => {
    setObstacles((prev) =>
      prev.map((obstacle, i) =>
        i === index ? { ...obstacle, [key]: value } : obstacle
      )
    );
  };

  const handleSubmit = () => {
    console.log("Perform pathfinding with the following data:", {
      startingPosition,
      targetPosition,
      obstacles,
    });
  };

  return (
    <div className="w-1/2">
      <div className="ml-20 p-10 px-20 flex flex-col gap-4">
        <h2 className="text-4xl font-bold mb-4">Pathfinding Configuration</h2>
        <div className="flex gap-5">
          <label htmlFor="startingX" className="sr-only">
            Starting Position x:
          </label>
          <input
            id="startingX"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Starting Position x"
            value={startingPosition.x}
            onChange={(e) => handleStartingPositionChange(e, "x")}
          />
          <label htmlFor="startingY" className="sr-only">
            Starting Position y:
          </label>
          <input
            id="startingY"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Starting Position y"
            value={startingPosition.y}
            onChange={(e) => handleStartingPositionChange(e, "y")}
          />
        </div>
        <div className="flex gap-5">
          <label htmlFor="targetX" className="sr-only">
            Target Position x:
          </label>
          <input
            id="targetX"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Target Position x"
            value={targetPosition.x}
            onChange={(e) => handleTargetPositionChange(e, "x")}
          />
          <label htmlFor="targetY" className="sr-only">
            Target Position y:
          </label>
          <input
            id="targetY"
            className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
            type="number"
            placeholder="Target Position y"
            value={targetPosition.y}
            onChange={(e) => handleTargetPositionChange(e, "y")}
          />
        </div>
        <h2 className="text-2xl font-bold mb-2">Obstacle Configuration:</h2>
        {obstacles.map((obstacle, index) => (
          <div key={index} className="flex gap-5">
            <label htmlFor={`obstacleX${index}`} className="sr-only">
              Obstacle {index + 1} x:
            </label>
            <input
              id={`obstacleX${index}`}
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              placeholder={`Obstacle ${index + 1} x`}
              value={obstacle.x}
              onChange={(e) => handleObstacleChange(index, "x", e.target.value)}
            />
            <label htmlFor={`obstacleY${index}`} className="sr-only">
              Obstacle {index + 1} y:
            </label>
            <input
              id={`obstacleY${index}`}
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              placeholder={`Obstacle ${index + 1} y`}
              value={obstacle.y}
              onChange={(e) => handleObstacleChange(index, "y", e.target.value)}
            />
            <label htmlFor={`obstacleRadius${index}`} className="sr-only">
              Obstacle {index + 1} Radius:
            </label>
            <input
              id={`obstacleRadius${index}`}
              className="w-full px-3 py-2 mb-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="number"
              placeholder={`Obstacle ${index + 1} Radius`}
              value={obstacle.radius}
              onChange={(e) =>
                handleObstacleChange(index, "radius", e.target.value)
              }
            />
            <button
              onClick={() => handleRemoveObstacle(index)}
              className="px-3 py-2 text-white bg-red-500 rounded-md focus:outline-none hover:bg-red-600"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          onClick={handleAddObstacle}
          className="w-2/3 px-3 py-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
        >
          + Add Obstacle
        </button>
        <hr />
        <button
          onClick={handleSubmit}
          className=" px-3 py-2 mt-4 text-white text-xl font-extrabold bg-green-500 rounded-md focus:outline-none hover:bg-green-600"
        >
          Generate Shortest Path
        </button>
      </div>
    </div>
  );
};

export default PSOForm;
