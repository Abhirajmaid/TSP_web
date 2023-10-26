import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="w-full px-[2%] md:px-[6%] py-[20px] flex items-center justify-between">
        <div>
          <img className="w-[200px]" src="images/logo.png" alt="" />
        </div>
        <div className=" p-1 rounded-md px-5 backdrop-blur-[22px] shadow-[inset_0_0_0_200px_rgba(255,255,255,0.074)] border border-solid border-gray ">
          <ul className="flex items-center gap-5 text-white">
            <li>Home</li>
            <li>Store</li>
            <li>TSBP One</li>
            <li>Events</li>
            <li>Tours</li>
            <li>News</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
