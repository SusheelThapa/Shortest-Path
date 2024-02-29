import { useState } from "react";
import Layout from "../layout/Layout";
import PSOForm from "../components/PSOForm";
import PSOResult from "../components/PSOResult";
import CircularLoader from "../components/CircularLoader/CircularLoader";

const PSO = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

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
      const response = await fetch("http://127.0.0.1:8000/shortest-path", {
        method: "POST", // Adjust the method based on your API requirements
        headers: {
          "Content-Type": "application/json",
          // Add any other headers if needed
        },
        body: JSON.stringify(formState), // Adjust the body based on your API requirements
      });


      if (response.ok) {
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);
      setResult({ imageUrl });
      } else {
        console.error("Error in API call:", response.statusText);
      }
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
            <PSOResult imageUrl={result.imageUrl} />
          ) : (
            "I love you"
          )}
        </div>
      </div>
    </Layout>
  );
};

export default PSO;
