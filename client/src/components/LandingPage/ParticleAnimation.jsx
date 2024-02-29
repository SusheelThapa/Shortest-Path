import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

// Importing Particles and the initParticlesEngine function from tsparticles
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

/**
 * @component ParticleAnimation
 * @description Creates a particle animation effect using the tsparticles library.
 *
 * @param {Object} props - The props for the ParticleAnimation component.
 * @param {Object} props.config - Configuration object for the particle animation.
 *
 * @returns {JSX.Element} - A particle animation effect if initialized successfully.
 */
const ParticleAnimation = ({ config }) => {
  // State to track if the particles engine is initialized
  const [init, setInit] = useState(false);

  // useEffect hook to initialize the particles engine once
  useEffect(() => {
    // If already initialized, do nothing
    if (init) {
      return;
    }
    // Initialize the particles engine and then set the init state to true
    initParticlesEngine(async (engine) => {
      // Loads the full tsparticles engine
      await loadFull(engine);
    }).then(() => {
      // Update state to indicate initialization is complete
      setInit(true);
    });
  }, []); // Dependency array includes init to prevent unnecessary re-initialization

  // Rendering the Particles component only if the engine is initialized
  return (
    <React.Fragment>{init && <Particles options={config} />}</React.Fragment>
  );
};

// PropTypes validation for the config prop
ParticleAnimation.propTypes = {
  config: PropTypes.object,
};

export default ParticleAnimation;
