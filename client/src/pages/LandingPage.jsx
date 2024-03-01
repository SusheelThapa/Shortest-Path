import ParticleAnimation from "../components/LandingPage/ParticleAnimation";
import animationConfig from "../json/particles.json";
// import LandingPageHeader from "../components/LandingPage/Header";
import LandingPageHero from "../components/LandingPage/Hero";
import Navbar from '../components/NavBar/NavBar'
const LandingPage = () => {
  return (
    <div className="relative">
      <ParticleAnimation config={animationConfig} className="absolute inset-0 z-0" />
      <div className="relative z-10">
        <Navbar/>
        {/* <LandingPageHeader /> */}
        <LandingPageHero />
      </div>
    </div>
  );
}

export default LandingPage;
