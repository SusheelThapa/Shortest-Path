import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="h-20 bg-black flex justify-center items-center ">
      {/* Logo section */}
      <div className="mx-48 text-white flex justify-center items-center w-screen">
        <Link to="/">
          <div className="flex gap-2 items-end justify-end">
            {/* <img src={""} alt="Logo" className="w-10 rounded-full" /> */}
            <div className="text-4xl font-extrabold ">PSO</div>
          </div>
        </Link>
        {/* navigation menu */}
        <div className="flex justify-end items-center w-full text-2xl">
          <ul className="flex gap-10  justify-start items-center font-medium">
            <li className="hover:text-green-600 cursor-pointer">
              <Link to="/path-finder">Path Finder</Link>
            </li>
            <li className="hover:text-green-600 cursor-pointer">
              <Link to="/our-team">Our Team</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
