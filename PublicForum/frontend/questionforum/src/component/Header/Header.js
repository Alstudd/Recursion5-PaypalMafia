import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import "./css/Header.css";
function Header() {
  return (
    <header>
      <div className="Header-container">
        <div className="header-left">
          <img src="" alt="logo" />
        </div>
        <div className="header-middle">
          <div className="header-search">
            <SearchIcon />
            <input type="text" placeholder="search" />
          </div>
        </div>
        <div className="header-right">
          <Avatar />
          <InboxIcon />
        </div>
      </div>
    </header>
  );
}

export default Header;
