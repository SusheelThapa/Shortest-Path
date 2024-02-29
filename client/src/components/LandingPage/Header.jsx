// import { Link } from "react-router-dom";
// import img_logo from "../../img/logo.png";


const LandingPageHeader = () => {
  return (
    <div className="hero-header ">
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* <Link to="/"> */}
          <div className="flex flex-col items-center">
            {/* <img
                  src={img_logo}
                  className="h-16 me-3 bg-transparent"
                  alt="FlowBite Logo"
                />   */}
            <h1 className="text-4xl font-extrabold hover:text-green-500 ">
              PSO
            </h1>
          <p className="text-sm">Find Shortest Path</p>
          </div>
          {/* </Link> */}
          <nav>
            <ul className="flex space-x-4 text-xl">
              <li
                className="hover flex items-center hover:text-green-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-aboutUs").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                About
              </li>
              <li
                className="hover flex items-center hover:text-green-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-features").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Features
              </li>
              <li
                className="hover flex items-center hover:text-green-500 cursor-pointer"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({
                    top: document.querySelector("#landing-contactUs").offsetTop,
                    behavior: "smooth",
                  });
                }}
              >
                Contact Us
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default LandingPageHeader;
