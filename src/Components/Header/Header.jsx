import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
function Header() {
  return (
    <div>
      <div>
        <span className="border-top"></span>
        <h2>Dwello</h2>
      </div>

      <div>
        <a href="">Home</a>
        <a href="">Service</a>
        <a href="">Agent</a>
        <a href="">Contact</a>
      </div>

      <div>
        <div>
          <input type="text" placeholder="Search" />
          <SearchIcon />
        </div>
        <div>
          <PersonIcon />
        </div>

        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Header;
