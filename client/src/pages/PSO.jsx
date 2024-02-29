import { useState } from "react";
import Layout from "../layout/Layout";
import PSOForm from "../components/PSOForm";
import PSOResult from "../components/PSOResult";
import CircularLoader from "../components/CircularLoader/CircularLoader";

const PSO = () => {
  const [loading, setLoading] = useState(false);
  const [result] = useState(null);

  const [formState, setFormState] = useState({
    startingPosition: { x: "", y: "" },
    targetPosition: { x: "", y: "" },
    obstacles: [{ x: "", y: "", radius: "" }],
  });

  const handleStartingPositionChange = (e, axis) => {
    setFormState((prev) => ({
      ...prev,
      startingPosition: { ...prev.startingPosition, [axis]: e.target.value },
    }));
  };

  const handleTargetPositionChange = (e, axis) => {
    setFormState((prev) => ({
      ...prev,
      targetPosition: { ...prev.targetPosition, [axis]: e.target.value },
    }));
  };

  const handleAddObstacle = () => {
    setFormState((prev) => ({
      ...prev,
      obstacles: [...prev.obstacles, { x: "", y: "", radius: "" }],
    }));
  };

  const handleRemoveObstacle = (index) => {
    if (formState.obstacles.length == 1) {
      return;
    }

    setFormState((prev) => ({
      ...prev,
      obstacles: prev.obstacles.filter((_, i) => i !== index),
    }));
  };

  const handleObstacleChange = (index, key, value) => {
    setFormState((prev) => ({
      ...prev,
      obstacles: prev.obstacles.map((obstacle, i) =>
        i === index ? { ...obstacle, [key]: value } : obstacle
      ),
    }));
  };
  const handlePSOSubmit = async () => {
    setLoading(true);

    try {
      // Perform PSO logic or API call using formState
    } catch (error) {
      console.error("Error in PSO calculation:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div>Shortest Path Finder</div>
      <div className="bg-stone-50 rounded-3xl ">
        <div className="my-10 flex  justify-between items-center">
          <PSOForm
            formState={formState}
            onStartingPositionChange={handleStartingPositionChange}
            onTargetPositionChange={handleTargetPositionChange}
            onAddObstacle={handleAddObstacle}
            onRemoveObstacle={handleRemoveObstacle}
            onObstacleChange={handleObstacleChange}
            onPSOSubmit={handlePSOSubmit}
          />
          {loading ? (
            <CircularLoader />
          ) : result != null ? (
            <PSOResult />
          ) : (
            "I love you"
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PSO;
