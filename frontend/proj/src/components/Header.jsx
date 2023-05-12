import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-white bg-black body-font sticky top-0 ">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl text-white">Greetings</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-blue-400">
            Posts
          </Link>
          <Link to="/post" className="mr-5 hover:text-blue-400">
            Post Greetings
          </Link>
          {/* <Link to="/" className="mr-5 hover:text-blue-400">
            Third Link
          </Link>
          <Link to="/" className="mr-5 hover:text-blue-400">
            Fourth Link
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
