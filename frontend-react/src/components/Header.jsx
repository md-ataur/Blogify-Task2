import React from "react";
import logo from "../assets/images/logo.svg";
import srcIcon from "../assets/images/search.svg";
import glbIcon from "../assets/images/globe.svg";
import menuIcon from "../assets/images/menu.svg";
import avatar from "../assets/images/avatar.png";

const Header = ({ dateSearchKey }) => {
  return (
    <div className="px-5 py-5">
      <div className="flex justify-between items-center mb-6">
        <div>
          <img src={logo} alt="" />
        </div>
        <div className="menu-search">
          <div className="search-field">
            <input
              onChange={(e) => dateSearchKey(e.target.value)}
              type="date"
              placeholder="Search..."
            />
          </div>
          <span>
            <img src={srcIcon} alt="" />
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-4 items-center">
            <h3 className="font-bold w-[130px]">Become a Host</h3>
            <img src={glbIcon} alt="" />
          </div>
          <div className="flex gap-3 items-center border rounded-3xl px-4 py-2">
            <img src={menuIcon} alt="" />
            <img src={avatar} alt="" />
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <span className="border rounded-3xl px-4 py-2">Price</span>
        <span className="border rounded-3xl px-4 py-2">Type of place</span>
        <span className="border rounded-3xl px-4 py-2">Free cancellation</span>
        <span className="border rounded-3xl px-4 py-2">Wifi</span>
        <span className="border rounded-3xl px-4 py-2">Kitchen</span>
        <span className="border rounded-3xl px-4 py-2">Air condition</span>
        <span className="border rounded-3xl px-4 py-2">Washer</span>
        <span className="border rounded-3xl px-4 py-2">Iron</span>
        <span className="border rounded-3xl px-4 py-2">Dedicated workspace</span>
        <span className="border rounded-3xl px-4 py-2">Free parking</span>
        <span className="border rounded-3xl px-4 py-2">Dryer</span>
        <span className="border rounded-3xl px-4 py-2">Filters</span>
      </div>
    </div>
  );
};

export default Header;
