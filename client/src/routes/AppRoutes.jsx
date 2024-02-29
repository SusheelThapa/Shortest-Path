import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PSO from "../pages/PSO";
import TeamPage from "../pages/TeamPage";
import LandingPage from "../pages/LandingPage";
import SampleResult from "../pages/SampleResult";
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/path-finder" element={<PSO />}></Route>
        <Route path="/" element={<LandingPage />} />
        <Route path="/our-team" element={<TeamPage />} />
        <Route path="/sample-result" element={<SampleResult />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
