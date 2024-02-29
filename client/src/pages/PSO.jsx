import { useState } from "react";
import Layout from "../layout/Layout";
import PSOForm from "../components/PSOForm";
import PSOResult from "../components/PSOResult";
import CircularLoader from "../components/CircularLoader/CircularLoader";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer";

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
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
    <>
      <NavBar />
      <Layout>
        <h1 className="text-5xl text-center font-bold text-gray-700">
          Shortest Path Finder
        </h1>
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
              <div className="w-2/5  rounded-md text-4xl font-bold  text-gray-700 flex text-center">
                Let's find the shortest path!
              </div>
            )}
          </div>
        </div>
      </Layout>
      <Footer />
    </>
  );
};

export default PSO;
