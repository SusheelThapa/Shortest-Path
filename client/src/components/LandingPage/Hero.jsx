import { RiTreeFill } from "react-icons/ri";

const LandingPageHero = () => {
  
  return (
    <div className="grid md:grid-cols-2">
      <div className="landing-head-comp text-white h-[90vh] flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Particle Swarm Optimization</h1>
          <h2 className="text-3xl font-bold mt-4">for Shortest Path Problems</h2>
          <p className="text-lg mt-8">Explore the power of Particle Swarm Optimization algorithms to find the shortest path efficiently.</p>
          <button className="mt-12 px-8 py-3 bg-white text-gray-800 font-bold rounded-full hover:bg-gray-200 transition duration-300 ease-in-out"> 
          Try Now {'>'}
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
  <img
    src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*pGsUNDC03IjJeIbEyGLsnQ.png"
    alt=""
    className="filter brightness-100 contrast-125 shadow-lg"
  />
</div>

    </div>
  );
};

export default LandingPageHero;
