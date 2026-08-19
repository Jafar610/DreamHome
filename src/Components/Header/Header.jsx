import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
function Header() {
  const [input, setInput] = useState("hidden");
 const handleClicked = () => {
  setInput(prev => prev === "hidden" ? "visible" : "hidden");
};
  return (
    <>
      <div className="flex justify-between align-center bg-[#FEF7F2] px-20 py-6">
        <div className="border-top-2 border-[#2A1B12]">
          <span className="border-top"></span>
          <h2 className="font-bold text-lg">Dwello</h2>
        </div>

        <div className="flex justify-center gap-10 text-lg text-[#2A1B12] font-bold ">
          <a href="">Home</a>
          <a href="">Service</a>
          <a href="">Agent</a>
          <a href="">Contact</a>
        </div>

        <div className="flex justify-center align-center gap-6">
          <div
            className="flex justify-center align-center py-1 border border-[#2A1B12] rounded-sm"
            onClick={handleClicked}
          >
            <input
              type="text"
              placeholder="Search"
              className={`${input} outline-none px-2`}
            />
            <SearchIcon />
          </div>
          <div className="flex justify-center align-center text-lg py-1">
            <PersonIcon />
          </div>

          <div className="flex align-center border rounded-lg px-4 py-1 bg-[#2A1B12] text-white">
            <button className="text-center">Sign up</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
