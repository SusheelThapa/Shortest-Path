import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PSO from "../pages/PSO";
import HomePage from "../pages/HomePage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/path-finder" element={<PSO />}></Route>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
