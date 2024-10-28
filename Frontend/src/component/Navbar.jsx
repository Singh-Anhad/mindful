import React, { useEffect } from "react";
import { useState } from "react";
import Login from "./Login";
import RadioPlayer from "./RadioPlayer";

function Navbar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      document.body.classList.add("dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li><a href="/">Home</a></li>
      <li><a href="/Course">Courses</a></li>
      <li>
        <details>
          <summary>Music</summary>
          <ul className="p-2">
            <li><a href="/Classical">Classical</a></li>
            <li><a href="/Rock">Rock</a></li>
            <li><a href="/HipHop">Hip-Hop</a></li>
            <li><a href="/Pop">Pop</a></li>
            <li><a href="/Jazz">Jazz</a></li>
          </ul>
        </details>
      </li>
      <li><a href="/Radio">Radio</a></li>
      <li><a href="/Contact">Contact Us</a></li>
      <li><a href="/Aboutus">About Us</a></li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 
      ${theme === "dark" ? "dark:bg-slate-800 dark:text-white" : "bg-base-100 text-black"}
      fixed top-0 left-0 right-0 z-50 ${sticky ? "sticky-navbar shadow-md bg-base-200 duration-300 transition-all ease-in-out" : ""}`}
    >
      <div className="navbar">
        {/* Navbar Start */}
        <div className="navbar-start">
        <a href="/" className="flex items-center">
        <img src="/logo.jpeg" alt="Logo" className="h-10 mr-2" />
    <span className="text-xl"></span>
</a>

          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            {/* Mobile Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-xl">Mindful Melodies</a>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-3">
          {/* Search Bar */}
          <div className="hidden md:block">
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>

          {/* Theme Switch */}
          <label className="swap swap-rotate">
            <input type="checkbox" className="theme-controller" />

            {/* Sun Icon */}
            <svg
              className="swap-off h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17a1,1,0,0,0-.71.29l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,18.36,17ZM16.93,6.34a1,1,0,0,0-.7-.29,1,1,0,0,0-.71.29,1,1,0,0,0,0,1.41l.71.71a1,1,0,0,0,1.41-1.41ZM21.71,12.29l-.71-.71a1,1,0,0,0-1.41,1.41l.71.71a1,1,0,0,0,1.41-1.41Z" />
            </svg>

            {/* Moon Icon */}
            <svg
              className="swap-on h-8 w-8 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <path d="M12 0a12 12 0 1 0 8.485 20.485c-.1-.086-.2-.175-.305-.264A10 10 0 0 1 12 2a10.0008 10.0008 0 0 1 1.095 19.868c-1.488-.473-3.07-1.322-4.25-2.467A11.933 11.933 0 0 1 7 12a11.895 11.895 0 0 1 4.767-9.45C10.637 2.23 8.88 2 8 2a8.006 8.006 0 0 0 0 16c1.317 0 2.562-.19 3.736-.545A10 10 0 0 1 12 2zm0 0z" />
            </svg>
          </label>

          {/* Login Button */}
          <a
            href="/"
            className="bg-black text-white px-3 py-2 rounded-md hover:bg-slate-800 duration-300 cursor-pointer"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("my_modal_3").showModal();
            }}
          >
            Login
          </a>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
