
import AppRoutes from "./routes/AppRoutes";



import TeamPage from "./pages/TeamPage";

import LandingPage from "./pages/LandingPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <>
       <AppRoutes />
      <TeamPage />
  
      <LandingPage/>

    </>
  );
}


export default App;
